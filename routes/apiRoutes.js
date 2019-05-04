var router = require("express").Router();
var connection = require("../db/connection");

// get all the notes stored in the database and display as JSON
router.get("/api/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, dbNotes) {
    if(err){
      return res.json(err);
    }
    res.json(dbNotes);
  });
});

module.exports = router;