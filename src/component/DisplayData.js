import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  tableCellClasses , styled } from '@mui/material';
import React, {useContext} from 'react';
import { multipleStepContext } from '../StepContext';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function CustomizedTables() {

  const {finalData} = useContext(multipleStepContext);

  return (
    <TableContainer component={Paper} style={{display:'flex', justifyContent: 'center'}}>
      <Table sx={{ minWidth: 700 }} style={{width:'70%', justifyContent: 'center'}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Contact Number</StyledTableCell>
            <StyledTableCell align="right">Degree</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
            <StyledTableCell align="right">Postal Code</StyledTableCell>
            <StyledTableCell align="right">Hobby</StyledTableCell>
            <StyledTableCell align="right">Profession</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
    
        <StyledTableCell align="right">{data.contact}</StyledTableCell>
            <StyledTableCell align="right">{data.degree}</StyledTableCell>
            <StyledTableCell align="right">{data.email}</StyledTableCell>
            <StyledTableCell align="right">{data.city}</StyledTableCell>
            <StyledTableCell align="right">{data.country}</StyledTableCell>
            <StyledTableCell align="right">{data.code}</StyledTableCell>
            <StyledTableCell align="right">{data.hobby}</StyledTableCell>
            <StyledTableCell align="right">{data.profession}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
