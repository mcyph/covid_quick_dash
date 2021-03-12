import React from "react";
import CovidData from "../data/CovidData";
import BasicBarChart from "../charts/BasicBarChart";
import { CircularProgress } from "@material-ui/core";
import flagData from "../data/flagData";

class Countries extends React.Component {
  state = {}

  /**
   * A single chart (one of confirmed/recovered/deaths)
   * displaying stats on a country (admin 0) level
   *
   * @param name the printable name, e.g. "Confirmed"
   * @param apiKey the api endpoint name, e.g. "confirmed"
   * @param color the color of the bar chart items
   * @param per100k whether to display per 100k inhabitants
   *                (per capita values)
   */
  constructor({ name, apiKey, color, per100k }) {
    super({ name, apiKey, color, per100k });

    if (!this.state.df) {
      // Load the data in the background
      CovidData.getDetailedStats(apiKey).then(df => {
        this.setState({ df: df });
      });
    }
  }

  render() {
    if (!this.state.df) {
      // Display a progress bar if the data hasn't loaded yet
      return <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>;

    } else {
      // Otherwise show the bar chart
      let values;
      let column = this.props.apiKey;

      if (this.props.per100k) {
        // Show per capita values
        values = this.state.df;
        values.addColumn({
          column: "derived",
          value: this.state.df[column].mul(100000)
                                      .div(this.state.df['Population'])
        });
        values = values.drop({
          columns: [column],
          axis: 1
        }).rename({
          mapper: { "derived": column }
        });
      } else {
        values = this.state.df;
      }

      // We'll fill null/NaN's for now so we don't get errors,
      // but note this could have an effect on averages if we
      // want to show them later!
      values = values.fillna({ values: 0 })

      // Some countries like the US and the UK have data provided
      // by province/state but not country-wide, so we need to
      // add this data up by aggregating it
      // TODO: Add validation to make sure this isn't performed for
      //  countries which have higher-level data (if it exists)
      values = values.groupby(["countryRegion"])
                     .col([column])
                     .sum();
      let mapper = {};
      mapper[column+"_sum"] = column;
      values.rename({ mapper: mapper, inplace: true });

      // Sort the values in a descending order
      values = values.sort_values({ by: column, ascending: false })
      //values.reset_index(true);

      // Convert to arrays of [[column, value], ...]
      values = [values["countryRegion"].values, values[column].values];
      let valuesOut = [];
      for (let i=0; i<values[0].length; i++) {
        valuesOut.push([values[0][i], values[1][i]])
      }

      let richProps = {};
      if (this.state.df) {
        const REPLACE_RE = /[ '(),-]/g;
        let countryRegionValues = this.state.df['countryRegion'].values
        let iso2Values = this.state.df['iso2'].values;

        for (let x=0; x<countryRegionValues.length; x++) {
          let countryRegion = countryRegionValues[x];
          let iso2 = iso2Values[x];

          richProps[countryRegion.replace(REPLACE_RE, '_')] = {
            width: 24,
            height: 24,
            align: 'center',
            backgroundColor: {
              image: "data:image/png;base64," + flagData[iso2]
            }
          };
        };
      }

      return <>
        <BasicBarChart
          xAxisType={ BasicBarChart.AXIS_TYPE.CATEGORY }
          xAxisLabelRotate={ 60 }
          xAxisLabelRich={ richProps }
          xAxisMargin={ 11 }
          yAxisType={ BasicBarChart.AXIS_TYPE.VALUE }
          style={{ height: "calc(50vh - 33px)", marginTop: "25px" }}
          data={ [[this.props.name, valuesOut, this.props.color]] }
        />
      </>;
    }
  }
}

export default Countries;
