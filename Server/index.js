const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const DBconnection = require("./connection");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const routers = require("./router");
app.use("/", routers);

app.listen(port, () => {
  console.log("Listening at port 5000");
  DBconnection();
});
