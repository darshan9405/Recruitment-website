import React, { useState, useEffect } from 'react'
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  makeStyles,
  InputLabel,
  Typography,
  TextareaAutosize
} from '@material-ui/core'

const useStyles = makeStyles({
  inputTag: {
    margin: '1vh 0vw',
    position: 'relative',
    padding: '1vh 1vw'
  },
  textarea: {
    height: '20vh !important',
    width: 'inherit',
    margin: '2vh 0vw',
    padding: '1vh 1vw'
  },
  label: {
    color: 'black',
    margin: '1vh 1vw'
  },
  button: {
    width: '10vw',
    margin: '1vh 1vw'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1vh 1vw',
    margin: '1vh 1vw'
  },
  mylabel: {
    padding: '1vh 1vw'
  }
})
import { createJob } from '../Service/api'
import { useHistory } from 'react-router-dom'
const CreateJob = props => {
  const classes = useStyles()
  const history = useHistory()
  const jobObject = {
    company: '',
    title: '',
    desc: '',
    req: '',
    loc: '',
    category: '',
    sDate: '',
    eDate: '',
    Status: ''
  }
  const [job, setJob] = useState(jobObject)
  const changeHandler = event => {
    setJob({ ...job, [event.target.name]: event.target.value })
  }
  const saveButtonHandler = async event => {
    await createJob(job)
    history.push('./job')
  }
  return (
    <div className={classes.container}>
      <div className='top-menu' style={{ background: 'none', border: 'none' }}>
        <div className='top-left-menu'>Jobs</div>
        <div className='top-right-menu'>
          <div className='right-menu'>
            <i class='bi bi-house-door'></i> / Jobs
          </div>
        </div>
      </div>
      <FormGroup>
        <Typography variant='h4'>Create New</Typography>
        <FormControl>
          <InputLabel className={classes.label}>Company</InputLabel>
          <Input
            className={classes.inputTag}
            name='company'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Job Title</InputLabel>
          <Input
            className={classes.inputTag}
            name='title'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <TextareaAutosize
            className={classes.textarea}
            aria-label='empty textarea'
            placeholder='Job Description'
            name='desc'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <TextareaAutosize
            className={classes.textarea}
            aria-label='empty textarea'
            placeholder='Job Requirement'
            name='req'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>job Location</InputLabel>
          <Input
            className={classes.inputTag}
            name='loc'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Job Category</InputLabel>
          <Input
            className={classes.inputTag}
            name='category'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <label className={classes.mylabel}>Start Date:</label>
          <Input
            className={classes.inputTag}
            type='date'
            name='sDate'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <label className={classes.mylabel}>End Date:</label>
          <Input
            className={classes.inputTag}
            type='date'
            name='eDate'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Status</InputLabel>
          <Input
            className={classes.inputTag}
            name='Status'
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={() => saveButtonHandler()}
          >
            <i class='bi bi-check-lg'></i>&nbsp;Save
          </Button>
        </FormControl>
      </FormGroup>
    </div>
  )
  s
}

export default CreateJob
