// Base file that calls typeDefs and resolvers and exports them

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };