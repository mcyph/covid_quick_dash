import * as dfd from "danfojs/src/index";

import dfWorldBankPop from "./populationData/worldbank_pop.csv";
import dfWorldBankPopMetadata from "./populationData/worldbank_pop_metadata.csv";

let __joined = dfd.merge({
  "left": dfWorldBankPop,
  "right": dfWorldBankPopMetadata,
  "on": ["Country Code"]
});

export default __joined;
