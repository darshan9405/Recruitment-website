import company from '../model/company-schema.js'

export const getCompany = async (request, response) => {
  try {
    let c = await company.find()
    response.json(c)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const getCompanyById = async (request, response) => {
  let id = request.params.id
  try {
    let c = await company.findById(id)
    response.json(c)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const createCompany = async (request, response) => {
  const c = request.body
  const newc = new company(c)
  try {
    await newc.save()
    response.json(newc)
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const deleteCompany = async (request, response) => {
  try {
    await company.deleteOne({ _id: request.params.id })
    response.json('User Deleted Sucessfully')
  } catch (error) {
    response.json(message)
  }
}

export const editCompany = async (request, response) => {
  const c = request.body
  const editCompany = new company(c)
  try {
    await company.updateOne({ _id: request.params.id }, editCompany)
    response.json(editCompany)
  } catch (error) {
    response.json(message)
  }
}
