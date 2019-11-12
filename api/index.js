//following tutorial from https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d

//Import express
let express = require('express')
//Import Body parser
let bodyParser = require('body-parser');
//Import mongoose
let mongoose = require('mongoose');

//Initialize the app
let app = express();

//Import routes
let apiRoutes = require("./api-routes")
//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/api', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

//Check for db connection
if(!db) {
    console.log("Error connecting to db");
} else {
    console.log("Db connected successfully");
}

//Setup server port
var port = process.env.Port || 8080;

//Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and nodemon'));

//Use API routes in the App
app.use('/api', apiRoutes)
//Launch app to listen to port
app.listen(port, function() {
    console.log("Running api on port " + port);
});