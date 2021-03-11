import React, { useState } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import './App.css';

function App() {
  let [setTab, currentTab] = useState()

  if (currentTab === 'Counties') {

  } else if (currentTab === 'Countries') {

  } else if (currentTab === 'States/Provinces') {

  } else if (currentTab === 'World') {

  } else {

  }

  return (
    <div className="App">
      <header className="App-header">
        HEADER
      </header>

      <AppBar position="static">
        <Tabs value={currentTab}
              onChange={setTab}
              aria-label="simple tabs example">
          <Tab label="World" onClick={ setTab("World") } />
          <Tab label="Countries" onClick={ setTab("Countries") } />
          <Tab label="Counties" onClick={ setTab("Counties") } />
          <Tab label="States/Provinces" onClick={ setTab("States/Provinces") } />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default App;
