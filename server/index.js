// Require express
const express = require("express");
// Require body-parser to parse body in req
const bodyParser = require("body-parser");
// Require cors to allow requests from other domains
const cors = require("cors");
// Require validate function
let validate = require("./iban");
// Declare app variable and assign an instance of express to it
const app = express();
// Tell express to use body-parser
app.use(bodyParser.json());
// Wire up cors to the express app
app.use(cors());

/* 
	Route handler - validate IBAN number
	Body Params - { IBAN : string }
	Returns - bool
*/ 
app.post("/validate", (req, res) => {
	// Get access to the posted IBAN
	const { IBAN } = req.body;
	
}

	
app.listen(4000, () => {
	console.log("Listening on 4000");
});