require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const endpoints = require("./routes/endpoints");

app.get("/cron", (req, res) => {
  res.json({ msg: "cron called" });
});

app.use("/api", endpoints);

app.listen(process.env.PORT, () => {
  console.log("backend server listening ");
});
