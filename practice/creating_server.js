const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      "welcome talha nawaz to your first node js server with THapa technical"
    );
    res.end();
  }
  if (req.url == "/name") {
    res.write("<h1>user name is Talha Nawaz</h1>"); // we can also write like this in html tags
    res.end();
  }
  if (req.url === "/age") {
    res.setHeader("Content-Type", "text/plain"); //to tell that it is plain text
    res.write("User age is 24 years");
    res.end();
  }
  if (req.url === "/role") {
    res.write("User is a software engineer");
    res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`the server has been started at port http://localhost:${PORT}`);
});
