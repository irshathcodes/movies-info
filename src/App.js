import React from "react";
import Hero from "./components/HomePage/Hero";
import Movies from "./components/HomePage/Movies";
import { AppProvider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleMovie from "./components/MovieDetailsPage/SingleMovie";
import Error from "./components/Error";

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
