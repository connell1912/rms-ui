import React from "react";
import Enzyme from "enzyme";
import  Adapter from 'enzyme-adapter-react-16';
import  NavBarComponent from "../assets/display-components/NavBarComponent";
const shallow = Enzyme.shallow;
Enzyme.configure({adapter:new Adapter()})


describe("NavBar Component", () => {
 
  it("An experimental enzyme test", () => {
    expect(1).toBe(1);
  });
 
  it("Should render Navbar Without Errors", () => {
    const component = shallow(<NavBarComponent/>);
    const wrapper = component.find(".navbarcomponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const component = shallow(<NavBarComponent/>);
    const logo = component.find(".logoIMG");
    expect(logo.length).toBe(1);
  });
});
