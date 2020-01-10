const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema.graphql");
const resolvers = require("./resolvers");
const {
  contextHandler,
  errorHandler,
  wsConnectionHandler,
  wsDisconnectionHandler
} = require("./utils");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: contextHandler,
  formatError: errorHandler,
  subscriptions: { onConnect: wsConnectionHandler, onDisconnect: wsDisconnectionHandler  }
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`);
  console.log(`Subscriptions ready at ${subscriptionsUrl}`);
});
