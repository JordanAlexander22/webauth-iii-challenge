const express = require("express");

const UserRoutes = require("./users/user-routes");
const AuthRoutes = require("./auth/auth-router");
const server = express();

server.use(express.json());

server.use("/api/auth", AuthRoutes);
server.use("/api/users", UserRoutes);

server.get("/", (req, res) => {
  res.send("<h2>Web Auth: JWT</h2>");
});

module.exports = server;
