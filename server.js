// import all node mods required 
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// create express server and set up PORT
const app = express();
const PORT = process.env.PORT || 3000;

// set up middleware to handle POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// use API and HTML routes 
app.use(apiRoutes);
app.use(htmlRoutes);

// start app
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});

