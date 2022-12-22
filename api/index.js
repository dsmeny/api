const express = require("express");
const db = require("./data.json");
var cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ data: "ok root" });
});

app.get("/api", (req, res) => {
  res.status(200).json({ data: "api ok" });
});

app.get("/api/:num", (req, res) => {
  let num = +req.params.num;
  let newDb = db.slice(0, num);

  res.status(200).json({ data: newDb });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
