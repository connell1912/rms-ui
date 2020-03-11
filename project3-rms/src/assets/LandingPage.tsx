import React, { useState, Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  Row
} from "reactstrap";

export class LandingPage extends Component {
  render() {
    return (
      <div style={{ margin: "60px" }}>
        <h1>Select a</h1>
        <br />
        <Row>
          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Batches</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/createbatch">
                  Add
                </Button>
                <Button href="/batchtable">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Addresses</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addaddress">
                  Add
                </Button>
                <Button href="/addresses">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Amenities</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/newamenity">
                  Add
                </Button>
                <Button href="/amenities">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Rooms</CardTitle>
                <Button style={{ margin: "3px", alignContent: "center" }}>
                  Add
                </Button>
                <Button>View</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "60px", marginLeft: "100px" }}>
          <Col sm="4">
            <Card>
              <CardBody>
                <CardTitle>Work Orders</CardTitle>
                <Button style={{ margin: "3px", alignContent: "center" }} href="/addworkorder">
                  Add
                </Button>
                <Button href="/workordertable">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Campuses</CardTitle>
                <Button style={{ margin: "3px", alignContent: "center" }}>
                  Add
                </Button>
                <Button>View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Buildings</CardTitle>
                <Button style={{ margin: "3px", alignContent: "center" }}>
                  Add
                </Button>
                <Button>View</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
