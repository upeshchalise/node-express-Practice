const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`event started`);
  res.end("hello world");
});

server.listen(5000, () => {
  console.log(`server is started at the port 5000.....`);
});
