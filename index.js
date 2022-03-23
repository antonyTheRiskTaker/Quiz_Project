const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// setting up handlebars
const { engine } = require("express-handlebars");
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up middleware and serve public server
app.use(express.static("./public"));

// Home page
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./index.html"));
// });

//home page
app.get("/", (req, res) => {
  res.render("home");
});

// Show error page
// '*' means whatever resource you are querying that don't exist
app.all("*", (req, res) => {
  res.status(404).send("Resource not found.");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
