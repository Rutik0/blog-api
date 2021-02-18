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
  var sql = "CREATE TABLE studentlist(studentid INT NOT NULL AUTO_INCREMENT,firstname VARCHAR(145) NULL,middlename VARCHAR(145) NULL,lastname VARCHAR(145) NULL,mobileno VARCHAR(45) NULL,email VARCHAR(200) NULL,city VARCHAR(45) NULL,statecode VARCHAR(45) NULL,pincode VARCHAR(45) NULL,dateofbirth DATE NULL,schoolname VARCHAR(145) NULL,status CHAR(4) NULL DEFAULT 'Y',PRIMARY KEY (studentid))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});