import React, { useState, useEffect } from 'react';
import {Table, TableRow, TableCell} from '@material-ui/core';
import { ICampus } from '../../model/ICampus';
import Axios from 'axios';
import {IBuilding} from '../../model/IBuilding';

export interface ICampusTableProps{
    camp:ICampus
}
export default interface IBuildProps{
    build:IBuilding
}
export const CampusDisplayTable:React.FC<ICampusTableProps> = (props:ICampusTableProps)=>{

    const [buildList, setBuildList] = useState([]);
    useEffect(()=> {
        Axios.get("https://localhost:8600/campus/all").then(r => setBuildList(r.data));
    }, [buildList.length])

    return (
        <>
        
         <TableRow key={props.camp.campusId}>
             <TableCell key={props.camp.campusId}>{props.camp.campusId}</TableCell>
             <TableCell key={props.camp.name}>{props.camp.name}</TableCell>
             <TableCell key={props.camp.abbrName}>{props.camp.abbrName}</TableCell>
             <TableCell key={props.camp.shipAddress}>{props.camp.shipAddress}</TableCell>
             <TableCell key={props.camp.trainingManagerId}>{props.camp.trainingManagerId}</TableCell>
             <TableCell key={props.camp.stagingManagerId}>{props.camp.stagingManagerId}</TableCell>
             <TableCell key={props.camp.hrLead}>{props.camp.hrLead}</TableCell>
             {/* <TableCell >{props.camp.buildings}</TableCell> */}
             {/* <TableCell >{props.camp.corporateEmployees}</TableCell> */}
             {/* <TableCell >{props.camp.resourceMetaData}</TableCell> */}
         </TableRow>
         

        </>
      )
}
