// Require Node packages
require('dotenv').config();
const express = require("express");
const path = require("path");
const session = require('express-session');
const passport = require('passport');
const basicAuth = require("express-basic-auth");
const { engine } = require("express-handlebars");

// Set up Express and environment
const app = express();
const port = 3000;

// Set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// Setting up handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Set up session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);

// Set up knex
const knexFile = require('./knexfile').development;
const knex = require('knex')(knexFile);

// Initialise the authentication module
app.use(passport.initialize());
app.use(passport.session());

// Set up the local login and signup strategies
const LocalStrategy = require('passport-local').Strategy;
// Set up bcrypt to created hashed passwords and compare passwords (the inputted one and the stored one)
const bcrypt = require('./bcrypt.js');
const { urlencoded } = require("express");
const { user } = require("pg/lib/defaults");

passport.use(
  'local-login',
  new LocalStrategy(async (username, password, done) => {
    try {
      const userQueries = await knex
        .select('*')
        .from('user_table')
        .where('username', username);
      if (userQueries.length > 0) {
        console.log('User exists');
        await bcrypt.checkPassword(password, userQueries[0].password);
        return done(null, userQueries[0]);
      }
      return done(null, false);
      // console.log('Logging in...');
      // // (Line below) make sure the name for the table storing user info is right
      // let users = await knex('users').where({ email: email });
      // if (users.length == 0) {
      //   return done(null, false, { message: 'Incorrect User' });
      // }
      // let user = users[0];
      // // (Line below) password = plainTextPassword, user.password = hashedPassword in checkPassword() of bcrypt.js
      // let result = await bcrypt.checkPassword(password, user.password);
      // if (result) {
      //   return done(null, user);
      // } else {
      //   return done(null, false, { message: "Incorrect username or password" });
      // }
    } catch (err) {
      done(err);
    }
  })
);

passport.use(
  'local-signup',
  new LocalStrategy(async (username, password, done) => {
    try {
      const userQueries = await knex
        .select('username', 'id')
        .from('user_table')
        .where('username', username);
      if (userQueries.length === 0) {
        const hashed = await bcrypt.hashPassword(password);
        console.log(hashed);
        await knex
          .insert({ username, password: hashed })
          .into('user_table');
        return done(null, userQueries[0]);
      }

      return done(null, false);
      // // (Line below) make sure the name for the table storing user info is right
      // let users = await knex('users').where({ email: email });
      // if (users.length > 0) { // i.e. check if the email already exists
      //   return done(null, false, { message: 'Email in use...' });
      // }
      // let hash = await bcrypt.hashPassword(password);

      // // (Line below) a new user is created
      // const newUser = {
      //   email: email,
      //   password: hash,
      // };

      // // (Line below) to retrieve the user's id
      // let userID = await knex('users').insert(newUser).returning('id');
      // newUser.id = userID[0];
      // done(null, newUser);
    } catch (err) {
      done(err);
    }
  })
);

// Require user-created modules
// const QuizRouter = require("./QuizRouter/QuizRouter");
// const { default: knex } = require("knex");

// Set up a simple authoriser using basic auth, just for Antony's learning purpose. Do not remove it until proper authentication is implemented.
// let users = [
//   {
//     username: "cody",
//     password: "123",
//   },
//   {
//     username: "tony",
//     password: "456",
//   },
// ];

// const myAuthorizer = (username, password) => {
//   return users.some((obj) => {
//     if (username === obj.username && password === obj.password) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// app.use(
//   basicAuth({
//     authorizer: myAuthorizer,
//     challenge: true,
//   })
// );

// Set up Router and Service class instances
// const quizRouter = new QuizRouter(express);

// Home page
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./pages/index.html"));
// });

// Home page (Handlebars)
// app.get("/", (req, res) => {
//   res.render("home"); // don't need to type 'home.handlebars'
// });

// app.use("/", quizRouter.router());

// Serialise and deserialise user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Protect your page handlers
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated())
// }

// Set up pages
app.get("/", (req, res) => {
  res.render("home", { style: "Home.css" });
});

app.get("/admin", (req, res) => {
  res.render("admin", { style: "admin.css" });
});

app.get("/congratulation", (req, res) => {
  res.render("congratulation", { style: "congratulation.css" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { style: "signup.css" });
});

app.get("/quizarea", (req, res) => {
  res.render("quizarea", { style: "quizarea.css" });
});

app.post('/signup', passport.authenticate("local-signup", {
  successRedirect: "/login",
  failureRedirect: "/error",
}));

app.post('/login', passport.authenticate("local-login", {
  successRedirect: "/",
  failureRedirect: "/error",
})
);

// Show error page
// '*' means whatever resource you are querying that don't exist
app.all("*", (req, res) => {
  res.status(404).send("Resource not found.");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});