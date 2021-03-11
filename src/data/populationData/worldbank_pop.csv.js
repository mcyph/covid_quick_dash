import { csvParse } from "d3-dsv";
import { DataFrame } from "dataframe-js";

export default DataFrame(csvParse(`Country Name,Country Code,Population
Aruba,ABW,106314
Afghanistan,AFG,38041754
Angola,AGO,31825295
Albania,ALB,2854191
Andorra,AND,77142
Arab World,ARB,427870270
United Arab Emirates,ARE,9770529
Argentina,ARG,44938712
Armenia,ARM,2957731
American Samoa,ASM,55312
Antigua and Barbuda,ATG,97118
Australia,AUS,25364307
Austria,AUT,8877067
Azerbaijan,AZE,10023318
Burundi,BDI,11530580
Belgium,BEL,11484055
Benin,BEN,11801151
Burkina Faso,BFA,20321378
Bangladesh,BGD,163046161
Bulgaria,BGR,6975761
Bahrain,BHR,1641172
"Bahamas, The",BHS,389482
Bosnia and Herzegovina,BIH,3301000
Belarus,BLR,9466856
Belize,BLZ,390353
Bermuda,BMU,63918
Bolivia,BOL,11513100
Brazil,BRA,211049527
Barbados,BRB,287025
Brunei Darussalam,BRN,433285
Bhutan,BTN,763092
Botswana,BWA,2303697
Central African Republic,CAF,4745185
Canada,CAN,37589262
Central Europe and the Baltics,CEB,102378579
Switzerland,CHE,8574832
Channel Islands,CHI,172259
Chile,CHL,18952038
China,CHN,1397715000
Cote d'Ivoire,CIV,25716544
Cameroon,CMR,25876380
"Congo, Dem. Rep.",COD,86790567
"Congo, Rep.",COG,5380508
Colombia,COL,50339443
Comoros,COM,850886
Cabo Verde,CPV,549935
Costa Rica,CRI,5047561
Caribbean small states,CSS,7401383
Cuba,CUB,11333483
Curacao,CUW,157538
Cayman Islands,CYM,64948
Cyprus,CYP,1198575
Czech Republic,CZE,10669709
Germany,DEU,83132799
Djibouti,DJI,973560
Dominica,DMA,71808
Denmark,DNK,5818553
Dominican Republic,DOM,10738958
Algeria,DZA,43053054
East Asia & Pacific (excluding high income),EAP,2093675040
Early-demographic dividend,EAR,3290290613
East Asia & Pacific,EAS,2340628292
Europe & Central Asia (excluding high income),ECA,399404587
Europe & Central Asia,ECS,921140092
Ecuador,ECU,17373662
"Egypt, Arab Rep.",EGY,100388073
Euro area,EMU,342597698
Eritrea,ERI,
Spain,ESP,47076781
Estonia,EST,1326590
Ethiopia,ETH,112078730
European Union,EUU,447512041
Fragile and conflict affected situations,FCS,798138587
Finland,FIN,5520314
Fiji,FJI,889953
France,FRA,67059887
Faroe Islands,FRO,48678
"Micronesia, Fed. Sts.",FSM,113815
Gabon,GAB,2172579
United Kingdom,GBR,66834405
Georgia,GEO,3720382
Ghana,GHA,30417856
Gibraltar,GIB,33701
Guinea,GIN,12771246
"Gambia, The",GMB,2347706
Guinea-Bissau,GNB,1920922
Equatorial Guinea,GNQ,1355986
Greece,GRC,10716322
Grenada,GRD,112003
Greenland,GRL,56225
Guatemala,GTM,16604026
Guam,GUM,167294
Guyana,GUY,782766
High income,HIC,1235852838
"Hong Kong SAR, China",HKG,7507400
Honduras,HND,9746117
Heavily indebted poor countries (HIPC),HPC,801708035
Croatia,HRV,4067500
Haiti,HTI,11263077
Hungary,HUN,9769949
IBRD only,IBD,4816235953
IDA & IBRD total,IBT,6486934853
IDA total,IDA,1670698900
IDA blend,IDB,561572202
Indonesia,IDN,270625568
IDA only,IDX,1109126698
Isle of Man,IMN,84584
India,IND,1366417754
Not classified,INX,
Ireland,IRL,4941444
"Iran, Islamic Rep.",IRN,82913906
Iraq,IRQ,39309783
Iceland,ISL,361313
Israel,ISR,9053300
Italy,ITA,60297396
Jamaica,JAM,2948279
Jordan,JOR,10101694
Japan,JPN,126264931
Kazakhstan,KAZ,18513930
Kenya,KEN,52573973
Kyrgyz Republic,KGZ,6456900
Cambodia,KHM,16486542
Kiribati,KIR,117606
St. Kitts and Nevis,KNA,52834
"Korea, Rep.",KOR,51709098
Kuwait,KWT,4207083
Latin America & Caribbean (excluding high income),LAC,613773119
Lao PDR,LAO,7169455
Lebanon,LBN,6855713
Liberia,LBR,4937374
Libya,LBY,6777452
St. Lucia,LCA,182790
Latin America & Caribbean,LCN,646430843
Least developed countries: UN classification,LDC,1033388876
Low income,LIC,668454965
Liechtenstein,LIE,38019
Sri Lanka,LKA,21803000
Lower middle income,LMC,2913363391
Low & middle income,LMY,6437681136
Lesotho,LSO,2125268
Late-demographic dividend,LTE,2298470832
Lithuania,LTU,2786844
Luxembourg,LUX,619896
Latvia,LVA,1912789
"Macao SAR, China",MAC,640445
St. Martin (French part),MAF,38002
Morocco,MAR,36471769
Monaco,MCO,38964
Moldova,MDA,2657637
Madagascar,MDG,26969307
Maldives,MDV,530953
Middle East & North Africa,MEA,456707404
Mexico,MEX,127575529
Marshall Islands,MHL,58791
Middle income,MIC,5769226171
North Macedonia,MKD,2083459
Mali,MLI,19658031
Malta,MLT,502653
Myanmar,MMR,54045420
Middle East & North Africa (excluding high income),MNA,389457086
Montenegro,MNE,622137
Mongolia,MNG,3225167
Northern Mariana Islands,MNP,57216
Mozambique,MOZ,30366036
Mauritania,MRT,4525696
Mauritius,MUS,1265711
Malawi,MWI,18628747
Malaysia,MYS,31949777
North America,NAC,365892703
Namibia,NAM,2494530
New Caledonia,NCL,287800
Niger,NER,23310715
Nigeria,NGA,200963599
Nicaragua,NIC,6545502
Netherlands,NLD,17332850
Norway,NOR,5347896
Nepal,NPL,28608710
Nauru,NRU,12581
New Zealand,NZL,4917000
OECD members,OED,1359963500
Oman,OMN,4974986
Other small states,OSS,31360407
Pakistan,PAK,216565318
Panama,PAN,4246439
Peru,PER,32510453
Philippines,PHL,108116615
Palau,PLW,18008
Papua New Guinea,PNG,8776109
Poland,POL,37970874
Pre-demographic dividend,PRE,944902749
Puerto Rico,PRI,3193694
"Korea, Dem. People?s Rep.",PRK,25666161
Portugal,PRT,10269417
Paraguay,PRY,7044636
West Bank and Gaza,PSE,4685306
Pacific island small states,PSS,2493696
Post-demographic dividend,PST,1112914457
French Polynesia,PYF,279287
Qatar,QAT,2832067
Romania,ROU,19356544
Russian Federation,RUS,144373535
Rwanda,RWA,12626950
South Asia,SAS,1835776742
Saudi Arabia,SAU,34268528
Sudan,SDN,42813238
Senegal,SEN,16296364
Singapore,SGP,5703569
Solomon Islands,SLB,669823
Sierra Leone,SLE,7813215
El Salvador,SLV,6453553
San Marino,SMR,33860
Somalia,SOM,15442905
Serbia,SRB,6944975
Sub-Saharan Africa (excluding high income),SSA,1105594562
South Sudan,SSD,11062113
Sub-Saharan Africa,SSF,1106957898
Small states,SST,41255486
Sao Tome and Principe,STP,215056
Suriname,SUR,581363
Slovak Republic,SVK,5454073
Slovenia,SVN,2087946
Sweden,SWE,10285453
Eswatini,SWZ,1148130
Sint Maarten (Dutch part),SXM,40733
Seychelles,SYC,97625
Syrian Arab Republic,SYR,17070135
Turks and Caicos Islands,TCA,38191
Chad,TCD,15946876
East Asia & Pacific (IDA & IBRD countries),TEA,2067984156
Europe & Central Asia (IDA & IBRD countries),TEC,460799505
Togo,TGO,8082366
Thailand,THA,69625582
Tajikistan,TJK,9321018
Turkmenistan,TKM,5942089
Latin America & the Caribbean (IDA & IBRD countries),TLA,630644772
Timor-Leste,TLS,1293119
Middle East & North Africa (IDA & IBRD countries),TMN,384771780
Tonga,TON,104494
South Asia (IDA & IBRD),TSA,1835776742
Sub-Saharan Africa (IDA & IBRD countries),TSS,1106957898
Trinidad and Tobago,TTO,1394973
Tunisia,TUN,11694719
Turkey,TUR,83429615
Tuvalu,TUV,11646
Tanzania,TZA,58005463
Uganda,UGA,44269594
Ukraine,UKR,44385155
Upper middle income,UMC,2855862780
Uruguay,URY,3461734
United States,USA,328239523
Uzbekistan,UZB,33580650
St. Vincent and the Grenadines,VCT,110589
"Venezuela, RB",VEN,28515829
British Virgin Islands,VGB,30030
Virgin Islands (U.S.),VIR,106631
Vietnam,VNM,96462106
Vanuatu,VUT,299882
World,WLD,7673533974
Samoa,WSM,197097
Kosovo,XKX,1794248
"Yemen, Rep.",YEM,29161922
South Africa,ZAF,58558270
Zambia,ZMB,17861030
Zimbabwe,ZWE,14645468
`));
