const express = require("express");
const app = express();
const path = require("path");
const basicAuth = require("express-basic-auth");
const port = 3000;

// Import QuizRouter and QuizService classes
const QuizRouter = require("./QuizRouter/QuizRouter");

// Setting up handlebars
const { engine } = require("express-handlebars");
const { homedir } = require("os");
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up middleware and serve public server
// app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("public"))

// Set up a simple authoriser using basic auth, just for Antony's learning purpose. Can be removed.
let users = [
  {
    username: "cody",
    password: "123",
  },
  {
    username: "tony",
    password: "456",
  },
];

const myAuthorizer = (username, password) => {
  return users.some((obj) => {
    if (username === obj.username && password === obj.password) {
      return true;
    } else {
      return false;
    }
  });
};

app.use(
  basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
  })
);

// Set up Router and Service class instances
const quizRouter = new QuizRouter(express);

// Home page
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./pages/index.html"));
// });

// Home page (Handlebars)
// app.get("/", (req, res) => {
//   res.render("home"); // don't need to type 'home.handlebars'
// });

app.use("/", quizRouter.router());

// Show error page
// '*' means whatever resource you are querying that don't exist

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});



app.all("*", (req, res) => {
  res.status(404).send("Resource not found.");
});
