import React, { SyntheticEvent } from "react";
import ICampus from "../../model/ICampus";
import { addCampus } from "../../../utility/api";
import { history } from "../../../utility/history";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

interface ICampusState {
  campus: ICampus;
}

export class CreateCampusComponent extends React.Component<ICampusState, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  updateCampusId = (event: any) => {
    this.setState({
      ...this.state,
      campusId: event.target.value
    });
  };

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

  updateShipAddress = (event: any) => {
    this.setState({
      ...this.state,
      shipAddress: event.target.value
    });
  };

  updateTrainingManagerId = (event: any) => {
    this.setState({
      ...this.state,
      trainingManagerId: event.target.value
    });
  };

  updateStagingManagerId = (event: any) => {
    this.setState({
      ...this.state,
      stagingManagerId: event.target.value
    });
  };

  updateHrLead = (event: any) => {
    this.setState({
      ...this.state,
      hrLead: event.target.value
    });
  };

  updateBuildings = (event: any) => {
    this.setState({
      ...this.state,
      buildings: event.target.value
    });
  };

  updateCorporateEmployees = (event: any) => {
    this.setState({
      ...this.state,
      corporateEmployees: event.target.value
    });
  };

  submitCampus = async (event: SyntheticEvent) => {
    event.preventDefault();
    addCampus({
      campusId: 0,
      name: "",
      abbrName: "",
      shipAddress: "",
      trainingManagerId: 0,
      stagingManagerId: 0,
      hrLead: 0,
      buildings: ""
      //   corporateEmployees: []
    });
    history.push("/campustable");
  };

  render() {
    return (
      <>
        <div className="general">
          <h2>Add a New Campus</h2>
          <Form onSubmit={this.submitCampus}>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name of Campus
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Campus Name"
                  value={this.state.name}
                  onChange={this.updateName}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>
                Abbreviated Name of Campus
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="abbrName"
                  id="abbrName"
                  placeholder="Abbreviated Name"
                  value={this.state.abbrName}
                  onChange={this.updateAbbrName}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="shipAddress" sm={2}>
                Address of Campus
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="shipAddress"
                  id="shipAddress"
                  placeholder="Shipping Address"
                  value={this.state.shipAddress}
                  onChange={this.updateShipAddress}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="trainingManagerId" sm={2}>
                Training Manager ID
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="number"
                  name="trainingManagerId"
                  id="trainingManagerId"
                  placeholder="Training Manager ID"
                  value={this.state.trainingManagerId}
                  onChange={this.updateTrainingManagerId}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="stagingManagerId" sm={2}>
                Staging Manager ID
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="number"
                  name="stagingManagerId"
                  id="stagingManagerId"
                  placeholder="Staging Manager ID"
                  value={this.state.stagingManagerId}
                  onChange={this.updateStagingManagerId}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="hrLead" sm={2}>
                Human Resources Lead
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="number"
                  name="hrLead"
                  id="hrLead"
                  placeholder="HR Lead"
                  value={this.state.hrLead}
                  onChange={this.updateHrLead}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="buildings" sm={2}>
                Buildings
              </Label>
              <Col sm={10}>
                <Input
                  required
                  type="text"
                  name="buildings"
                  id="buildings"
                  placeholder="Buildings"
                  value={this.state.buildings}
                  onChange={this.updateBuildings}
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

export default CreateCampusComponent;
