/*jslint es6 */
require('dotenv').config();

const PythonShell = require('python-shell');
const fs = require('fs');
const express = require('express');
const bodyParser= require('body-parser');
const path = require('path');
const app = express();

function onString(number){
  return './public/python/garage' + number + '.py';
}

// Garage Lookup
function getGarage(door){
    // My parameter format is door1, door2 etc. so position 4 gives the door ID
    return door[4];
}

//Server Configuration
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

// Garage Routes for API
app.get('/api/garages', function(req, res){
  res.send(garages);
})

app.get('/api/garages/:id', function(req, res){
  var found = getGarage(req.params.id);
  res.json(found);
})

app.post('/api/garages/:id', function(req, res){

// For now, uses a simple password query in the url string.
// Example: POST to localhost:8000/API/garages/door1?password=test
  if (req.query.password === process.env.PASS){
    var foundGarage = getGarage(req.params.id);
	
	var str = onString(foundGarage);
        PythonShell.run(str, function (err, results) {
          if (err)  throw err;
          //console.log('result: %j', results);
        });
	res.send("door");
   }
   else {
     console.log("invalid password");
     res.send("try again");
   }
})

app.listen(process.env.PORT, function(){
 console.log('Listening on port ' + process.env.PORT);
})