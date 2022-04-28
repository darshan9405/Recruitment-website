import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  makeStyles,
  InputLabel,
  Typography,
  TextareaAutosize,
} from "@material-ui/core";
const useStyles = makeStyles({
  inputTag: {
    margin: "1vh 0vw",
    position: "relative",
    padding: "1vh 1vw",
  },
  textarea: {
    height: "20vh !important",
    width: "inherit",
    margin: "2vh 0vw",
    padding: "1vh 1vw",
  },
  label: {
    color: "black",
    margin: "1vh 1vw",
  },
  button: {
    width: "10vw",
    margin: "1vh 1vw",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1vh 1vw",
    margin: "1vh 1vw",
  },
});

const CreateCompany = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className="top-menu" style={{ background: "none", border: "none" }}>
        <div className="top-left-menu">Companies</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i class="bi bi-house-door"></i> / Companies
          </div>
        </div>
      </div>
      <FormGroup>
        <Typography variant="h4">Create New</Typography>
        <FormControl>
          <InputLabel className={classes.label}>Company Name</InputLabel>
          <Input className={classes.inputTag} name="companyname" />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Company Email</InputLabel>
          <Input className={classes.inputTag} name="companyemail" />
        </FormControl>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <i class="bi bi-check-lg"></i>&nbsp;Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="reset"
            className={classes.button}
          >
            <i class="bi bi-check-lg"></i>&nbsp;Reset
          </Button>
        </div>
      </FormGroup>
    </div>
  );
  s;
};

export default CreateCompany;
