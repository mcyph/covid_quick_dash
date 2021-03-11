import React from "react";
import CovidData from "../data/CovidData";
import BasicBarChart from "../charts/BasicBarChart";
import { CircularProgress } from "@material-ui/core";

class Countries extends React.Component {
  state = {}

  /**
   * A single chart (one of confirmed/recovered/deaths)
   * displaying stats on a country (admin 0) level
   *
   * @param name the printable name, e.g. "Confirmed"
   * @param apiKey the api endpoint name, e.g. "confirmed"
   * @param color the color of the bar chart items
   */
  constructor({ name, apiKey, color }) {
    super({ name, apiKey, color });

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
      return <div style={{textAlign: "center"}}>
        <CircularProgress />
      </div>;

    } else {
      // Otherwise show the bar chart

      let sumBy=(column)=>{
        // Some countries like the US and the UK have data provided
        // by province/state but not country-wide, so we need to
        // add this data up by aggregating it
        let mapper = {};
        mapper[column+"_sum"] = column;

        return this.state.df
          .dropna({ axis: 1 })
          .groupby(["countryRegion"])
            .col([column])
            .sum()
          .rename({
            mapper: mapper
          })
          .sort_values({
            by: column,
            ascending: false,
            inplace: false
          })
          .reset_index()
          .tensor.arraySync();
      }

      return <>
        <div style={{ marginTop: "25px" }}>
          <BasicBarChart
            xAxisType={ BasicBarChart.AXIS_TYPE.CATEGORY }
            xAxisLabelRotate={ 90 }
            yAxisType={ BasicBarChart.AXIS_TYPE.VALUE }
            style={{ height: "calc(50vh - 33px)" }}
            data={[[this.props.name,
                    sumBy(this.props.apiKey),
                    this.props.color]]} />
        </div>
      </>;
    }
  }
}

export default Countries;
