'use strict';
var Deferred = require('promised-io/promise').Deferred;

var books = [
  {
    "title": "Alice's Adventures in Wonderland",
    "author": "Lewis Carroll",
    "publication": 1865,
    "genre": "Children's ficiton",
    "id": 1
  },
  {
    "title": "Through the Looking Glass, and What Alice Found There",
    "author": "Lewis Carroll",
    "publication": 1871,
    "genre": "Children's ficiton",
    "id": 2
  },
  {
    "title": "Dragons of Autumn Twilight",
    "author":["Margaret Weis", "Tracy Hickman"],
    "publication": 1984,
    "genre": "Fantasy",
    "id": 3
  },
  {
    "title": "Dragons of Winter Night",
    "author": ["Margaret Weis", "Tracy Hickman"],
    "publication": 1985,
    "genre": "Fantasy",
    "id": 4
  },
  {
    "title": "Dragons of Spring Dawn",
    "author": ["Margaret Weis", "Tracy Hickman"],
    "publication": 1986,
    "genre": "Fantasy",
    "id": 5
  }
]

module.exports = {
  getBooks: function() {
    var deferred = new Deferred();
    deferred.resolve(books);
    return deferred.promise;
  }
};