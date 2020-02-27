import React from "react";
import HeaderImage from "./assets/Revature.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import { Provider } from "react-redux";
import { store } from "./Store";
import { history } from "./utility/history";
import { Router, Switch, Route } from "react-router";
import LoginComponent from "./employee-service/components/login-components/LoginContainer";
import RegisterComponent from "./employee-service/components/register-components/RegisterContainer";
import { NavBarComponent } from "./employee-service/components/display-components/NavBarComponent";
import CreateComponent from "./batch-service/components/create-components/CreateContainer";

function App() {
  return (
    <>
      <div className="mainPage">
        <Provider store={store}>
          <Router history={history}>
            <div className="header">
              <h1>
                <img id="headerImage" src={HeaderImage} alt="Logo" />
              </h1>
              <NavBarComponent />
            </div>
            <Switch>
              <Route path="/register" component={RegisterComponent} />
              <Route path="/createbatch" component={CreateComponent}/>
              <Route path="/" component={LoginComponent} />
            </Switch>
          </Router>
        </Provider>

        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
