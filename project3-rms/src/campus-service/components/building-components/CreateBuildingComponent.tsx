import React, { SyntheticEvent } from "react";
import IBuilding from "../../model/IBuilding";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { addBuilding } from "../../../utility/api";
import { history } from "../../../utility/history";

// export interface IBuildingProps {
//   addBuilding: (body: IBuilding) => void;
//   createBuildingMessage: string;
// }

interface IBuildingState {
  building: IBuilding;
}

export class CreateBuildingComponent extends React.Component<
  IBuildingState,
  any
> {
  //   const [name, setName] = useState("");
  //   const [abbrName, setAbbrName] = useState("");
  //   const [physicalAddress, setPhysicalAddress] = useState("");
  //   const [trainingLead, setTrainingLead] = useState(0);
  //   const [amenities, setAmenities] = useState([]);
  //   const [rooms, setRooms] = useState([]);

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  updateName = (event: any) => {
    this.setState({
      ...this.state,
      name: event.target.value
    });
  };

  updateAbbrName = (event: any) => {
    this.setState({
      ...this.state,
      abbrName: event.target.value
    });
  };

  updatePhysicalAddress = (event: any) => {
    this.setState({
      ...this.state,
      physicalAddress: event.target.value
    });
  };

  updateTrainingLead = (event: any) => {
    this.setState({
      ...this.state,
      trainingLead: event.target.value
    });
  };

  updateAmenities = (event: any) => {
    this.setState({
      ...this.state,
      amenities: event.target.value
    });
  };

  updateRooms = (event: any) => {
    this.setState({
      ...this.state,
      rooms: event.target.value
    });
  };

  submitBuilding = async (event: SyntheticEvent) => {
    event.preventDefault();
    addBuilding({
      id: 0,
      name: "",
      abbrName: "",
      physicalAddress: "",
      trainingLead: 0,
      amenities: [],
      rooms: []
    });
    history.push("/buildingtable");
  };

  render() {
    return (
      <>
        <div className="general">
          <h2>Add a New Building</h2>
          <Form onSubmit={this.submitBuilding}>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name of Building
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Building Name"
                  value={this.state.name}
                  onChange={this.updateName}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="abbrName" sm={2}>
                Abbreviated Name of Building
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="abbrName"
                  id="abbName"
                  placeholder="Abbreviated Building Name"
                  value={this.state.abbrName}
                  onChange={this.updateAbbrName}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="physicalAddress" sm={2}>
                Address of Building
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="physicalAddress"
                  id="physicalAddress"
                  placeholder="Address"
                  value={this.state.physicalAddress}
                  onChange={this.updatePhysicalAddress}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="trainingLead" sm={2}>
                Trainer ID
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="number"
                  name="trainingLead"
                  id="trainingLead"
                  placeholder="Lead Trainer ID"
                  value={this.state.trainingLead}
                  onChange={this.updateTrainingLead}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="amenities" sm={2}>
                Amenities
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="amenities"
                  id="amenities"
                  placeholder="Address"
                  value={this.state.amenities}
                  onChange={this.updateAmenities}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="rooms" sm={2}>
                Rooms
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="rooms"
                  id="rooms"
                  placeholder="Rooms"
                  value={this.state.rooms}
                  onChange={this.updateRooms}
                />
              </Col>
            </FormGroup>
            <Button color="btn btn-outline-secondary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default CreateBuildingComponent;
