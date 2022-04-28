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
import { editJob, getJob } from '../Service/api'
import { useHistory, useParams } from 'react-router-dom'
const initialValues = {
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
const EditJob = props => {
  const classes = useStyles()
  const history = useHistory()
  const { id } = useParams()
  useEffect(async () => {
    const response = await getJob(id)
    setJob(response.data)
  }, [])
  const [job, setJob] = useState(initialValues)
  const { company, title, desc, req, loc, category, sDate, eDate, Status } = job
  const changeHandler = event => {
    setJob({ ...job, [event.target.name]: event.target.value })
  }
  const saveButtonHandler = async event => {
    await editJob(id, job)
    history.push('/admin/job')
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
            value={company}
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Job Title</InputLabel>
          <Input
            className={classes.inputTag}
            name='title'
            value={title}
            onChange={changeHandler}
          />
        </FormControl>
        <FormControl>
          <TextareaAutosize
            className={classes.textarea}
            aria-label='empty textarea'
            placeholder='Job Description'
            name='desc'
            value={desc}
          />
        </FormControl>
        <FormControl>
          <TextareaAutosize
            className={classes.textarea}
            aria-label='empty textarea'
            placeholder='Job Requirement'
            name='req'
            value={req}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>job Location</InputLabel>
          <Input
            className={classes.inputTag}
            name='loc'
            onChange={changeHandler}
            value={loc}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Job Category</InputLabel>
          <Input
            className={classes.inputTag}
            name='category'
            onChange={changeHandler}
            value={category}
          />
        </FormControl>
        <FormControl>
          <label className={classes.mylabel}>Start Date:</label>
          <Input
            className={classes.inputTag}
            type='date'
            name='sDate'
            onChange={changeHandler}
            value={sDate}
          />
        </FormControl>
        <FormControl>
          <label className={classes.mylabel}>End Date:</label>
          <Input
            className={classes.inputTag}
            type='date'
            name='eDate'
            onChange={changeHandler}
            value={eDate}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>Status</InputLabel>
          <Input
            className={classes.inputTag}
            name='Status'
            onChange={changeHandler}
            value={Status}
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

export default EditJob
