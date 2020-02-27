import React, { useState, useEffect } from "react";
import { getBatch } from "../../../utility/api";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import IBatch from "../../model/IBatch";
import { BatchDisplayComponent } from "./BatchDisplayComponent";

export const BatchTableComponent: React.FC<any> = (props: any) => {
  const [batchList, setBatchList] = useState([]);
  useEffect(() => {
    getBatch().then(r => setBatchList(r.data));
  }, [batchList.length]);

  return (
    <div className="batchTable">
      <Table striped>
        <thead>
          <tr>
            <th>Batch ID</th>
            <th>Batch Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Trainer ID</th>
            <th>CoTrainer ID</th>
            <th>Associates</th>
            <th>Curriculum</th>
          </tr>
        </thead>
        <tbody>
          {batchList.map((r: IBatch) => (
            <BatchDisplayComponent batch={r} />
          ))}
        </tbody>
      </Table>

      <Link to="/">Landing</Link>
    </div>
  );
};

export default BatchTableComponent;
