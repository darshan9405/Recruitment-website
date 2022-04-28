import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Input, Label } from "semantic-ui-react";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "1vh 1vw",
    margin: "1vh 1vw",
  },
  filterContainer: {
    height: "20vh",
    width: "inherit",
    display: "flex",
    flexDirection: "row",
    border: "1px solid #c7c5c5",
    padding: "1vh 1vw",
    borderRadius: "10px",
    alignItems: "center",
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "1vh 1vw",
    padding: "1vh 1vw",
  },
  dropdown: {
    width: "20vw",
    padding: "1vh 0vw",
    margin: "1vh 1vw",
  },
  input: {
    width: "20vw",
    height: "50px",
    padding: "1vh 1vw",
    margin: "1vh 1vw",
  },
  outerContainer: {
    width: "inherit",
    paddingRight: "2vw",
  },
  contentContainer: {
    overflowX: "scroll",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "row",
    width: "inherit",
    padding: "1vh 1vw",
    height: "50vh",
    margin: "1vh 1vw",
  },
  Card: {
    height: "45vh",
    width: "30vw !important",
    display: "flex",
    flexDirection: "column",
    padding: "1vh 1vw",
    margin: "1vh 1vw",
    border: "1px solid #c7c5c5",
    borderRadius: "10px",
  },
});
const JobApplication = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="top-menu" style={{ background: "none", border: "none" }}>
        <div className="top-left-menu">Job Applications</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i class="bi bi-house-door"></i> / Job Applications
            <Link
              style={{ textDecoration: "none" }}
              to="/admin/createJobapplication"
            >
              &nbsp;&nbsp;
              <Button variant="contained" color="primary">
                <i class="bi bi-plus-circle"></i>&nbsp; Create new
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.outerContainer}>
          <h4>Filter By</h4>
          <div className={classes.filterContainer}>
            <Input type="date" className={classes.input}></Input>
            <Label>To</Label>
            <Input type="date" className={classes.input}></Input>
            <div className={classes.dropdownContainer}>
              <FormControl fullWidth className={classes.dropdown}>
                <InputLabel id="demo-simple-select-label">
                  Job Company
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="filter-status"
                ></Select>
              </FormControl>
              <FormControl fullWidth className={classes.dropdown}>
                <InputLabel id="demo-simple-select-label">All Jobs</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Job-company"
                  // onChange={handleChange}
                ></Select>
              </FormControl>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.Card}>
          <h5 style={{ padding: "1vh 1vw", fontSize: "1.5rem" }}>Applied</h5>
        </div>
        <div className={classes.Card}>
          <h5 style={{ padding: "1vh 1vw", fontSize: "1.5rem" }}>
            Phone Screen
          </h5>
        </div>
        <div className={classes.Card}>
          <h5 style={{ padding: "1vh 1vw", fontSize: "1.5rem" }}>Interview</h5>
        </div>
        <div className={classes.Card}>
          <h5 style={{ padding: "1vh 1vw", fontSize: "1.5rem" }}>Hired</h5>
        </div>
        <div className={classes.Card}>
          <h5 style={{ padding: "1vh 1vw", fontSize: "1.5rem" }}>Rejected</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobApplication;
