const { isAuth } = require("../utils");
const { PubSub } = require("apollo-server");

const pubsub = new PubSub();

const resolvers = {
  Query: {
    me: (_, __, context) => {
      return isAuth(context.token);
    }
  },
  Subscription: {
    tick: {
      subscribe: () => pubsub.asyncIterator(["TICK"])
    }
  }
};

// tick service
setInterval(() => {
  pubsub.publish("TICK", { tick: new Date().toString() });
}, 1000);

module.exports = resolvers;
