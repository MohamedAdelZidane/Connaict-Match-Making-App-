import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import { isLoggedIn } from "./components/AuthService";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Home from "./pages/home/Home";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Test from "./pages/test";
import Candidates from "./pages/candidates/Candidates";
import NavigationBar from "./pages/navigationBar/NavigationBar";
import Recruiters from "./pages/recruiters/Recruiters";



// Routes
const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />
  },
  {
    path: "/login",
    component: () => <Login />
  },
  {
    path: "/logout",
    component: () => <Logout />
  },
  {
    path: "/home",
    component: () => <Home />
  },
  {
    path: "/test",
    component: () => <Test />
  },
  {
    path: "/candidates",
    component: () => <Candidates />
  },
  {
    path: "/recruiters",
    component: () => <Recruiters />
  },
  {
    path: "/navigationBar",
    component: () => <NavigationBar />
  }
];

ReactDOM.render(
  <Router>
    {isLoggedIn() ? (
     <Home/>
    ) : (
      
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={props => <route.component {...props} />}
            />
          ))}
          <Redirect to="/" />
        </Switch>
     
    )}
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
