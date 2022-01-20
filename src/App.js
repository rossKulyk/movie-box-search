import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import StarPage from "./pages/StarPage";

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/start">
                <StarPage />
            </Route>
            <Route>
                <div>Not found</div>
            </Route>
        </Switch>
    );
}

export default App;
