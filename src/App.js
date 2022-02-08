import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./components/pages/Home";
import StarPage from "./components/pages/StarPage";
import ShowPage from "./components/pages/ShowPage";

// Global vars that become accessable over over all markups
const theme = {
    colors: {
        blue: "#2400ff",
        gray: "#c6c6c6",
        dark: "#353535",
        red: "#e50914",
        white: "#fff"
    }
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/stars">
                    <StarPage />
                </Route>
                <Route exact path="/show/:id">
                    <ShowPage />
                </Route>
                <Route>
                    <div>Not found</div>
                </Route>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
