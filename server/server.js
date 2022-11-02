const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();
const { PORT = 8000, DATABASE_URL } = process.env;

mongoose.connect(DATABASE_URL);

//use middleware 

app.use(cors());
app.use(express.json());

mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log('MongoDB Error:' + error.message));


app.get('/', (req, res) => {
  res.send('Welcome to the ExpenseTracker API');
});

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})