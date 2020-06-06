import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './App.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DisplayImages(props) {
  console.log(props);
  const classes = useStyles();

  console.log('In Re2');

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">URI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.images.map((item) => (
              <TableRow key={item.index}>
                <TableCell component="th" scope="row">
                  {item.index}
                </TableCell>
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.uri}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default DisplayImages;
