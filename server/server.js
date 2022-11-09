const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const connection = require("./db")
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const userForm = require("./routes/form")

require('dotenv').config();

const { PORT = 8000, DATABASE_URL } = process.env;

mongoose.connect(DATABASE_URL);

//use middleware 

app.use(cors());
app.use(express.json());

//database connection 
connection()

//routes 
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/form", userForm)


app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})

