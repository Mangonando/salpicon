// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const LOCAL_MONGO_URI = "mongodb://localhost/salpicon"
const ATLAS_MONGO_URI = "mongodb+srv://juansalpicon:8PW37K3-6xL@L5k@cluster0.rfrss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGO_URI = process.env.MONGODB_URI || ATLAS_MONGO_URI
//ATLAS_MONGO_URI
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
