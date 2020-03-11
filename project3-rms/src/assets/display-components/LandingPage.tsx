import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, Col, Row } from "reactstrap";

export class LandingPage extends Component {
  render() {
    return (
      <div style={{ margin: "60px" }}>
        <h1>Select a Service</h1>
        <br />
        <Row>
          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Batches</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/createbatch"
                >
                  Add Batch
                </Button>
                <Button href="/batchtable">View Batches</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Addresses</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addaddress"
                >
                  Add Addresses
                </Button>
                <Button href="/addresses">View Addresses</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Amenities</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/newamenity"
                >
                  Add Amenity
                </Button>
                <Button href="/amenities">View Amenities</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Rooms</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addroom"
                >
                  Add Room
                </Button>
                <Button href="/roomtable">View Rooms</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "60px", marginLeft: "100px" }}>
          <Col sm="4">
            <Card>
              <CardBody>
                <CardTitle>Work Orders</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addworkorder"
                >
                  Add Work Orders
                </Button>
                <Button href="/workordertable">View Work Orders</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Campuses</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addcampus"
                >
                  Add Campus
                </Button>
                <Button href="/campustable">View Campuses</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle>Buildings</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/newbuilding"
                >
                  Add Building
                </Button>
                <Button href="/buildingtable">View Buildings</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
