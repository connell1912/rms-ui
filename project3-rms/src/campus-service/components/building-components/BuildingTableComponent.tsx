import React from "react"
import { useState, useEffect } from "react"
import { getBuildings } from "../../../utility/api";
import { Table } from "reactstrap";
import IBuilding from "../../model/IBuilding";
import { BuildingTableDisplay } from "./BuildingTableDisplay";


export const BuildingTableComponent:React.FC<any> = (props:any) => {
    const [buildingList, setBuildingList] = useState([]);
    useEffect(()=>{
        getBuildings().then(r=>setBuildingList(r.data));
    }, [buildingList.length]);

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Building Id</th>
                        <th>Building Name</th>
                        <th>Abbreviation</th>
                        <th>Address</th>
                        <th>Training Lead</th>
                    </tr>
                </thead>
                <tbody>
                    {buildingList.map((r:IBuilding) => <BuildingTableDisplay building={r}/>)}
                </tbody>
            </Table>
        </div>
    )
}