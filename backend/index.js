const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./Config/config.env" });
const path = require("path");

app.use("/", require("./routes"));
app.use(express.static(path.join(__dirname, "../client/public")));

require("./config/mongoConnection");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is listening");
});
