const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())

// user name : dbUser2
// password : 5PSu0HxJT38636NX


const uri = "mongodb+srv://dbUser2:5PSu0HxJT38636NX@cluster0.6iupoas.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const userCollection = client.db('nodeMongoCrud').collection('users');

    app.post('/users', async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user)
      res.send(result);
    })
  }
  finally {

  }
}
run().catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello from node mongo crud server');
});

app.listen(port, () => {
  console.log('Listening to port', port);
})