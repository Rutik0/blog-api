var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eduauraa"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO studentlist (studentid,firstname,middlename,lastname,mobileno,email,city,statecode,pincode,dateofbirth,schoolname,status) VALUES (1,'rutik','dinesh','bhanushali',1234567890,'abc@abc.com','mumbai',4000,01,24-11-2000,'lawrence','y'), (2,'rutik','dinesh','bhanushali',1234567890,'abc@abc.com','navimumbai',4000,01,5-6-1997,'navodaya','n')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});