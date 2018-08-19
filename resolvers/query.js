const User = require('../models/user');
const { APP_SECRET, getUserId } = require('../utils');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  hello: () => 'Hello',
  books: () => books,
  users: (root, args, context, info) => {
    getUserId(context)

    return User.find({});
  }
}

module.exports = resolvers;
