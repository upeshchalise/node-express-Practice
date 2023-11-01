const http = require("http");

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "content-type": "text/html" }); //meta data
  //   res.write("<h1>This is the html type content</h1>");
  //   res.end();

  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); //meta data
    res.write("<h1>This is the Home Page</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" }); //meta data
    res.write("<h1>This is the about page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 page not found</h1>");
    res.end();
  }
});

server.listen(5000);
