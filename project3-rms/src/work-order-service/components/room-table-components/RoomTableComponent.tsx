import React, { useState, useEffect } from "react";
import { getRooms } from "../../../utility/api";
import { Table } from "reactstrap";
import { IRoom } from "../../model/IRoom";
import { RoomTableDisplay } from "./RoomTableDisplay";

export const RoomTableComponent: React.FC<any> = (props: any) => {
  const [roomList, setRoomList] = useState([]);
  useEffect(() => {
    getRooms().then(r => setRoomList(r.data));
  }, [roomList.length]);

  return (
    <div className="table">
      <Table striped>
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Current Status</th>
            <th>Room Number</th>
            <th>Active</th>
            <th>Max Occupancy</th>
          </tr>
        </thead>
        <tbody>
          {roomList.map((r: IRoom) => (
            <RoomTableDisplay room={r} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
