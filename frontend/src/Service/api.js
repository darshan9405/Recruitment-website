import axios from 'axios'

const url = 'http://localhost:9000'

//job category API's
export const getJobcategory = async id => {
  id = id || ''
  return await axios.get(`${url}/job-categories/${id}`)
}

export const createJobcategory = async user => {
  return await axios.post(`${url}/createjobcategory`, user)
}

export const editJobcategory = async (id, user) => {
  return await axios.put(`${url}/editjobcategory/${id}`, user)
}

export const deleteJobcategory = async id => {
  return await axios.delete(`${url}/job-categories/${id}`)
}

//job location API's
export const getJobLocation = async id => {
  id = id || ''
  return await axios.get(`${url}/locations/${id}`)
}

export const createJobLocation = async user => {
  return await axios.post(`${url}/createlocation`, user)
}

export const editJobLocation = async (id, user) => {
  return await axios.put(`${url}/editlocation/${id}`, user)
}

export const deleteJobLocation = async id => {
  return await axios.delete(`${url}/locations/${id}`)
}

//job Skill API's
export const getSkill = async id => {
  id = id || ''
  return await axios.get(`${url}/skills/${id}`)
}

export const createSkill = async user => {
  return await axios.post(`${url}/createskill`, user)
}

export const editSkill = async (id, user) => {
  return await axios.put(`${url}/editskill/${id}`, user)
}

export const deleteSkill = async id => {
  return await axios.delete(`${url}/skills/${id}`)
}

//Jobs API's

export const getJob = async id => {
  id = id || ''
  return await axios.get(`${url}/jobs/${id}`)
}

export const createJob = async job => {
  return await axios.post(`${url}/createjob`, job)
}

export const deleteJob = async id => {
  return await axios.delete(`${url}/deletejob/${id}`)
}

export const editJob = async (id, job) => {
  return await axios.put(`${url}/editjob/${id}`, job)
}

//Jobs API's

export const getCompany = async id => {
  id = id || ''
  return await axios.get(`${url}/company/${id}`)
}

export const createcompany = async job => {
  return await axios.post(`${url}/createcompany`, job)
}

export const deleteCompany = async id => {
  return await axios.delete(`${url}/deletecompany/${id}`)
}

export const editCompany = async (id, company) => {
  return await axios.put(`${url}/editcompany/${id}`, company)
}
