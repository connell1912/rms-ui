import React, { useState, useEffect } from "react";
import { getAmenities } from "../../../../utility/api";
import { Table } from "reactstrap";
import { IAmenity } from "../../../model/IAmenity";
import { AmenityDisplayComponent } from "./AmenityDisplayComponent";

export const AmenityTableComponent: React.FC<any> = (props: any) => {
  const [amenityList, setAmenityList] = useState([]);
  useEffect(() => {
    getAmenities().then(r => setAmenityList(r.data));
  }, [amenityList.length]);

  return (
    <div className="table">
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {amenityList.map((r: IAmenity) => (
            <AmenityDisplayComponent amenity={r} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
