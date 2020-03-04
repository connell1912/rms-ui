import React, {useState} from "react";
import IBuilding from "../../model/IBuilding";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { addBuilding } from "../../../utility/api";

interface IBuildingProps {
    addBuilding: (body: IBuilding) => void;
    createMessage: string;
}

export const CreateBuildingComponent: React.FC<any> = (props: IBuildingProps) => {
  const [name, setName] = useState("");
  const [abbrName, setabbrName] = useState("");
  const [physicalAddress, setAddress] = useState("");
  const [trainingLead, setTrainingLead] = useState("");
  const [amenities, setAmenities] = useState("");
  const [rooms, setrooms] = useState("")

  return (
      <>
        <div className="registerDiv">
          <h2>Add a New Building</h2>
          <Form
            className="buildingForm"
            onSubmit={() =>
              addBuilding({
                  id:0,
                  name: name,
                  abbrName: abbrName,
                  physicalAddress: physicalAddress,
                  trainingLead: trainingLead,
                  amenities: amenities,
                  rooms: rooms
              }).then((r:any) => console.log(r.data))
            }
            >
             <FormGroup row>
                 <Label for="name" sm={2}>
                     Building Name
                 </Label>
                 <Col sm={10}>
                     <Input
                       required
                       type="text"
                       name="name"
                       id="name"
                       placeholder="Building Name"
                       onChange={val => setName(val.target.value)}
                     />
                 </Col>
             </FormGroup>
             <FormGroup row>
                 <Label for="abbrName" sm={2}>
                     Abbreviation
                 </Label>
                 <Col sm={10}>
                     <Input
                       required
                       type="text"
                       name="abbrName"
                       id="abbrName"
                       placeholder="Abbreviation"
                       onChange={val => setabbrName(val.target.value)}
                     />
                 </Col>
             </FormGroup>
             <FormGroup row>
                 <Label for="physicalAddress" sm={2}>
                     Address
                 </Label>
                 <Col sm={10}>
                     <Input
                       required
                       type="text"
                       name="physicalAddress"
                       id="physicalAddress"
                       placeholder="Address"
                       onChange={val => setAddress(val.target.value)}
                     />
                 </Col>
             </FormGroup>
             <FormGroup row>
             <Label for="trainingLead" sm={2}>
                 Training Lead
             </Label>
             <Col sm={10}>
                 <Input
                   required
                   type="text"
                   name="trainingLead"
                   id="trainingLead"
                   placeholder="Training Lead"
                   onChange={val => setTrainingLead(val.target.value)}
                 />
             </Col>
         </FormGroup>
         
         <Button color="btn btn-outline-secondary" type="submit">
             Submit
         </Button>
    </Form>
        <p>{props.createMessage}</p>
        </div>
      </>
  );
};

export default CreateBuildingComponent;