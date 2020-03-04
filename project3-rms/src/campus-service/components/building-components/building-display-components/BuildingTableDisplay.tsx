import React from 'react'
import IBuilding from '../../../model/IBuilding';

export interface IBB {
    building: IBuilding
}

export const BuildingTableDisplay:React.FC<IBB> = (props:IBB) => {

    return (
        <>
          <tr key={props.building.id}>
            <td key={props.building.id}>{props.building.id}</td>
            <td key={props.building.name}>{props.building.name}</td>
            <td key={props.building.abbrName}>{props.building.abbrName}</td>
            <td key={props.building.physicalAddress}>{props.building.physicalAddress}</td>
            <td key={props.building.trainingLead}>{props.building.trainingLead}</td>
          </tr>
        </>
    )
}