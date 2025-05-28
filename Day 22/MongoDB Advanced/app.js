const express = require('express');
const app = express();
const userModel = require('./models/user')

const dummyData = [
  {
    username: "john_doe",
    name: "John Doe",
    password: "password123",
    age: "28",
    isMarried: false,
    email: "john@example.com"
  },
  {
    username: "jane_smith",
    name: "Jane Smith",
    password: "janesmith321",
    age: "32",
    isMarried: true,
    email: "jane.smith@example.com"
  },
  {
    username: "mike_ross",
    name: "Mike Ross",
    password: "suits1234",
    age: "30",
    isMarried: false,
    email: "mike.ross@example.com"
  },
  {
    username: "rachel_green",
    name: "Rachel Green",
    password: "fashionista789",
    age: "27",
    isMarried: false,
    email: "rachel.green@example.com"
  },
  {
    username: "harvey_specter",
    name: "Harvey Specter",
    password: "closerking456",
    age: "35",
    isMarried: false,
    email: "harvey.specter@example.com"
  },
  {
    username: "louis_litt",
    name: "Louis Litt",
    password: "littup!987",
    age: "40",
    isMarried: true,
    email: "louis.litt@example.com"
  },
  {
    username: "donna_paulsen",
    name: "Donna Paulsen",
    password: "redqueen456",
    age: "34",
    isMarried: false,
    email: "donna.paulsen@example.com"
  },
  {
    username: "phoebe_buffay",
    name: "Phoebe Buffay",
    password: "smellycat",
    age: "29",
    isMarried: true,
    email: "phoebe.buffay@example.com"
  },
  {
    username: "chandler_bing",
    name: "Chandler Bing",
    password: "sarcasm101",
    age: "31",
    isMarried: true,
    email: "chandler.bing@example.com"
  },
  {
    username: "ross_geller",
    name: "Ross Geller",
    password: "dinosaurs4life",
    age: "33",
    isMarried: false,
    email: "ross.geller@example.com"
  },
  {
    username: "monica_geller",
    name: "Monica Geller",
    password: "chefpass123",
    age: "30",
    isMarried: true,
    email: "monica.geller@example.com"
  },
  {
    username: "joey_tribbiani",
    name: "Joey Tribbiani",
    password: "howudoin",
    age: "29",
    isMarried: false,
    email: "joey.tribbiani@example.com"
  },
  {
    username: "ted_mosby",
    name: "Ted Mosby",
    password: "architect123",
    age: "33",
    isMarried: false,
    email: "ted.mosby@example.com"
  },
  {
    username: "barney_stinson",
    name: "Barney Stinson",
    password: "legenwaitforitdary",
    age: "34",
    isMarried: false,
    email: "barney.stinson@example.com"
  },
  {
    username: "robin_scherbatsky",
    name: "Robin Scherbatsky",
    password: "canadian987",
    age: "32",
    isMarried: false,
    email: "robin.scherbatsky@example.com"
  }
];

app.get('/', async (req, res) => {
    let allUsers = await userModel.find({});
    res.send({
        status: "working",
        data: allUsers
    });
});

// insert many at once
app.get('/createmany', async (req, res) => {
    let data = await userModel.insertMany(dummyData)
    res.send(data);
});

// eq operator
app.get('/users', async (req, res) => {
    // let users = await userModel.find({age: 30});
    let users = await userModel.find({age: {$eq: 30}});
    res.send(users);
});

// ne operator
app.get('/not-users', async (req, res) => {
    // saare users print ho jayengii jiski age 30 ke equal nahi hogi 
    // ne -> not equal operator
    let users = await userModel.find({age: {$ne: 30}});
    res.send(users);
});

// lt operator
app.get('/less-users', async (req, res) => {
    // saare users print ho jayengii jiski age 30 se kam hogi 
    // lt -> less then operator
    let users = await userModel.find({age: {$lt: 30}});
    res.send(users);
});

// in operator
app.get('/in-users', async (req, res) => {
    // saare users print ho jaayenge jinki age ya toh 25 hai, ya toh 30 hai, ya toh 27 hain
    let users = await userModel.find({age: {$in: [25, 30, 27]}});
    res.send(users);
});

// nin operator
app.get('/nin-users', async (req, res) => {
    // saare users print ho jaayenge jinki age 25, 30, 27 nahi hai, return ho jaayenge
    let users = await userModel.find({age: {$nin: [25, 30, 27]}});
    res.send(users);
});

// exist operator
app.get('/exists-users', async (req, res) => {
    // hame aise users print karne hai, jinke paas isAdmin field exist karti hai
    // let users = await userModel.find({isAdmin: {$exists: true}});
    let users = await userModel.find({isAdmin: {$exists: false}});
    res.send(users);
});

// and-or operator
app.get('/and-or-users', async (req, res) => {
    // hame aise users chahiye hame jo ki 18 ya 18 saal se badhe hain, saath hi saath wo married nahi hain
    // let users = await userModel.find({$and: [{isMarried: false}, {age: {$gte: 18}}]});

    // hame aise users chahiye hame jo ki 30 ya 30 saal se badhe hain, ya to woh wo married nahi hain
    let users = await userModel.find({$or: [{isMarried: false}, {age: {$gte: 30}}]});
    res.send(users);
});


app.listen(3000);