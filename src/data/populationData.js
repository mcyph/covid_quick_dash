import dfWorldBankPop from "./populationData/worldbank_pop.csv";
import dfWorldBankPopMetadata from "./populationData/worldbank_pop_metadata.csv";

export default dfWorldBankPop
    .innerJoin(dfWorldBankPopMetadata, "Country Code");
