import { DataFrame } from "dataframe-js";
import dfPopulationData from "./populationData";

class CovidData {
  constructor() {
    this.__cache = {};
  }

  __fromURL=async(URL)=>{
    if (!this.__cache[URL]) {
      this.__cache[URL] = await DataFrame.fromJSON(URL);
    }
    return this.__cache[URL];
  }

  /**************************************************
   * World-wide stats
   **************************************************/

  getBasicStats=async()=>{
    const URL = "https://covid19.mathdro.id/api";
    let df = await this.__fromURL(URL);
    alert(dfPopulationData.show())
    return dfPopulationData
        .rename("Country Code", "iso3")
        .innerJoin(df, "iso3");
  }

  /**************************************************
   * Confirmed stats
   **************************************************/

  getConfirmed=async()=>{
    const URL = "https://covid19.mathdro.id/api/confirmed";
    let df = await this.__fromURL(URL);
    let r = dfPopulationData
        .rename("Country Code", "iso3")
    return r
        .innerJoin(df, "iso3");
  }

  /**************************************************
   * Recovered stats
   **************************************************/

  getRecovered=async()=>{
    const URL = "https://covid19.mathdro.id/api/recovered";
    let df = await this.__fromURL(URL);
    return dfPopulationData
        .rename("Country Code", "iso3")
        .innerJoin(df, "iso3");
  }

  /**************************************************
   * Deaths stats
   **************************************************/

  getDeaths=async()=>{
    const URL = "https://covid19.mathdro.id/api/deaths";
    let df = await this.__fromURL(URL);
    return dfPopulationData
        .rename("Country Code", "iso3")
        .innerJoin(df, "iso3");
  }

  /**************************************************
   * Daily time-series stats
   **************************************************/

  getDaily=async()=>{
    const URL = "https://covid19.mathdro.id/api/daily";
    let df = await this.__fromURL(URL);
    return df;
  }
}

export default new CovidData();
