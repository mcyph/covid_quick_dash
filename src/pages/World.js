import React from "react";
import * as dfd from "danfojs/src/index";

import CovidData from "../data/CovidData";
import BasicBarChart from "./BasicBarChart";
import { CircularProgress } from "@material-ui/core";
import utilityFns from "./utilityFns";

class World extends React.Component {
  state = {}

  /**
   * A single chart (one of confirmed/recovered/deaths)
   * displaying stats on a world regional level
   *
   * @param name the printable name, e.g. "Confirmed"
   * @param apiKey the api endpoint name, e.g. "confirmed"
   * @param color the color of the bar chart items
   */
  constructor({ name, apiKey, color }) {
    super({ name, apiKey, color });

    if (!this.state.dfLoading) {
      // Load the data in the background
      this.setState({ "dfLoading": true });

      CovidData.getDetailedStats(apiKey).then(df => {
        // We're only interested in these properties,
        // so reduce to only them to increase performance
        utilityFns.reduceToOnlyCols(
            df, [this.props.apiKey, "Population", "Region"]
        )

        // Update the UI
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
      let column = this.props.apiKey;
      let df = this.state.df;

      df = df.fillna({ "values": 0 })

      // Group by geographic region
      // e.g. "East Asia and Pacific" etc
      df = df.groupby(["Region"])
             .col([column])
             .sum();
      let mapper = {};
      mapper[column+"_sum"] = column;
      df.rename({ "mapper": mapper, "inplace": true });

      // Sort the values in a descending order
      df = df.sort_values({ "by": column, "ascending": false })

      // Convert to arrays of [[column, value], ...]
      let valuesOut = utilityFns.getTwoTuples(df, "Region", column);

      return <>
        <BasicBarChart
          xAxisType={ BasicBarChart.AXIS_TYPE.CATEGORY }
          xAxisLabelRich={ this.__richProps }
          xAxisMargin={ 20 }
          yAxisType={ BasicBarChart.AXIS_TYPE.VALUE }
          style={{ height: "calc(38vh - 33px)", marginTop: "25px" }}
          data={ [[this.props.name, valuesOut, this.props.color]] }
        />
      </>;
    }
  }
}

export default World;
