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
import { AddressTableComponent } from "./campus-service/components/address-components/address-display-components/AddressTableComponent";
import SubmitRoom from "./work-order-service/components/add-room-component/SubmitRoom";
import CreateAddressComponent from "./campus-service/components/address-components/CreateAddressContainer";
import CampusComponent from "./campus-service/components/campus-components/CampusContainer";
import { BuildingTableComponent } from "./campus-service/components/building-components/BuildingTableComponent";

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
              <Route path="/addresses" component={AddressTableComponent} />
              <Route path="/workordertable" component={WorkOrderComponent} />
              <Route path="/addroom" component={SubmitRoom} />
              <Route path="/addworkorder" component={SubmitWO} />
              <Route path="/roomtable" component={RoomTableComponent} />
              <Route path="/addaddress" component={CreateAddressComponent} />
              <Route path="/campustable" component={CampusComponent}/>
              <Route path="/buildingtable" component={BuildingTableComponent}/>
              <Route path="/" component={LoginComponent} />
            </Switch>
          </Router>
        </Provider>

        {/* <footer className="footer"></footer> */}
      </div>
    </>
  );
}

export default App;
