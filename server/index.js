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
