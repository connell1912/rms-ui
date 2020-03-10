import React, { useState, useEffect } from "react";
import { AddressTableDisplay } from "./AddressTableDisplay";
import { getAddresses } from "../../../../utility/api";
import IAddress from "../../../model/IAddress";
import { Table } from "reactstrap";

export const AddressTableComponent: React.FC<any> = (props: any) => {
  const [addressList, setAddressList] = useState([]);
  useEffect(() => {
    getAddresses().then(r => setAddressList(r.data));
  }, [addressList.length]);

  return (
    <div className="table">
      <Table bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Unit Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {addressList.map((r: IAddress) => (
            <AddressTableDisplay address={r} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
