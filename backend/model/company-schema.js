import mongoose from "mongoose";
import autoIncrement, { initialize } from "mongoose-auto-increment";

const companySchema = mongoose.Schema({
  companyLogo: String,
  companyTitle: String,
  Email: String,
  Status: String,
});

autoIncrement.initialize(mongoose.connection);
companySchema.plugin(autoIncrement.plugin, "company");
const company = mongoose.model("company", companySchema);

export default company;
