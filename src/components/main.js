import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Landing from "./pages/landing";
import About from "./pages/about";
import Experience from "./pages/experience";
import Work from "./pages/work";
import Contact from "./pages/contact";

export default function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/experience">
                    <Experience />
                </Route>
                <Route exact path="/work">
                    <Work />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}
