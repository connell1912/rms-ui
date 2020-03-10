import React, { useState } from "react";
import HeaderImage from "../../assets/Revature_on_orange.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  Button,
  FormGroup
} from "reactstrap";


export const NavBarComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbarcomponent">
      <Navbar color="" light expand="md" style={{ backgroundColor: "#f26900" }}>
        <NavbarBrand className="logoIMG" href="/">
          Resource Management System
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="dropdown-menu-right" nav caret>
                {/* {updateCurrentUser} */}
                Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Batches</DropdownItem>
                <DropdownItem href="/createbatch">Add Batch</DropdownItem>
                <DropdownItem href="/batchtable">View Batches</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Addresses</DropdownItem>
                <DropdownItem href="/addaddress">Add Address</DropdownItem>
                <DropdownItem href="/addresses">View Addresses</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Amenities</DropdownItem>
                <DropdownItem href="/newamenity">Add Amenity</DropdownItem>
                <DropdownItem href="/amenities">View Amenities</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Rooms</DropdownItem>
                <DropdownItem href="/addroom">Add Room</DropdownItem>
                <DropdownItem href="/roomtable">View Rooms</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Work Orders</DropdownItem>
                <DropdownItem href="/addworkorder">Add Work Order</DropdownItem>
                <DropdownItem href="/workordertable">
                  View Work Orders
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Campuses</DropdownItem>
                <DropdownItem href="/addcampus">Add Campus</DropdownItem>
                <DropdownItem href="/campustable">View Campuses</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Buildings</DropdownItem>
                <DropdownItem href="/newbuilding">Add Building</DropdownItem>
                <DropdownItem href="/buildingtable">
                  View Buildings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
        <img src={HeaderImage} alt="header" style={{height: "auto", width:"125px", padding:"10px" }} />
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
