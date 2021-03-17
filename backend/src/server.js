const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(port, () => {
  console.log(`⚡ Backend started at http://localhost:${port}`);
});
