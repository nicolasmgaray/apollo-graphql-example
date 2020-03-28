const isAuth = token => {
  if (!token) throw new Error("No token provided, add token on 'x-auth-token' header");
  return { username: "Harcoded Dummy User", token };
};

const contextHandler = ({ req, connection }) => {
  if (connection) {
    return connection;
  } else {
    return { token: req.headers["x-auth-token"] || "" };
  }
};

const errorHandler = err => {
  // Add custom error handling and logging
  console.log("Custom logging: ", err.message);
  return err;
};

const wsConnectionHandler = (connectionParams, webSocket,context) => {
  const user = isAuth(connectionParams["x-auth-token"]); 
  console.log("Connected ",user.username)
  context.user = user;
  return user;
};

const wsDisconnectionHandler = (connectionParams, context) => {
  // Add custom disc logic
  let user = context.user ? context.user.username : 'Unknown';
  console.log("Disconected ",user)
};

module.exports = {
  isAuth,
  contextHandler,
  errorHandler,
  wsConnectionHandler,
  wsDisconnectionHandler
};
