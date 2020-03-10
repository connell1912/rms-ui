import React, { useState, useEffect } from "react";
import { getWOList } from "../../../utility/api";
import { IWorkOrder } from "../../model/IWorkOrder";
import { Table } from "reactstrap";
import { WorkOrderDisplay } from "./WorkOrderDisplay";

export const WorkOrderComponent: React.FC<any> = (props: any) => {
  const [workOrderList, setWorkOrderList] = useState([]);
  useEffect(() => {
    getWOList().then(r => setWorkOrderList(r.data));
  }, [workOrderList.length]);

  return (
    <div className="table">
      <Table striped>
        <thead>
          <tr>
            <th>Submitted</th>
            <th>Work Order ID</th>
            <th>Description</th>
            <th>Creator ID</th>
            <th>Contact Email</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {workOrderList.map((r: IWorkOrder) => (
            <WorkOrderDisplay wo={r} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
