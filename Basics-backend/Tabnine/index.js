const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server is up and running on port 3000');
});

// want to get data from form

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Form submitted successfully!');
});

// want to get data from a JSON file

app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        res.json(JSON.parse(data));
    });
});

// want to get data from a MongoDb database

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("users");
    // perform actions on the collection object
    client.close();
});

// want to get data from a REST API

app.get('/api/data', (req, res) => {
    axios.get('https://api.example.com/data')
       .then(response => {
            res.json(response.data);
        })
       .catch(error => {
            console.error(error);
            res.status(500).send('Server Error');
        });
});

// want to get data from a GraphQL API

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// want to take data and submit in the internal  server storage and databse

app.post('/submit', (req, res) => {
    // store data in database
    res.send('Form submitted successfully!');
});







