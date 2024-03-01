const express = require("express");
const connectDB = require("./config/db");
const app = express();
const http = require("http").Server(app);
const indexRoutes=require('./router/index-router');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const port = 3000;
// Connecting to the db
connectDB()


app.get("/", (req, res) => res.send(`<h1>Server started</h1>`));
app.use('/api',indexRoutes)



server = app.listen(port, () => console.log(`server listening port at ${port}`));