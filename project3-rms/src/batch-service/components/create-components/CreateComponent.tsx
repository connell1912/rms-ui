import React, { useState } from "react";
import IBatch from "../../model/IBatch";
import { Form, FormGroup } from "reactstrap";
import { addBatch } from "../../../utility/api";

interface IBatchProps {
  addBatch: (body: IBatch) => void;
  createMessage: string;
}

export const CreateComponent: React.FC<any> = (props: IBatchProps) => {
  const [batchName, setBatchName] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [trainerId, setTrainerId] = useState();
  const [coTrainerId, setCoTrainerId] = useState();
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
              trainerId: trainerId,
              coTrainerId: coTrainerId,
              associates: associates,
              curriculum: curriculum
            }).then(r => console.log(r.body))
          }
        >
            <FormGroup row>
                
            </FormGroup>
        </Form>
      </div>
    </>
  );
};
