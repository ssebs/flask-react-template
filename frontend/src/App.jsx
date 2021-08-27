import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Test from "./components/Test";
import TestQuery from "./components/TestQuery";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={About} />
            <Route exact path="/test" component={Test} />
            <Route path="/test/:qry" component={TestQuery} />
        </BrowserRouter>
    );
};

export default App;
