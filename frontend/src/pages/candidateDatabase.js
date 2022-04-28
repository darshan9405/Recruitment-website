import React, { useState, useEffect } from "react";
import "./Jobs.css";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles({
  dropdown: {
    width: "20vw",
    padding: "1vh 1vw",
    margin: "1vh 1vw",
  },
});
const CandidateDatabase = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="top-menu" style={{ background: "none", border: "none" }}>
        <div className="top-left-menu">Candidate Database</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i class="bi bi-house-door"></i> / Candidate Database
          </div>
        </div>
      </div>
      <div className="Outer_Container">
        <div
          className="content_container"
          style={{ minHeight: "60vh", maxHeight: "60vh" }}
        >
          <input
            placeholder="Enter skill to filter by,ex:php,java,etc"
            style={{
              width: "20vw",
              height: "30px",
              margin: "1vh 1vw",
              padding: "1vh 1vw",
            }}
          ></input>
          <div className="search_container">
            <div
              style={{
                fontFamily: "inherit",
                margin: "0.5vh 2vw",
                marginRight: "40vw",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <span>
                Show{" "}
                <input
                  style={{
                    width: "40px",
                  }}
                  type="number"
                ></input>{" "}
                entries{" "}
              </span>{" "}
            </div>{" "}
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
                  style={{
                    width: "150px",
                    height: "30px",
                  }}
                  type="text"
                ></input>{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="jtable_container">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Application Name</TableCell>
                  <TableCell>Jobs</TableCell>
                  <TableCell>Job Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </div>{" "}
          <div
            style={{
              margin: "1vh 2vw",
            }}
          >
            <span> Showing 1 to 3 of 3 entries </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </React.Fragment>
  );
};

export default CandidateDatabase;
