import React, { useState } from "react";
import {
  IAmenity,
  amenityStatusEnum,
  amenityTypeEnum
} from "../../model/IAmenity";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { addAmenity } from "../../../utility/api";

interface IAmenityProps {
  addAmenity: (body: IAmenity) => void;
  createAmenityMessage: string;
}

export const CreateAmenityComponent: React.FC<any> = (props: IAmenityProps) => {
  const [amenityType, setAmenityType] = useState("");
  const [amenityStatus, setAmenityStatus] = useState("");

  return (
    <>
      <div className="registerDiv">
        <h2>Insert a New Amenity</h2>
        <Form
          className="amenityForm"
          onSubmit={() =>
            addAmenity({
              id: 0,
              amenityType: amenityType,
              amenityStatus: amenityStatus
            }).then(r => console.log(r.data))
          }
        >
          <FormGroup row>
            <Label for="amenityType" sm={2}>
              Amenity Type
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="amenityType"
                id="amenityType"
                onChange={val => setAmenityType(val.target.value)}
              >
                <option selected disabled>
                  Select A Type
                </option>
                <option value={amenityTypeEnum.COFFEE}>COFFEE</option>
                <option value={amenityTypeEnum.TEA}>TEA</option>
                <option value={amenityTypeEnum.WATER}>WATER</option>
                <option value={amenityTypeEnum.UTENSILS}>UTENSILS</option>
                <option value={amenityTypeEnum.COFFEE_FILTERS}>
                  COFFEE_FILTERS
                </option>
                <option value={amenityTypeEnum.COFFEE_CREAMER}>
                  COFFEE_CREAMER
                </option>
                <option value={amenityTypeEnum.PAPER_TOWELS}>
                  PAPER_TOWELS
                </option>
                <option value={amenityTypeEnum.CLEANING_WIPES}>
                  CLEANING_WIPES
                </option>
                <option value={amenityTypeEnum.WHITEBOARD_MARKERS}>
                  WHITEBOARD_MARKERS
                </option>
                <option value={amenityTypeEnum.WHITEBOARD_ERASERS}>
                  WHITEBOARD_ERASERS
                </option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="amenityStatus" sm={2}>
              Amenity Status
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="amenityStatus"
                id="amenityStatus"
                onChange={val => setAmenityStatus(val.target.value)}
              >
                <option selected disabled>
                  Select A Status
                </option>
                <option value={amenityStatusEnum.OK}>OK</option>
                <option value={amenityStatusEnum.LOW}>LOW</option>
                <option value={amenityStatusEnum.OUT}>OUT</option>
              </Input>
            </Col>
          </FormGroup>
          <Button color="btn btn-outline-secondary" type="submit">
            Submit
          </Button>
        </Form>
        <p>{props.createAmenityMessage}</p>
      </div>
    </>
  );
};

export default CreateAmenityComponent;
