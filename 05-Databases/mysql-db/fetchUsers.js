const mysql = require("mysql");

//Set up connection
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    secret: ""
})

connection.connect((err) => {
    if(err){
        console.error(err);
    }

    console.log("Connection Established");

    connection.query('SELECT * FROM test.users', function (error, results, fields) {
        if (error) throw error;
        
        console.log(results);
      });
})