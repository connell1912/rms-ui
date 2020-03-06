import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WorkOrderComponent } from '../work-order-service/components/work-order-table/WorkOrderComponent';
import { WorkOrderDisplay } from '../work-order-service/components/work-order-table/WorkOrderDisplay';
import { SubmitWO } from '../work-order-service/components/add-work-order-components/SubmitWO';

const shallow = Enzyme.shallow;
Enzyme.configure({adapter:new Adapter()})

describe("Work Order Table", () => {
    it("Should show a table", () => {
        const component = shallow(<WorkOrderComponent/>);
        const wrapper = component.find(".general");
        expect(wrapper.length).toBe(1);
    });

    it("Should show a form", () => (<SubmitWO {...props}/>))

});
