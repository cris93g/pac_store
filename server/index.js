//librarys brought in
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = process.env.port || 3001;
const routes = require("./routes/routes");
const passport = require("passport");
const {
  getUser,
  strat,
  logout
} = require(`${__dirname}/controller/userController`);

//uses cors so no one can ht our endpoints
app.use(cors());
//parses content into json
app.use(json());
//uses massive so we can use functions to our db
massive(process.env.CONNECTION_STRING).then(dbinstance =>
  app.set("db", dbinstance)
);

//creates session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

//functions for passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

// What properties do we want our user to have on session?
passport.serializeUser((profile, done) => {
  const db = app.get("db");
  db.getUserByAuthid(profile.id).then(user => {
    console.log(profile.name);
    if (!user[0]) {
      db.addUserByAuthid(profile.id, profile.picture, profile.displayName)
        .then(response => {
          return done(null, response[0]);
        })
        .catch(err => console.log(err));
    } else {
      return done(null, user[0]);
    }
  });
});

// Put user on req.session
passport.deserializeUser((user, done) => {
  done(null, user);
});
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/#/"
  })
);
app.get("/me", getUser);
app.get("/logout", logout);

//creates a cart in sesson
app.use((req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  next();
});

routes(app);
//we can listen to our server
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
