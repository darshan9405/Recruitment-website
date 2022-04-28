import express from 'express'
import {
  getCompany,
  createCompany,
  deleteCompany,
  editCompany,
  getCompanyById
} from '../controller/company-controller.js'

const company = express.Router()

company.get('/company', getCompany)
company.get('/company/:id', getCompanyById)
company.post('/createcompany', createCompany)
company.delete('/deletecompany/:id', deleteCompany)
company.put('/editcompany/:id', editCompany)
export default company
