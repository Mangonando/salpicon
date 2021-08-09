const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: String,
  name: String,
  lastname: String,
  email: String,
  avatar: String,
  phone: String,
  address: {
    street: String,
    number: String,
    zipCode: String,
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Specialist",
    },
  ],
  role: {
    type: String,
    default: "Client",
  },
});

const User = model("User", userSchema);

module.exports = User;
