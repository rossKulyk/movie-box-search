import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path="/">
                Home page
            </Route>
            <Route exact path="/start">
                Start Page
            </Route>
            <Route>404</Route>
        </Switch>
    );
}

export default App;
