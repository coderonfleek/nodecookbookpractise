const {MongoClient} = require("mongodb");

const mongoClient = new mongodb.MongoClient(
    "mongodb://localhost:27017",
    {
        useUnifiedTopology: true
    },
    (err, client) => {

        if (err) throw err;

        console.log("Connection Established");

        let db = client.db("test");
        let collection = db.collection("users");

        console.log(collection);
    }
)

//console.log("Hey here");

/* // Connection URL
const url = 'mongodb://localhost:27017';
const client = new mongodb.MongoClient(url);

// Database Name
const dbName = 'test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close()); */