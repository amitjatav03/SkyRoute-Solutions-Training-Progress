const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// importing routes
const blog = require('./routes/blog');

// mount
app.use('/api/v1', blog);

// connect with database
const connectWithDb = require('./config/database');
connectWithDb();

// start the server
app.listen(PORT, () => {
    console.log(`App is Started at Port No. ${PORT}`);
})

// default route
app.get('/', (req, res) => {
    res.send(`<h1>This is My HomePage</h1>`);
})