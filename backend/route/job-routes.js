import express from 'express'
import {
  getJob,
  createJob,
  deleteJob,
  editJob,
  getJobById
} from '../controller/job-controller.js'

const jobs = express.Router()

jobs.get('/jobs', getJob)
jobs.get('/jobs/:id', getJobById)
jobs.post('/createjob', createJob)
jobs.delete('/deletejob/:id', deleteJob)
jobs.put('/editjob/:id', editJob)
export default jobs
