import React, { SyntheticEvent, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  CustomInput,
  Button
} from "reactstrap";
import { addCampus } from "../../../utility/api";
import  ICampus  from "../../model/ICampus";

interface ICampusProps {
  addCampus: (body: ICampus) => void;
  createCampusMessage: string;
}
export const CreateCampusComponent: React.FC<any> = (props: ICampusProps) => {
  const [name, setName] = useState("");
  const [abbrName, setAbbrName] = useState("");
  const [shipAddress, setShipAddress] = useState("");
  const [trainingManagerId, setTrainingManagerId] = useState(0);
  const [stagingManagerId, setStagingManagerId] = useState(0);
  const [hrLead, setHrLead] = useState(0);
  const [buildings, setBuildings] = useState("");
  const [corporateEmployees, setCoporateEmployess] = useState([]);

  return (
    <>
      <div className="registerDiv">
        <h2>Add a New Campus</h2>
        <Form
          className="campusForm"
          onSubmit={() =>
            addCampus({
              campusId: 0,
              name,
              abbrName,
              shipAddress,
              trainingManagerId,
              stagingManagerId,
              hrLead,
              buildings,
              corporateEmployees
            }).then(r => console.log(r.data))
          }
        >
          <FormGroup row>
            <Label for="name" sm={2}>
              Campus Name
            </Label>
            <Col sm={10}>
              <Input type="text" name="name" placeholder="campus name" 
              onChange={val => setName(val.target.value)}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              Abbreviated
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="abbrName"
                placeholder="abbreviated name"
                onChange={val => setAbbrName(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              Shipping Address
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="shipAddress"
                placeholder="Shipping Address"
                onChange={val => setShipAddress(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              Training Manager Id
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="trainingManagerId"
                placeholder="Training Id"
                onChange={val => setTrainingManagerId(val.target.valueAsNumber)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              Stage Manager Id
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="stagingManagerId"
                placeholder="Staging Id"
                onChange={val => setStagingManagerId(val.target.valueAsNumber)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              Hr Lead{" "}
            </Label>
            <Col sm={10}>
              <Input type="text" name="hrLead" placeholder="Hr Lead" 
               onChange={val => setHrLead(val.target.valueAsNumber)}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              {" "}
              Buildings{" "}
            </Label>
            <Col sm={10}>
              <Input type="text" name="buildings" placeholder="Buildings"
               onChange={val => setBuildings(val.target.value)} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              {" "}
              Employees{" "}
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="coroporateEmployees"
                placeholder="Employees"
                // onChange={val => setCoporateEmployess(val.target.valueAsNumber)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomRange">Campus Size</Label>
            <CustomInput
              type="range"
              id="exampleCustomRange"
              name="customRange"
            />
          </FormGroup>
          <Button color="btn btn-outline-primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default CreateCampusComponent;
