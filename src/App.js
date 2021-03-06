import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import AddMenuItem from './pages/AddMenuItem';
import Header from './components/Header';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/add" component={AddMenuItem} />
        <Redirect to={{ component: Menu }} />
      </Switch>
    </>
  );
}

export default App;
