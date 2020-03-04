import React, { useState } from "react";
import IBatch from "../../model/IBatch";
import { Form, FormGroup, Input, Col } from "reactstrap";
import { addBatch } from "../../../utility/api";

interface IBatchProps {
  addBatch: (body: IBatch) => void;
  createMessage: string;
}

export const CreateComponent: React.FC<any> = (props: IBatchProps) => {
  const [batchName, setBatchName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  //   const [trainerId, setTrainerId] = useState();
  //   const [coTrainerId, setCoTrainerId] = useState();
  const [associates, setAssociates] = useState();
  const [curriculum, setCurriculum] = useState();

  return (
    <>
      <div className="">
        <Form
          className="batchForm"
          onSubmit={() =>
            addBatch({
              batchId: 0,
              batchName: batchName,
              startDate: startDate,
              endDate: endDate,
              trainerId: 0,
              coTrainerId: 0,
              associates: associates,
              curriculum: curriculum
            }).then(r => console.log(r.data))
          }
        >
          <FormGroup row>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="batchName"
                id="batchName"
                placeholder="Batch Name"
                onChange={val => setBatchName(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <Input
                required
                type="date"
                name="startDate"
                id="startDate"
                placeholder="Start Date for Batch"
                onChange={val => setStartDate(new Date(val.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <Input
                required
                type="date"
                name="endDate"
                id="endDate"
                placeholder="Projected End Date for Batch"
                onChange={val => setEndDate(new Date(val.target.value))}
              />
            </Col>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default CreateComponent;
