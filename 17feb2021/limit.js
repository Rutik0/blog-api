var mysql = require('mysql2');
const express = require('express');
var app=express()
port=3002
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
app.get('/',(req,res)=>{
    
    
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
     
});
});
res.json(result)
});

    
    app.listen(port,()=>{
    console.log('listening');
    });