const express = require("express");
const app = express();
require("./startup/setHeaders")(app);
require("./startup/prod")(app);
require("./startup/db")();
require("./startup/routes")(app);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 8000;
const index = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = index;
