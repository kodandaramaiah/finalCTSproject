import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Books from "./components/books";
import Home from "./components/home";
import BookDetails from "./components/bookdetails";
import Register from "./components/register";
import Login from "./components/login";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./components/page404";

{
  /*import MostPopular from "./components/mostPopular";
import NewReleases from "./components/newReleases";
import MixedCollection from "./components/mixedCollection";
import AuthorPreference from "./components/authorPreference";*/
}
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/books" exact component={Books} />
        <Route path="/books/:id?" component={BookDetails} />
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" exact component={Login} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
        {/* <Route path="/mostPopular" component={MostPopular} />
        <Route path="/newReleases" component={NewReleases} />
        <Route path="/mixedcollection" component={MixedCollection} />
        <Route path="/authorPreference" component={AuthorPreference} />
  */}
      </Switch>
    </div>
  );
}

export default App;
