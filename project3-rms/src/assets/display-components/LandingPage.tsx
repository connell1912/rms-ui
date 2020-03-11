import React, {Component } from "react";
import { Card, CardBody, CardTitle, Button, Col, Row, CardImg} from "reactstrap";
import HeaderImage1 from '../pngsp3/address.png';
import HeaderImage2 from '../pngsp3/class.png';
import HeaderImage3 from '../pngsp3/company.png';
import HeaderImage4 from '../pngsp3/desk.png';
import HeaderImage5 from '../pngsp3/pencil.png';
import HeaderImage6 from '../pngsp3/school.png';



export class LandingPage extends Component {
  render() {
    return (
      <div style={{ margin: "60px" }}>
        <h1>Select a Service</h1>
        <br />
        <Row>
          <Col sm="3">
            <Card>
            <CardImg top width="50%" src={HeaderImage2}  alt="Card image cap" />

              <CardBody>
                <CardTitle>Batches</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/createbatch"
                >
                  Add
                </Button>
                <Button href="/batchtable">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
            <CardImg top width="50%" src={HeaderImage1}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Addresses</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addaddress"
                >
                  Add
                </Button>
                <Button href="/addresses">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
            <CardImg top width="50%" src={HeaderImage5}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Amenities</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/newamenity"
                >
                  Add
                </Button>
                <Button href="/amenities">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
            <CardImg top width="50%" src={HeaderImage6}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Rooms</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addroom"
                >
                  Add
                </Button>
                <Button href="/roomtable">View</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "60px", marginLeft: "220px" }}>
          <Col sm="3">
            <Card>
            <CardImg top width="50%" src={HeaderImage4}  alt="Card image cap" />
              <CardBody>

                <CardTitle>Work Orders</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addworkorder"
                >
                  Add
                </Button>
                <Button href="/workordertable">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
            <CardImg top width="50%" src={HeaderImage3}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Campuses</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/addcampus"
                >
                  Add
                </Button>
                <Button href="/campustable">View</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card>
            <CardImg top width="50%" src={HeaderImage3}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Buildings</CardTitle>
                <Button
                  style={{ margin: "3px", alignContent: "center" }}
                  href="/newbuilding"
                >
                  Add
                </Button>
                <Button href="/buildingtable">View</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
