import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DashBord from './routes/DashBord';
import NodeShow from './routes/NodeShow';
import TabBar from './components/TabBar';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
     <div>
      <TabBar/>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/dashbord" exact component={DashBord} />
        <Route path="/node" exact component={NodeShow} />

      </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
