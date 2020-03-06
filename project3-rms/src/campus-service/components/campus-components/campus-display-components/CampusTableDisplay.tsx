import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import ICampus from "../../../model/ICampus";

export interface ICampusTableProps {
  campus: ICampus;
}

export const CampusTableDisplay: React.FC<ICampusTableProps> = (
  props: ICampusTableProps
) => {
  return (
    <>
      <TableRow key={props.campus.campusId}>
        <TableCell key={props.campus.campusId}>
          {props.campus.campusId}
        </TableCell>
        <TableCell key={props.campus.name}>{props.campus.name}</TableCell>
        <TableCell key={props.campus.abbrName}>
          {props.campus.abbrName}
        </TableCell>
        <TableCell key={props.campus.shipAddress}>
          {props.campus.shipAddress}
        </TableCell>
        <TableCell key={props.campus.trainingManagerId}>
          {props.campus.trainingManagerId}
        </TableCell>
        <TableCell key={props.campus.stagingManagerId}>
          {props.campus.stagingManagerId}
        </TableCell>
        <TableCell key={props.campus.hrLead}>{props.campus.hrLead}</TableCell>
        {/* <TableCell >{props.camp.buildings}</TableCell> */}
        {/* <TableCell >{props.camp.corporateEmployees}</TableCell> */}
        {/* <TableCell >{props.camp.resourceMetaData}</TableCell> */}
      </TableRow>
    </>
  );
};
