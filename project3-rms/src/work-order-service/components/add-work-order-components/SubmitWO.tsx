import React, { SyntheticEvent } from "react";
import { publishWorkOrder } from "../../../utility/api";
import { history } from "../../../utility/history";
import { Input, Form, FormGroup, Label, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

interface INewWOState {
  category: string;
  description: string;
  contactEmail: string;
}

export class SubmitWO extends React.Component<INewWOState, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      category: "",
      description: "",
      contactEmail: ""
    };
  }

  updateCategory = (event: any) => {
    this.setState({
      ...this.state,
      category: event.target.value
    });
  };

  updateDescription = (event: any) => {
    this.setState({
      ...this.state,
      description: event.target.value
    });
  };

  updateContactEmail = (event: any) => {
    this.setState({
      ...this.state,
      contactEmail: event.target.value
    });
  };

  submitWorkOrder = async (event: SyntheticEvent) => {
    event.preventDefault();
    publishWorkOrder({
      id: 0,
      createdDateTime: "",
      resolvedDateTime: null,
      category: this.state.category,
      status: "PENDING",
      description: this.state.description,
      contactEmail: this.state.contactEmail,
      creatorId: 0,
      resolverId: null
    });
    history.push("/workordertable");
  };

  render() {
    return (
      <div className="general">
        <h2>Submit Work Order</h2>
        <Form onSubmit={this.submitWorkOrder}>
          <FormGroup row>
            <Label for="category" sm={2}>
              Work Order Type
            </Label>
            <Col sm={10}>
              <Input
                required
                type="select"
                name="inputcat"
                // placeholder="Select Category"
                value={this.state.category}
                onChange={this.updateCategory}
              >
                <option>Select A Category</option>
                <option>LIGHTING</option>
                <option>AIR_CONDITIONING</option>
                <option>DOORS</option>
                <option>PROJECTOR</option>
                <option>OTHER</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                required
                type="textarea"
                name="inputdesc"
                placeholder="Description"
                value={this.state.description}
                onChange={this.updateDescription}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                required
                type="email"
                name="inputemail"
                placeholder="Email"
                value={this.state.contactEmail}
                onChange={this.updateContactEmail}
              />
            </Col>
          </FormGroup>
          <Button color="btn btn-outline-secondary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
      </div>
    );
  }
}
export default SubmitWO;
