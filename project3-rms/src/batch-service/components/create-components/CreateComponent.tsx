import React, { useState } from "react";
import { Form, FormGroup, Input, Col, Button, Label } from "reactstrap";
import { addBatch } from "../../../utility/api";
import IBatch, { curriculumEnum } from "../../model/IBatch";

interface IBatchProps {
  addBatch: (body: IBatch) => void;
  createMessage: string;
}

export const CreateComponent: React.FC<any> = (props: IBatchProps) => {
  const [batchName, setBatchName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [associates, setAssociates] = useState("");
  const [curriculum, setCurriculum] = useState("");

  return (
    <>
      <div className="createBatchDiv">
        <h2>Create a New Batch</h2>
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
            <Label for="batchName" sm={2}>
              Batch Name
            </Label>
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
            <Label for="startDate" sm={2}>
              Start Date
            </Label>
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
            <Label for="endDate" sm={2}>
              End Date
            </Label>
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
          <FormGroup row>
          <Label for="associates" sm={2}>
              Associates
            </Label>
            <Col sm={10}>
              <Input
                required
                type="number"
                name="associates"
                id="associates"
                placeholder="Associates"
                onChange={val => setAssociates(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="curriculum" sm={2}>
              Curriculum
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="curriculum"
                id="curriculum"
                onChange={val => setCurriculum(val.target.value)}
              >
                <option selected disabled>Select A Curriculum</option>
                <option value={curriculumEnum.JAVA_MSA}>JAVA_MSA</option>
                <option value={curriculumEnum.CSHARP}>CSHARP</option>
                <option value={curriculumEnum.PEGA}>PEGA</option>
                <option value={curriculumEnum.JTA}>JTA</option>
                <option value={curriculumEnum.REACT}>REACT</option>
                <option value={curriculumEnum.AI}>AI</option>
                <option value={curriculumEnum.MOBILE}>MOBILE</option>
              </Input>
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

export default CreateComponent;
