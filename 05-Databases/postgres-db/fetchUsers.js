const pg = require("pg");

//Set up connection
const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: "test"
});

client.connect((err) => {
    if(err) throw err;

    console.log("Connection Established");

    client.query("SELECT * FROM users.users", (error, results) => {
        if(error) throw error;

        console.log(results.rows);
    })

})

