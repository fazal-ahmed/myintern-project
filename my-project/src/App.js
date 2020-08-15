import React from 'react';
import Nav from "./component/navbar/Nav"
import Search from "./component/searchsection/Search"
import Quality from "./component/quality/Quality"
import Footer from "./component/footer/Footer"
import Agents from "./component/agents/Agents"
import NoContant from "./component/NoContent"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>

          <Route exact path="/">
            <Search />
            <Quality />
            <Agents />
            <Footer />
          </Route>
          <Route exact path="Other">
            <NoContant />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
