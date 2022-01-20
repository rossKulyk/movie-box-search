import React from "react";
import { Switch, Route } from "react-router-dom";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import StarPage from "./pages/StarPage";

function App() {
    return (
        <div>
            <Navs />
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
        </div>
    );
}

export default App;
