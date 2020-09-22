const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, {
          "Content-Type": "text/html; charset=UTF-8"
        });
        res.write("<h1>Suruthi Home page</h1>");
        res.end();
        break;

      case "/about":
        res.writeHead(200, {
          "Content-Type": "text/html; charset=UTF-8"
        });
        res.write("<h1>Hello about!</h1>");
        res.end();
        break;

      default:
        // res.writeHead(404, {
        //   "Content-Type": "text/html; charset=UTF-8"
        // });
        // res.write("<h1>404 page not found</h1>");
        // res.end();
        break;
    }

    if (req.url.includes("/search")) {
      const query = url.parse(req.url, true).query;
      res.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8"
      });
      res.write("<h1>Search Screen!</h1>");
      res.write("<p>Search Term</p>" + query.q);
      res.write("<p>Limit</p>" + query.limit);
      res.end();
    }
  })
  .listen(8000);
