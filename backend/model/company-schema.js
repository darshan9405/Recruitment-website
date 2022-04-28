import mongoose from 'mongoose'
import autoIncrement, { initialize } from 'mongoose-auto-increment'

const companySchema = mongoose.Schema({
  companyname: String,
  companyemail: String,
  companyaddress: String,
  companyphone: String,
  companywebsite: String
})

autoIncrement.initialize(mongoose.connection)
companySchema.plugin(autoIncrement.plugin, 'company')
const company = mongoose.model('company', companySchema)

export default company
