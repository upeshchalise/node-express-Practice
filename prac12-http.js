const http = require("http");

const server = http.createServer((req, res) => {
  //   res.write(`welcome to the world of cola`);
  //   res.end();

  if (req.url === "/") {
    res.end("welcome to the home page");
  } else if (req.url === "/about") {
    res.end("welcome to the about page. This is where you will know about us");
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>The page you are looking for doesnot exist here!!! </p>
      <a href='/'>Home page</a>
      `);
  }
});

server.listen(5000);
