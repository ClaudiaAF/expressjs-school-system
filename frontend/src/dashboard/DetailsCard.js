import React from 'react';
import './Navigation.css';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import './Dashboard.css';

const columns = [
  { id: "name", label: "Slot", minWidth: 170 },
  { id: "code", label: "Day", minWidth: 100 },
  {
    id: "population",
    label: "Period",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US")
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population};
}

const rows = [
  createData(1, "Monday", 2),
  createData(1, "Tuesday", 4),
  createData(1, "Wednesday", 3),
  createData(1, "Thursday", 5),
  createData(1, "Friday", 1),
  createData(2, "Monday", 4),
  createData(2, "Tuesday", 3),
  createData(2, "Wednesday", 4),
  createData(2, "Thursday", 1),
  createData(2, "Friday", 2),
  createData(3, "Monday", 5),
  createData(3, "Tuesday", 5),
  createData(3, "Wednesday", 2),
  createData(3, "Thursday", 6),
  createData(3, "Friday", 3),
  createData(4, "Monday", 1),
  createData(4, "Tuesday", 2),
  createData(4, "Wednesday", 6),
  createData(4, "Thursday", 3),
  createData(4, "Friday", 6),
  createData(5, "Monday", 6),
  createData(5, "Tuesday", 6),
  createData(5, "Wednesday", 1),
  createData(5, "Thursday", 4),
  createData(5, "Friday", 4),
  createData(6, "Monday", 3),
  createData(6, "Tuesday", 1),
  createData(6, "Wednesday", 5),
  createData(6, "Thursday", 2),
  createData(6, "Friday", 5),
];

const useStyles = makeStyles({
  root: {
    width: "53%;"
  },
  container: {
    maxHeight: 440
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}