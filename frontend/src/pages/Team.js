import React from "react";
import { useEffect, useState } from "react";
import {
  makeStyles,
  Fab,
  Button,
  TablePagination,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableSortLabel,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./JobCategories.css";

function Team() {

  const useStyles=makeStyles({
    table:{
        // width:'80%',
        // margin:'auto',
        background:'white',
    },
    thead:{
        '& > *':{
            backgroundColor:'lightblue',
            // color:'blue',
            fontSize:16,
        }
    },
    users:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    }
});

const classes=useStyles();

    const pages=[5,10,25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();
    const [filterFn, setFilterFn] = useState({fn: items=>{ return items;}});

    const handleSearch= e =>{
        let target=e.target;
        setFilterFn(
            {
                fn: items=>{
                    if(target.value==="")
                        return items;
                    else
                        return items.filter(x=>x.categoryname.toLowerCase().includes(target.value));
                }
            }
        );
    }
  return (
    <>
      <div className="top-menu">
        <div className="top-left-menu">Team</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i class="bi bi-house-door"></i> / Team
            <Link
              style={{ textDecoration: "none" }}
              to="/admin/team/create-team"
            >
              &nbsp;&nbsp;
              <Button variant="contained" color="primary">
                <i class="bi bi-plus-circle"></i>&nbsp; Create new
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="table-container">
        <div className="table-users">
          <div className="searchbar">
            Search:&nbsp;&nbsp;{" "}
            <TextField
              id="outlined-search"
              label=""
              variant="outlined"
              type="search"
              onChange={handleSearch}
            />
          </div>
          <div className="table-wrapper">
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.thead}>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Roll Name</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
              </TableBody>
              
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
