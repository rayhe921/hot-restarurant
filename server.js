// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// table
// =============================================================
var tableCount = [];
// var tableCount = [
//   {
//     name: "ray",
//     phoneNumber: "098-098-2093",
//     email: "ray@ray.com",
//     id: "1234"
//   },
//   {
//     name: "dima",
//     phoneNumber: "098-098-2093",
//     email: "dima@dima.com",
//     id: "1254"
//   },
//   {
//     name: "gloria",
//     phoneNumber: "098-098-2093",
//     email: "ray@asdfy.com",
//     id: "asdf"
//   },
//   {
//     name: "elsa",
//     phoneNumber: "098-098-2093",
//     email: "elsa@ray.com",
//     id: "aelrkgj"
//   }
// ];

// waitlist
// =============================================================
var waitCount = [
  {
    name: "ra2",
    phoneNumber: "098-098-2093",
    email: "ray@ray.com",
    id: "1234"
  },
  {
    name: "dima2",
    phoneNumber: "098-098-2093",
    email: "dima@dima.com",
    id: "1254"
  },
  {
    name: "gloria2",
    phoneNumber: "098-098-2093",
    email: "ray@asdfy.com",
    id: "asdf"
  },
  {
    name: "elsa2",
    phoneNumber: "098-098-2093",
    email: "elsa@ray.com",
    id: "aelrkgj"
  }
];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "public/table.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "public/reservation.html"));
  });

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(tableCount);
});


// Create New Characters - takes in JSON input
app.post("/api/waitlist", function(req, res) {
 
  var newReservation = req.body;
  if(tableCount.length >= 5){
    waitCount.push(newReservation);
    console.log("over");
  }
  else{
    tableCount.push(newReservation);
    console.log("less");
  }

console.log(tableCount);
//console.log("wait: " + waitCount);
res.json(tableCount);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
