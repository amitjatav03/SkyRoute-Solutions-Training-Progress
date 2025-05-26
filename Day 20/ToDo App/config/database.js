const mongoose = require('mongoose');

// following statement loads the data defined in the .env as a environment variables into the process object
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser: true,
        // userUnifiedTopology: true
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch((error) => {
        console.log("Issue in DB Connection")
        console.error(error.message);

        // iska matlab kya?
        process.exit(1);
    })
}

module.exports = dbConnect;


