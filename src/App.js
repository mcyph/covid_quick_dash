import React, { useState } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";

import './App.css';
import { Counties, World, StatesProvinces, Countries } from "./pages";

function App() {
  // Get the current page element based on the selected tab
  let [currentTab, setTab] = useState("World");

  let currentPageElm;
  if (currentTab === "Counties") { currentPageElm = <Counties/>; }
  else if (currentTab === "Countries") { currentPageElm = <Countries/>; }
  else if (currentTab === "States/Provinces") { currentPageElm = <StatesProvinces/>; }
  else if (currentTab === "World") { currentPageElm = <World/>; }
  else { throw new Error("Shouldn't get here!") }

  return <>
    <div className="App">
      <AppBar position="static">
        <Tabs value={ currentTab }
              onChange={ (i, value, tab) => {setTab(value)} }
              aria-label="simple tabs example">
          <Tab value="World" label="World" />
          <Tab value="Countries" label="Countries" />
          <Tab value="Counties" label="Counties" />
          <Tab value="States/Provinces" label="States/Provinces" />
        </Tabs>
      </AppBar>
      { currentPageElm }
    </div>
  </>;
}

export default App;
