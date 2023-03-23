const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
  });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })