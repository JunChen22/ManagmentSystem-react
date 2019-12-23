import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import DashBoard from "./components/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Layout/Landing";
import Login from "./components/UserManagement/Login";
import Register from "./components/UserManagement/Register";
import { Provider } from "react-redux";
import store from "./store";
import setJWTToken from "./security/setJWTToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SideBar from "./components/Layout/SideBar";
import SecuredRoute from "./security/SecureRoute";
import AddSchedule from "./components/Schedule/AddSchedule";
import AddOrganization from "./components/Organization/AddOrganization";
import Organization from "./components/Organization/Organization";
import AddEmployee from "./components/Organization/AddEmployee";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decodedToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decodedToken
  });

  const currentTime = Date.now / 1000;
  if (decodedToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <SideBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            {
              //private routes
            }
            <Switch>
              <SecuredRoute exact path="/dashboard" component={DashBoard} />
              <SecuredRoute exact path="/addschedule" component={AddSchedule} />
              <SecuredRoute
                exact
                path="/organization/"
                component={Organization}
              />
              <SecuredRoute
                exact
                path="/organization/create"
                component={AddOrganization}
              />
              <SecuredRoute
                exact
                path="/organization/add"
                component={AddEmployee}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
