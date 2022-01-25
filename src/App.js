import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import StarPage from "./components/pages/StarPage";
import ShowPage from "./components/pages/ShowPage";

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/start">
                <StarPage />
            </Route>
            <Route exact path="/show/:id">
                <ShowPage />
            </Route>
            <Route>
                <div>Not found</div>
            </Route>
        </Switch>
    );
}

export default App;
