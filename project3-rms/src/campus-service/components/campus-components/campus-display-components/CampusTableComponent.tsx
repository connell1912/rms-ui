import React, { useState, useEffect } from "react";
import { CampusTableDisplay } from "./CampusTableDisplay";
import ICampus from "../../../model/ICampus";
import { getCampuses } from "../../../../utility/api";
import { Table } from "reactstrap";

export const CampusTableComponent: React.FC<any> = (props: any) => {
  const [campusList, setCampusList] = useState([]);
  useEffect(() => {
    getCampuses().then(r => setCampusList(r.data));
  }, [campusList.length]);

  return (
    <>
      <div className="table">
        <Table striped>
          <thead>
            <tr>
              <th>Ids</th>
              <th>Name</th>
              <th>AbbrName</th>
              <th>ShippingAddress</th>
              <th>TrainingManagerId</th>
              <th>StagingManagerId</th>
              <th>HrLead</th>
              <th>Buildings</th>
              <th>Employees</th>
            </tr>
          </thead>
          <tbody>
            {campusList.map((r: ICampus) => (
              <CampusTableDisplay campus={r} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
