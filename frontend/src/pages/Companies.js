import React, { useState } from "react";
import Active from "../assets/img/active.png";
import Inactive from "../assets/img/inactive.png";
import Total from "../assets/img/total.png";
import "./Companies.css";
import {
  Button,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({

});
const Companies = () => {
  const [filterSearch, setFilterSearch] = useState("");
  const [filterItemCount, setFilterItemCount] = useState(10);
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="top-menu" style={{ background: "none", border: "none" }}>
        <div className="top-left-menu">Companies</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i class="bi bi-house-door"></i> / Companies
            <Link style={{ textDecoration: "none" }} to="/admin/createcompany">
              &nbsp;&nbsp;
              <Button variant="contained" color="primary">
                <i class="bi bi-plus-circle"></i>&nbsp; Create new
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Outer_Container">
        <div className="jobs_container">
          <div className="jobs_info">
            <div className="img_container">
              <img src={Total} className="badge_img" alt="Not found!" />
            </div>
            <div className="info_container">
              <div className="info_heading">Total Companies</div>
              <div className="info_count">1</div>
            </div>
          </div>
          <div className="jobs_info">
            <div className="img_container">
              <img src={Active} className="badge_img" alt="Not found!" />
            </div>
            <div className="info_container">
              <div className="info_heading">Active Companies</div>
              <div className="info_count">1</div>
            </div>
          </div>
          <div className="jobs_info">
            <div className="img_container">
              <img src={Inactive} className="badge_img" alt="Not found!" />
            </div>
            <div className="info_container">
              <div className="info_heading">Inactive Companies</div>
              <div className="info_count">0</div>
            </div>
          </div>
        </div>
        <div className="content_container">
          <div className="search_container">
            <div
              style={{
                fontFamily: "inherit",
                margin: "3vh 2vw",
                marginRight: "40vw",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <span>
                Show{" "}
                <input
                  style={{ width: "40px" }}
                  value={filterItemCount}
                  type="number"
                ></input>{" "}
                entries
              </span>
            </div>
            <div
              style={{
                fontFamily: "inherit",
                margin: "0.5vh 2vw",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <span>
                Search:{" "}
                <input
                  style={{ width: "150px", height: "30px" }}
                  type="text"
                ></input>{" "}
              </span>
            </div>
          </div>
          <div className="table_container">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Company Logo</TableCell>
                  <TableCell>Companies</TableCell>
                  <TableCell>Company Email</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Froiden Technologies Pvt Ltd</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button>Active</Button>
                  </TableCell>
                  <TableCell>
                    <EditIcon /> <DeleteIcon />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div style={{ margin: "1vh 2vw" }}>
            <span>Showing 1 to 1 of 1 entries</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Companies;
