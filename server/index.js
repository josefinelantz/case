// Require express
const express = require("express");

// Declare app variable and assign an instance of express to it
const app = express();

// Define route handler
app.post("/validate", (req, res) => {

});

app.listen(4000, () => {
	console.log("Listening on 4000");
});