import React, { useState } from "react";
import IAddress from "../../model/IAddress";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { addAddress } from "../../../utility/api";

interface IAddressProps {
  addAddress: (body: IAddress) => void;
  createMessage: string;
}

export const CreateAddressComponent: React.FC<any> = (props: IAddressProps) => {
  const [unitStreet, setUnitStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  return (
    <>
      <div className="registerDiv">
        <h2>Add a New Address</h2>
        <Form
          className="addressForm"
          onSubmit={() =>
            addAddress({
              id: 0,
              unitStreet: unitStreet,
              city: city,
              state: state,
              zip: zip,
              country: country
            }).then(r => console.log(r.data))
          }
        >
          <FormGroup row>
            <Label for="unitStreet" sm={2}>
              Unit Street
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="unitStreet"
                id="unitStreet"
                placeholder="Unit Street"
                onChange={val => setUnitStreet(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="city" sm={2}>
              City
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="city"
                id="city"
                placeholder="City"
                onChange={val => setCity(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="state" sm={2}>
              State
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="state"
                id="state"
                placeholder="State"
                onChange={val => setState(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="zip" sm={2}>
              Zip Code
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="zip"
                id="zip"
                placeholder="Zip"
                onChange={val => setZip(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="country" sm={2}>
              Country
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                onChange={val => setCountry(val.target.value)}
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

export default CreateAddressComponent;