import React from "react";
import IBatch from "../../model/IBatch";

export interface IBatchProps {
  batch: IBatch;
}

export const BatchDisplayComponent: React.FC<any> = (props: IBatchProps) => {
  return (
    <>
      <tr>
        <td key={0}>{props.batch.batchId}</td>
        <td key={1}>{props.batch.batchName}</td>
        <td key={2}>{props.batch.startDate}</td>
        <td key={3}>{props.batch.endDate}</td>
        <td key={4}>{props.batch.coTrainerId}</td>
        <td key={5}>{props.batch.trainerId}</td>
        <td key={6}>{props.batch.associates}</td>
        <td key={7}>{props.batch.curriculum}</td>
      </tr>
    </>
  );
};
