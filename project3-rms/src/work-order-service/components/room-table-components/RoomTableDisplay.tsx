import React from "react";
import { IRoom } from "../../model/IRoom";

export interface IRR {
  room: IRoom;
}

export const RoomTableDisplay: React.FC<IRR> = (props: IRR) => {
  return (
    <>
      <tr key={props.room.id}>
        <td key={1}>{props.room.id}</td>
        <td key={2}>{props.room.roomNumber}</td>
        {/* <td key={3}>{props.room.isActive.valueOf.toString}</td> */}
        <td key={4}>{props.room.maxOccupancy}</td>
      </tr>
    </>
  );
};
