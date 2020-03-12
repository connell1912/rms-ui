import React from "react";
// import HeaderImage from "./assets/Revature_on_orange.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import { Provider } from "react-redux";
import { store } from "./Store";
import { history } from "./utility/history";
import { Router, Switch, Route } from "react-router";
import LoginComponent from "./employee-service/components/login-components/LoginContainer";
import RegisterComponent from "./employee-service/components/register-components/RegisterContainer";
import CreateComponent from "./batch-service/components/create-components/CreateContainer";
import { NavBarComponent } from "./assets/display-components/NavBarComponent";
import BatchTableComponent from "./batch-service/components/display-components/BatchTableComponent";
import { WorkOrderComponent } from "./work-order-service/components/work-order-table/WorkOrderComponent";
import SubmitWO from "./work-order-service/components/add-work-order-components/SubmitWO";
import { RoomTableComponent } from "./work-order-service/components/room-table-components/RoomTableComponent";
import { AddressTableComponent } from "./campus-service/components/address-components/address-display-components/AddressTableComponent";
import SubmitRoom from "./work-order-service/components/add-room-component/SubmitRoom";
import CreateAddressComponent from "./campus-service/components/address-components/CreateAddressContainer";
import {CampusTableComponent} from "./campus-service/components/campus-components/campus-display-components/CampusTableComponent";
import { BuildingTableComponent } from "./campus-service/components/building-components/building-display-components/BuildingTableComponent";
import { AmenityTableComponent } from "./campus-service/components/amenity-components/amenity-display-components/AmenityTableComponent";
import CreateAmenityComponent from "./campus-service/components/amenity-components/CreateAmenityContainer";
import CreateBuildingComponent from "./campus-service/components/building-components/CreateBuildingContainer";
import CreateCampusComponent from "./campus-service/components/campus-components/CreateCampusContainer";
import { LandingPage } from "./assets/display-components/LandingPage";

function App() {
  return (
    <>
      <div className="mainPage">
        <Provider store={store}>
          <Router history={history}>
            <div className="header">
              <NavBarComponent />
            </div>
            <Switch>
              <Route path="/landing" component={LandingPage} />
              <Route path="/register" component={RegisterComponent} />
              <Route path="/home" component={LandingPage} />
              <Route path="/createbatch" component={CreateComponent} />
              <Route path="/batchtable" component={BatchTableComponent} />
              <Route path="/addaddress" component={CreateAddressComponent} />
              <Route path="/addresses" component={AddressTableComponent} />
              <Route path="/addworkorder" component={SubmitWO} />
              <Route path="/workordertable" component={WorkOrderComponent} />
              <Route path="/addroom" component={SubmitRoom} />
              <Route path="/roomtable" component={RoomTableComponent} />
              <Route path="/newamenity" component={CreateAmenityComponent} />
              <Route path="/amenities" component={AmenityTableComponent} />
              <Route path="/addcampus" component={CreateCampusComponent} />
              <Route path="/campustable" component={CampusTableComponent} />
              <Route path="/newbuilding" component={CreateBuildingComponent} />
              <Route path="/buildingtable" component={BuildingTableComponent} />
              <Route path="/" component={LoginComponent} />
            </Switch>
          </Router>
        </Provider>
        {/* <img
          id="beazer"
          src={BGimage}
          alt="NO BACKGROUND"
          height="42"
          width="42"
        /> */}
      </div>
    </>
  );
}

export default App;
