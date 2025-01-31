const express = require('express')
const app = express()
const port = 3000


app.use(express.static(__dirname + "/public"));

// <<<<<<< Updated upstream
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/html/home.html");
});
// =======


// >>>>>>> Stashed changes

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/html/about.html");
  });

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/html/works.html");
  });

app.listen(port)