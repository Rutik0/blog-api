var mysql = require('mysql2');
const express = require('express');
var url = require('url');
var app=express()
const port=3001


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eduauraa"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM studentlist", function (err, result, fields) {
    if (err) throw err;
    result1=result
    console.log(result1)
     
  });
});
app.get('/studentlist',(req,res)=>{
    console.log(result1)
    res.send(result1)
});
app.get('/studentlist/:id',(req,res)=>{
    con.query("SELECT * FROM studentlist where studentid=?", [req.params.id],function (err, result, fields){
     if(!err){
         res.json(result)
     }
    }); 
   

});
    app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
    });