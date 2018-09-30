import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// 1.引入组件
import Content from '../pages/Content';
import Header from '../pages/Header';
import ThemeSwitch from '../pages/ThemeSwitch';
import Login from '../pages/Login/index';

// 2.构建路由
const routes = (
	<Switch>
		<Route exact path="/content" component={Content} />
		<Route path="/header" component={Header} />
		<Route path="/topics" component={ThemeSwitch} />
		<Route path="/login" component={Login} />
	</Switch>
);

class router extends Component {
	render() {
    return (
      
        <Router>
          <div>
            {/* <ul>
              <li><Link to="/content">content</Link></li>
              <li><Link to="/header">header</Link></li>
            </ul> */}
            {routes}
          </div>
        </Router>

    );
  }
}

export default router
