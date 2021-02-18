var mysql = require('mysql2');
const express = require('express');
var app=express()
const port=3002
var cheerio=require('cheerio')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
     result1=result;
    console.log(typeof(result1))
   //result1=JSON.stringify(result)

  });
});
app.get('/',(req,res)=>{
    //result2=JSON.stringify(result1)
    res.send(`${result1[0].name}`)
    });
    
    app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
    });