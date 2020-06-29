const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("testing");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));