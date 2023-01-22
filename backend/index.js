const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser  = require('body-parser');
var cors = require('cors')
dotenv.config({ path: "./Config/config.env" });

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes"));

require("./config/mongoConnection");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is listening");
});
