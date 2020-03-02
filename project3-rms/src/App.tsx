import React from "react";
import HeaderImage from "./assets/Revature_on_orange.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import { Provider } from "react-redux";
import { store } from "./Store";
import { history } from "./utility/history";
import { Router, Switch, Route } from "react-router";
import LoginComponent from "./employee-service/components/login-components/LoginContainer";
// import RegisterComponent from "./employee-service/components/register-components/RegisterContainer";
import CreateComponent from "./batch-service/components/create-components/CreateContainer";
import { NavBarComponent } from "./assets/display-components/NavBarComponent";
import BatchTableComponent from "./batch-service/components/display-components/BatchTableComponent";
import { WorkOrderComponent } from "./work-order-service/components/work-order-table/WorkOrderComponent";
import SubmitWO from "./work-order-service/components/add-work-order-components/SubmitWO";
import { RoomTableComponent } from "./work-order-service/components/room-table-components/RoomTableComponent";
import { LandingComponent } from "./work-order-service/components/landing-components/LandingComponent";
import { AddressTableComponent } from "./campus-service/components/address-components/AddressTableComponent";

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
              {/* <Route path="/register" component={RegisterComponent} /> */}
              <Route path="/createbatch" component={CreateComponent} />
              <Route path="/batchtable" component={BatchTableComponent} />
              <Route path="/addresses" component={AddressTableComponent}/>
              <Route path="/workordertable" component={WorkOrderComponent} />
              <Route path="/addworkorder" component={SubmitWO} />
              <Route path="/roomtable" component={RoomTableComponent} />
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
