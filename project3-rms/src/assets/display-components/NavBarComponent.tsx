import React, { useState } from "react";
import HeaderImage from "../../assets/Revature_on_orange.png";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  Button,
  FormGroup,
  NavLink,
  NavItem
} from "reactstrap";
import {history} from '../../utility/history';

export const NavBarComponent = (props: any) => {
  const [isOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("state");

  const logout = () =>{
    localStorage.clear();
    history.push("/login");
   }
  return (
    <div className="navbarcomponent">
      <Navbar color="" light expand="md" style={{ backgroundColor: "#f26900" }}>
        <NavbarBrand className="logoIMG" href="/">
          <img
            src={HeaderImage}
            alt="header"
            style={{ height: "auto", width: "150px", padding: "15px" }}
          />
          Resource Management System
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isLoggedIn ? 
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            : <></>}
            <NavItem>
              { isLoggedIn ? 
              <></> 
              :
              <NavLink href="/login">Login</NavLink> }
            </NavItem>
            {isLoggedIn ? <></>:
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
              }
            { isLoggedIn ? 
            <UncontrolledDropdown nav inNavbar>
              
              <DropdownToggle className="dropdown-menu-right" nav caret>
                Add Resources
              </DropdownToggle>
             
              <DropdownMenu right>
                <DropdownItem href="/addaddress">Add Address</DropdownItem>
                <DropdownItem href="/newamenity">Add Amenity</DropdownItem>
                <DropdownItem href="/createbatch">Add Batch</DropdownItem>
                <DropdownItem href="/newbuilding">Add Building</DropdownItem>
                <DropdownItem href="/addcampus">Add Campus</DropdownItem>
                <DropdownItem href="/addroom">Add Room</DropdownItem>
                <DropdownItem href="/addworkorder">Add Work Order</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            : <> </>}
            { isLoggedIn ? 
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="dropdown-menu-right" nav caret>
                View Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/addresses">View Addresses</DropdownItem>
                <DropdownItem href="/amenities">View Amenities</DropdownItem>
                <DropdownItem href="/batchtable">View Batches</DropdownItem>
                <DropdownItem href="/buildingtable">
                  View Buildings
                </DropdownItem>
                <DropdownItem href="/campustable">View Campuses</DropdownItem>
                <DropdownItem href="/roomtable">View Rooms</DropdownItem>
                <DropdownItem href="/workordertable">
                  View Work Orders
                </DropdownItem>
              </DropdownMenu>
                 
            </UncontrolledDropdown>
              : <> </>}
              { isLoggedIn ? 
              <NavItem>
                <NavLink href="/" onClick={logout}>Logout</NavLink> 
              </NavItem> : <></>}
          </Nav>
        </Collapse>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
              className="form-control mr-lg-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </FormGroup>
          <Button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
