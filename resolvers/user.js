const resolvers = {
  email: (root) => root.email,
  firstname: (root) => root.firstname,
  lastname: (root) => root.lastname
}

module.exports = resolvers;