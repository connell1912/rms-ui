import React, { SyntheticEvent } from "react";
import { publishRoom } from "../../../utility/api";
import { history } from "../../../utility/history";
import { Input, Form, FormGroup, Label, Col, Button } from "reactstrap";

interface INewRoomState {
  roomNumber: string;
  maxOccupancy: number;
  isActive: boolean;
  batchId: number;
}

export class SubmitRoom extends React.Component<any, INewRoomState> {
  constructor(props: any) {
    super(props);
    this.state = {
      roomNumber: "",
      maxOccupancy: 0,
      isActive: false,
      batchId: 0
    };
  }

  updateRoomNumber = (event: any) => {
    this.setState({
      ...this.state,
      roomNumber: event.target.value
    });
  };

  updateMaxOccupancy = (event: any) => {
    this.setState({
      ...this.state,
      maxOccupancy: event.target.value
    });
  };

  updateIsActive = (event: any) => {
    this.setState({
      ...this.state,
      isActive: event.target.value
    });
  };

  updateBatchId = (event: any) => {
    this.setState({
      ...this.state,
      batchId: event.target.value
    });
  };

  submitRoom = async (event: SyntheticEvent) => {
    event.preventDefault();
    publishRoom({
      id: 0,
      roomNumber: this.state.roomNumber,
      maxOccupancy: this.state.maxOccupancy,
      isActive: this.state.isActive,
      batchId: this.state.batchId
    });
    history.push("/roomtable");
  };

  render() {
    return (
      <div className="submitRoom">
        <h2>Add a New Room</h2>
        <Form onSubmit={this.submitRoom}>
          <FormGroup row>
            <Label for="roomNumber" sm={2}>
              Room Number
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                placeholder="Room Number"
                value={this.state.roomNumber}
                onChange={this.updateRoomNumber}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="maxOccupancy" sm={2}>
              Maximum Occupancy
            </Label>
            <Col sm={10}>
              <Input
                required
                type="number"
                placeholder="Maximum Occupancy"
                value={this.state.maxOccupancy}
                onChange={this.updateMaxOccupancy}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="status" sm={2}>
              Status
            </Label>
            <Col sm={10}>
              <Input
                required
                type="select"
                value={this.state.isActive.valueOf.toString()}
                onChange={this.updateIsActive}
              >
                <option>Active Status: </option>
                <option value="true">True</option>
                <option value="false">False</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="batchId" sm={2}>
              Batch Id
            </Label>
            <Col sm={10}>
              <Input
                required
                type="number"
                placeholder="Batch Id"
                value={this.state.batchId}
                onChange={this.updateBatchId}
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
export default SubmitRoom;
