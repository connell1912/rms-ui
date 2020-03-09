import React, { useState, useEffect} from 'react';
import {Table, TableRow, TableHead, TableContainer, TableCell, TableBody } from '@material-ui/core';
import {CampusTableDisplay} from './campus-display-components/CampusTableDisplay';
import ICampus from '../../model/ICampus';
import { getCampuses } from '../../../utility/api';

export const CampusComponent:React.FC<any> = (props:any) =>{

    const [campusList, setCampusList] = useState([]);
    useEffect(()=> {
        getCampuses().then(r => setCampusList(r.data));
    }, [campusList.length])

    return(
        <>
        <div className="general">
        <TableContainer>
        <Table>
            <TableHead>
                {/* <h1>Campus Table</h1> */}
            <TableRow>
            
                <TableCell>Ids</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>AbbrName</TableCell>
                <TableCell>ShippingAddress</TableCell>
                <TableCell>TrainingManagerId</TableCell>
                <TableCell>StagingManagerId</TableCell>
                <TableCell>HrLead</TableCell>
                <TableCell>Buildings</TableCell>
                <TableCell>Employees</TableCell>
                {/* <TableCell>ResourceMeta</TableCell> */}
            </TableRow>
            </TableHead>
            <TableBody>
                {campusList.map((r:ICampus) => <CampusTableDisplay campus={r}/>)}
            </TableBody>
            {/* <tbody>
                {campList.map((r:ICampus) => <CampusDisplayTable camp={r}/>)}
            </tbody> */}
        </Table>
        </TableContainer>
        </div>
        {/* <Button onClick={this.loadTable}>Load Table</Button> */}
        </>
    )
}