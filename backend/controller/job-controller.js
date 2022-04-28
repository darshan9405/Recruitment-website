import jobs from '../model/job-schema.js'

export const getJob = async (request, response) => {
  try {
    let job = await jobs.find()
    response.json(job)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const getJobById = async (request, response) => {
  let id = request.params.id
  try {
    let job = await jobs.findById(id)
    response.json(job)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const createJob = async (request, response) => {
  const job = request.body
  const newjob = new jobs(job)
  try {
    await newjob.save()
    response.json(newjob)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const deleteJob = async (request, response) => {
  try {
    await jobs.deleteOne({ _id: request.params.id })
    response.json('User Deleted Sucessfully')
  } catch (error) {
    response.json(message)
  }
}

export const editJob = async (request, response) => {
  const job = request.body
  const editjob = new jobs(job)
  try {
    await jobs.updateOne({ _id: request.params.id }, editjob)
    response.json(editjob)
  } catch (error) {
    response.json(message)
  }
}
