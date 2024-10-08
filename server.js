const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Use "views" without "./"

app.get("/", (req, res) => {
  res.render("index"); // Render the index.ejs file
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// module.exports = app; // Uncomment if you want to export the app for testing
