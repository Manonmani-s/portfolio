const express = require("express");
const server = express();

// const livereload = require("livereload");
// const connectLiveReload = require("connect-livereload");

// const liveReloadServer = livereload.createServer();

// server.use(connectLiveReload());

server.use(express.static("recent"));

// liveReloadServer.watch("public");

const port = 5010;
server.listen(port, function () {
  console.log(`server is listening to the port ${port}`);
});