// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Start up an instance of app

const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function lisitening(){
    console.log(`server running on port: ${port} `)
}

//get function
app.get('/allData', sendData);

function sendData(req, res){
    res.send(projectData);
}

//post function
app.post('addData', addData);

function addData(req, res){
    let data = req.body;
    console.log('server side data', data)

    //date
    //temperature
    //user's input
    projectData["data"] = data.date; 
    projectData["temperature"] = data.temperature;
    projectData["userInput"] = data.userInput;

    res.send(projectData);
}