const mongodb = require("mongodb");

/* const mongoClient = new mongodb.MongoClient(
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
) */


// Connection URL
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

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  //return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());