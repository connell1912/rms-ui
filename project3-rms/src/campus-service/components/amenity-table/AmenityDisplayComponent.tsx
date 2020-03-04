import React from "react";
import { IAmenity } from "../../model/IAmenity";

export interface IAmenityProps {
    amenity: IAmenity;
}

export const AmenityDisplayComponent: React.FC<any> = (props: IAmenityProps) => {
    return (
        <>
            <tr>
                <td key={0}>{props.amenity.id}</td>
                <td key={1}>{props.amenity.amenityType}</td>
                <td key={2}>{props.amenity.amenityStatus}</td>
            </tr>
        </>
    );
};