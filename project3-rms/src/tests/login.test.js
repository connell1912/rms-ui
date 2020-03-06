import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LoginComponent } from "../employee-service/components/login-components/LoginComponent";

const shallow = Enzyme.shallow;

Enzyme.configure({adapter: new Adapter()})

describe("Login Component", () => {
    it("Should have the wrapping div", () => {
        const component = shallow(<LoginComponent/>);
        const wrapper = component.find(".loginDiv");
        expect(wrapper.length).toBe(1);
    });

    it("Should have the form displaying", () => {
        const component = shallow(<LoginComponent/>);
        const wrapper = component.find(".loginForm");
        expect(wrapper.length).toBe(1);
    });
});