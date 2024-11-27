import express from "express";

const app = express();
const port = 3000;

function controller(req, res) {
  res.send("hello word");
}

function url() {
  console.log(`http://localhost:${port}`);
}

app.get("/", controller);
app.listen(port, url);
