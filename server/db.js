const mongoose = require('mongoose')

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(process.env.DATABASE_URL, connectionParams);
    console.log("Connected To Database Succesfully")
  } catch (error) {
    console.log(error)
    console.log("could not connect to DB")

  }
}