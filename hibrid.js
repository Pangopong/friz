var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var doc = null;
var toCol = 'appoints';
var toFind = {};
var toDel = null;
var lastN = 350; //308
// Connection URL
var url = 'mongodb://127.0.0.1:27017/friz';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var updateDocument = function(db, callback) {
  // Get the documents collection
  var col = db.collection(toCol);
  /*
  col.update(doc, doc, {upsert: true}, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Updated the document");
        callback(result);
  });  */
  //if(toDel == 1) col.remove({work: doc.work});

   col.save(doc);
}

var findDocuments = function(db, callback, toFind) {
  // Get the documents collection
  var col = db.collection(toCol);

  var n = 0;
  col.count(function(err, N){
      n = N - lastN;
    // Find some documents
      col.find(toFind, {skip: n}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
      });
  });

}


app.get('/', function (req, res) {
  
    
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')


          MongoClient.connect(url, function(err, db) {
                assert.equal(null, err);
                console.log("Connected successfully to MongoDB server");
                  
                  var callback = function(docs){
                    doc = docs;
                    res.send(doc);

                    db.close();
                  }

                  findDocuments(db, callback, toFind)
                })
})

app.post("/",function(req, res) {

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.send("Am primit")
  //eliminarea rahaturilor din {'{test:'test'}':''}, că așa le-am primit
  doc = JSON.stringify(req.body);
  doc = doc.slice(2, doc.length - 5);
  var i=1;
    while(i != doc.length){
      doc = doc.replace(String.fromCharCode(92),'');
      i++;
    }
  doc = JSON.parse(doc);
  console.log(doc);

          MongoClient.connect(url, function(err, db) {
          assert.equal(null, err);
          console.log("Connected successfully to MongoDB server");

          updateDocument(db, function(){

              var callback = function(){
                  db.close();
              }

              findDocuments(db, callback, toFind)
          });
    });
})


var port = 3000;
app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
})
