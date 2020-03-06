import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WorkOrderComponent } from '../work-order-service/components/work-order-table/WorkOrderComponent';
import { WorkOrderDisplay, IWR } from '../work-order-service/components/work-order-table/WorkOrderDisplay';
import { SubmitWO } from '../work-order-service/components/add-work-order-components/SubmitWO';
import { RoomTableComponent } from '../work-order-service/components/room-table-components/RoomTableComponent';
import { IWorkOrder } from '../work-order-service/model/IWorkOrder';
import SubmitRoom from '../work-order-service/components/add-room-component/SubmitRoom';

const shallow = Enzyme.shallow;
Enzyme.configure({adapter:new Adapter()})

const setup = (props={}) => {
    const component = shallow(<SubmitWO {...props} />);
    return component
}

// const setup2 = (props={}) => {
//     const component = shallow(<WorkOrderDisplay />);
// }

const setup3 = (props={}) => {
    const component = shallow(<SubmitRoom {...props} />);
    return component
}

describe("Work Order and Room Tables", () => {
    it("Should show a table", () => {
        const component = shallow(<WorkOrderComponent/>);
        const wrapper = component.find(".general");
        expect(wrapper.length).toBe(1);
    });

    it("Should show rooms", () => {
        const component = shallow(<RoomTableComponent/>);
        const wrapper = component.find(".general");
        expect(wrapper.length).toBe(1);
    });

});

describe("Submit Work Order & Room", () => {
    it("Should show Work Order form", () => {
        const component = setup();
        const wrapper = component.find(".general");
        expect(wrapper.length).toBe(1);
    });
    
    it("Should show a room form", () => {
        const component = setup3();
        const wrapper = component.find(".submitRoom");
        expect(wrapper.length).toBe(1);
    })
})
