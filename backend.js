var express = require('express')
var app = express()
var fs = require('fs')
var json = []
var fileInc = 0
fs.readFile('./data/' + fileInc + '.json', 'utf8', function (err,data) {
  if (err) return console.log(err);
  var json = JSON.parse(data);
  console.log(json);
});
fs.readFile('./tmp/history.txt', 'utf8', function(err, data){
  if(err) return console.log(err);
  var hist = data.split(' ');
  //fileInc = hist[hist.length - 1];
  console.log(fileInc);
});

app.get('/', function (req, res) {
  fs.readFile('./data/' + fileInc + '.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    json = JSON.parse(data);
    res.header('Access-Control-Allow-Origin', 'http://frizeriamica.ro')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.json(json)
  })
})

app.post("/",function(req, res) {

  res.header('Access-Control-Allow-Origin', 'http://frizeriamica.ro')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.send("Am primit")
  var string = req.originalUrl.substr(2)
  string = string.split("&")
  var title = string[0].substr("title=".length)
  var start = string[1].substr("start=".length)
  var end = string[2].substr("end=".length)
  var email = string[3].substr("email=".length)
  var phone = string[4].substr("phone=".length)
  var name = string[5].substr("name=".length)
  var control = string[6].substr("control=".length)

  fs.readFile('./data/' + fileInc + '.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    json = JSON.parse(data);
      if(control == 'null'){
          json.push({title: title, start: start, end: end, name: name, email:email, phone:phone})
          console.log(json);
          fs.writeFile("./data/" + fileInc + ".json", JSON.stringify(json), function(err) {
              if(err) {
                  return console.log(err)
              }
          });
      }
      else if(control == '*') {
          json = [];
          fs.writeFile("./data/" + fileInc + ".json", JSON.stringify(json), function(err) {
              if(err) {
                  return console.log(err)
              }
          });
      }
      else if(control == 'create') create();
      else if(Number.isInteger(parseInt(control))) {fileInc = parseInt(control); res.send('FileIncrementor changed to: ' + fileInc)}
      else if(control == 'del'){
        json.pop();
        
          fs.writeFile('./data/' + fileInc + '.json', JSON.stringify(json));
      } 



  });
})
var port = 3000;
app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
})


var create = function(){
  var appender = fileInc + ' ';
  fs.appendFile('./data/history.txt', appender);
  fileInc++; 
  fs.writeFile('./data/' + fileInc +  '.json', '[]'); 
  console.log(fileInc + '.json created');

}


/*
        for(var i=0; i<=json.length-2; i++){
          aux.push(json[i]);
          //console.log(aux);
        }*/