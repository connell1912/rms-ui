import React from "react";
import { IStatus } from "../../model/IStatus";
import { Table } from "reactstrap";

interface IStatusProps {
  allStatuses: IStatus;
}

export class RoomStatusTable extends React.PureComponent<IStatusProps> {
  render() {
    return (
      <>
        <Table striped>
          <th>
            <tr>
              <td>Whiteboard cleaned?</td>
              <td>Ordered?</td>
              <td>Desks cleaned?</td>
              <td>Submitted</td>
              <td>Submitter</td>
            </tr>
          </th>
          <tbody>
            <tr>
              <td>status.whiteboardCleaned</td>
              <td>status.chairOrdered</td>
              <td>status.desksCleaned</td>
              <td>status.submittedDateTime</td>
              <td>status.submitter</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
