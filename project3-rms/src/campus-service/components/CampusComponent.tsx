import React, {SyntheticEvent, useState, useEffect} from 'react';
import {Table, TableRow, TableHead, TableContainer, TableCell, TableBody, Button} from '@material-ui/core';
import { render } from '@testing-library/react';
import axios from 'axios';
import {CampusDisplayTable} from './display-components/CampusDisplay';
import { ICampus } from '../model/ICampus';
import { Link } from 'react-router-dom';
import {NavBarComponent} from '../../assets/display-components/NavBarComponent';

export const CampusComponent:React.FC<any> = (props:any) =>{

    const [campList, setCampList] = useState([]);
    useEffect(()=> {
        axios.get("https://api.myjson.com/bins/t3boc").then(r => setCampList(r.data));
    }, [campList.length])

    return(
        <>
        <div>
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
                {campList.map((r:ICampus) => <CampusDisplayTable camp={r}/>)}
            </TableBody>
            {/* <tbody>
                {campList.map((r:ICampus) => <CampusDisplayTable camp={r}/>)}
            </tbody> */}
        </Table>
        </TableContainer>
        </div>
        {/* <Button onClick={this.loadTable}>Load Table</Button> */}
        <Link to="/material">Material Table</Link>

        </>
    )
}
// interface ICampusTableProps{
//     camp:ICampus
// }

// export class CampusComponent extends React.Component<ICampus>{

//     constructor(props: any){
//         super(props);
//         this.state ={
//             campusList: []
//         }
//     }
//      list: any;
//         loadTable = (event:any) =>{
//             axios.get("https://api.myjson.com/bins/694ws")
//             .then(res =>{
//              this.list = res.data;
//                 this.setState({
//                     ...this.state,
//                     campusList: this.list
//                 })
//             })
//             console.log(this.list.length);
//         }
//       render(){

//         return(
//             <>
//             <div>
//             <TableContainer>
//             <Table>
//                 <TableHead>
//                     <h1>Campus Table</h1>
//                 <TableRow>
                
//                     <TableCell>Ids</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell>AbbrName</TableCell>
//                     <TableCell>ShippingAddress</TableCell>
//                     <TableCell>TrainingManagerId</TableCell>
//                     <TableCell>StagingManagerId</TableCell>
//                     <TableCell>HrLead</TableCell>
//                     <TableCell>Buildings</TableCell>
//                     <TableCell>Employees</TableCell>
//                     <TableCell>ResourceMeta</TableCell>
//                 </TableRow>
//                 </TableHead>
//                 <TableBody>
                    
//                 </TableBody>
//             </Table>
//             </TableContainer>
//             </div>
//             <Button onClick={this.loadTable}>Load Table</Button>
//             </>
//         )
//     }
// }