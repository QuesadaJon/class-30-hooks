import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllVillagers from '../../containers/AllVillagers';
import ByVillagerDetails from '../../containers/ByVillagerDetails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:id" exact component={ByVillagerDetails} />
        <Route path="/" exact component={AllVillagers} />
      </Switch>
    </Router>
  );
}
