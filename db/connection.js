var mysql = require("mysql");

var connection;

// Sets up db to connect to JAWSDB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "nnpho7hfrcazqo0v",
    password: "u01pvkcbxcx2sa4t",
    database: "u93evlx9bhysgnq6"
  });
}

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

// Export the connection 
module.exports = connection;
