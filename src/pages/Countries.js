import React from "react";
import CovidData from "../data/CovidData";
import BasicBarChart from "../charts/BasicBarChart";
import { CircularProgress } from "@material-ui/core";

class Countries extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    if (!this.state.df) {
      CovidData.getConfirmed().then(df => {
        this.setState({ df: df });
      });
    }
  }

  render() {
    if (!this.state.df) {
      // Display a progress bar if the data hasn't loaded yet
      return <CircularProgress />;

    } else {
      // Otherwise show the bar chart

      let sumBy=(column)=>{
        // Some countries like the US and the UK have data provided
        // by province/state but not country-wide, so we need to
        // add this data up by aggregating it
        return this.state.df
          .groupBy("countryRegion")
          .aggregate(group => group.stat.sum(column))
          .rename("aggregation", column)
          .select("countryRegion", column)
          .sortBy(column, true)
          .toArray();
      }

      return <>
        <div style={{ marginTop: "25px" }}>
          <BasicBarChart
            xAxisType={ BasicBarChart.AXIS_TYPE.CATEGORY }
            xAxisLabelRotate={ 45 }
            yAxisType={ BasicBarChart.AXIS_TYPE.VALUE }
            style={{ height: "calc(100vh - 100px)" }}
            data={[
              ["Confirmed", sumBy("confirmed")],
              ["Recovered", sumBy("recovered")],
              ["Deaths", sumBy("deaths")],
            ]} />
        </div>
      </>;
    }
  }
}

export default Countries;
