import React from "react";
import IAddress from "../../../model/IAddress";

export interface IAR {
  address: IAddress;
}

export const AddressTableDisplay: React.FC<IAR> = (props: IAR) => {
  return (
    <>
      <tr>
        <td key={0}>{props.address.id}</td>
        <td key={1}>{props.address.unitStreet}</td>
        <td key={2}>{props.address.city}</td>
        <td key={3}>{props.address.state}</td>
        <td key={4}>{props.address.zip}</td>
        <td key={5}>{props.address.country}</td>
      </tr>
    </>
  );
};
