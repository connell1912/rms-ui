import React from "react";
import HeaderImage from "./assets/Revature_on_orange.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import { Provider } from "react-redux";
import { store } from "./Store";
import { history } from "./utility/history";
import { Router, Switch, Route } from "react-router";
import LoginComponent from "./employee-service/components/login-components/LoginContainer";
import RegisterComponent from "./employee-service/components/register-components/RegisterComponent";
import CreateComponent from "./batch-service/components/create-components/CreateContainer";
import { AddressTableComponent } from "./campus-service/components/address-table/AddressTableComponent";
import NavBarComponent from "./assets/display-components/NavBarComponent";
import CreateAddressComponent from "./campus-service/components/create-address-table/CreateAddressContainer";
import { AmenityTableComponent } from "./campus-service/components/amenity-table/AmenityTableComponent";
import CreateAmenityComponent from "./campus-service/components/create-amenity-table/CreateAmenityContainer";

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
              <Route path="/addresses" component={AddressTableComponent}/>
              <Route path="/newaddress" component={CreateAddressComponent}/>
              <Route path="/amenities" component={AmenityTableComponent}/>
              <Route path="/newamneity" component={CreateAmenityComponent}/>
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
