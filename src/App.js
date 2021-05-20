import React from "react";
import Hero from "./Hero";
import Movies from "./Movies";
import { AppProvider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Error from "./Error";

const App = () => {
  return (
    <>
      <AppProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Hero />
              <Movies />
            </Route>
            <Route path="/movies/:id" children={<SingleMovie />} />
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </>
  );
};

export default App;
