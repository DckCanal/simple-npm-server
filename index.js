const http = require("http");

http
  .createServer((_, res) => {
    res.end("Welcome!");
  })
  .listen(8000, "0.0.0.0", () => {
    console.log("Server started: listening on port 8000");
  });
