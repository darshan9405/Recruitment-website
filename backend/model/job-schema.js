import mongoose from 'mongoose'
import autoIncrement, { initialize } from 'mongoose-auto-increment'

const jobSchema = mongoose.Schema({
  company: String,
  title: String,
  desc: String,
  req: String,
  loc: String,
  category: String,
  sDate: String,
  eDate: String,
  Status: String
})

autoIncrement.initialize(mongoose.connection)
jobSchema.plugin(autoIncrement.plugin, 'job')
const job = mongoose.model('job', jobSchema)

export default job
