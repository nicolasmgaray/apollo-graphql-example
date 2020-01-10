const isAuth = token => {
  if (!token) throw new Error("no token provided");
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
  // ADD USER TO CONNECTED PEOPLE ARRAY
  console.log("Connected ",user.username)
  context.user = user;
  return user;
};

const wsDisconnectionHandler = (connectionParams, context) => {
  // REMOVE USER FROM CONNECTED PEOPLE ARRAY
  console.log("Disconected ",context.user.username)
};

module.exports = {
  isAuth,
  contextHandler,
  errorHandler,
  wsConnectionHandler,
  wsDisconnectionHandler
};
