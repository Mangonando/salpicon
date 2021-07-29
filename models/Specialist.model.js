const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const specialistSchema = new Schema({
  username: {
    type: String
  },
  password: String,
  name: String,
  lastname: String,
  avatar: String,
  bio: String,
  serviceType: String,
  servicePrice: Number,
  // services: [
  //     {
  //         type: String,
  //         price: Number,
  //     }
  // ],
  phone: String,
  email:String,
  role: {
    type: String,
    default: 'Specialist'
  }
});

const Specialist = mongoose.model("Specialist", specialistSchema);

module.exports = Specialist;