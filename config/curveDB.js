require("dotenv").config();
const mongoose = require("mongoose")

const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const url = `mongodb+srv://${username}:${password}@cluster0.1lkei5u.mongodb.net/`


mongoose.connect(url)
.then( () => {
    console.log("connected...........");
})
.catch( () => {
    console.log("unable to connect");
})