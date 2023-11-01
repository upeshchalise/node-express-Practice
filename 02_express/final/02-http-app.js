const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("../02_express/navbar_app/index.html");
const homeStyle = fs.readFileSync("../02_express/navbar_app/styles.css");
const homeLogic = fs.readFileSync("../02_express/navbar_app/browser-app.js");
const homeImage = fs.readFileSync("../02_express/navbar_app/logo.svg");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>ItS fucking 404 error bitch</h1>");
  }
});
server.listen(3000);
