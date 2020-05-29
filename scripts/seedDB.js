const mongoose = require('mongoose');
const db = require('../models');

// This file empties the user collection and inserts the users below

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/BLASTUser'
);

const userSeed = [
  {
    name: 'Tyler Collins',
    query: 'ATTTAACCGGAGT',
    date: new Date(Date.now()),
  },
  {
    name: 'Homer Simpson',
    query: 'TTTAAGAGGAGT',
    date: new Date(Date.now()),
  },
  {
    name: 'William Golding',
    query: 'GCGCGCGCGCGCGCGC',
    date: new Date(Date.now()),
  },
  {
    name: 'J.D. Salinger',
    query: 'ATATATTTAATTAAAAAA',
    date: new Date(Date.now()),
  },
  {
    name: 'Tal M. Klein',
    query: 'CTCCTTTCCTTCTCT',
    date: new Date(Date.now()),
  },
  {
    name: 'J.K. Rowling',
    query: 'GTTGGTTGGAAAAAAAAAAAAAAAAAAAAA',
    date: new Date(Date.now()),
  },
  {
    name: 'Neil Gaiman',
    query: 'TTTTTTTTTTTGGAACCCCCCCCCCCCC',
    date: new Date(Date.now()),
  },
  {
    name: 'Charles Petzold',
    query: 'GCGCGCGCAAATTTTTTTTTGGGGGGGGG',
    date: new Date(Date.now()),
  },
  {
    name: 'Brad Stone',
    query: 'GCGCGC',
    date: new Date(Date.now()),
  },
  {
    name: 'Arnold Schwarzenegger',
    query: 'TATATATATATATA',
    date: new Date(Date.now()),
  },
  {
    name: 'Ashlee Vance',
    query: 'GCGCGCGCGCGCGCCCCGCGCGA',
    date: new Date(Date.now()),
  },
  {
    name: 'Walter Isaacson',
    query: 'TACG',
    date: new Date(Date.now()),
  },
  {
    name: 'Neil deGrasse Tyson',
    query: 'TTTATAACCCGCAT',
    date: new Date(Date.now()),
  },
  {
    name: 'George Orwell',
    query: 'CGCGCGCGTTAAAT',
    date: new Date(Date.now()),
  },
  {
    name: 'Mary Shelley',
    query: 'TATA',
    date: new Date(Date.now()),
  },
  {
    name: 'Trevor Noah',
    query: 'GGCCCGCGCGATCAGT',
    date: new Date(Date.now()),
  },
];

db.User
    .deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then((data) => {
      console.log(data.result.n + ' records inserted!');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
