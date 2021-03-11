import React, { useState } from "react";

import { AppBar, Tab, Tabs } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import FlagIcon from '@material-ui/icons/Flag';
import PublicIcon from '@material-ui/icons/Public';
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall';

import './App.css';
import { World, StatesProvinces, Countries } from "./pages";

function App() {
  // Use a dark theme
  const theme = React.useMemo(
    () => createMuiTheme({ palette: { type: "dark" } })
  );

  // Get the current page element based on the selected tab
  let [currentTab, setTab] = useState("World");

  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        background: "#100b2a",
        minHeight: "100vh",
        paddingBottom: "50px"
      }}>
        <AppBar position="static">
          <Tabs value={ currentTab }
                onChange={ (i, value, tab) => {setTab(value)} }
                aria-label="select the geographic scale"
                centered >
            <Tab value="World"
                 label={ <><PublicIcon />World</> } />
            <Tab value="Countries"
                 label={ <><FlagIcon />Countries</> } />
            <Tab value="Counties/States/Provinces"
                 label={ <><PhotoSizeSelectSmallIcon />Counties/States/Provinces</> } />
          </Tabs>
        </AppBar>
        {
          // Show only the currently selected tab
          {
            "Countries": <>
              <Countries name="Confirmed" apiKey="confirmed" />
              <Countries name="Recovered" apiKey="recovered" color="#5C5" />
              <Countries name="Deaths" apiKey="deaths" color="orange" />
            </>,
            "Counties/States/Provinces": <>
              <StatesProvinces/>
            </>,
            "World": <>
              <World/>
            </>
          }[currentTab]
        }
      </div>
    </ThemeProvider>
  </>;
}

export default App;
