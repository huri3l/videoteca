require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const port = 3333;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("📦 Connected to the database!"));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`⚡ Backend started at http://localhost:${port}`);
});
