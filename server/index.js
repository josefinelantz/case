// Require express
const express = require("express");
// Require body-parser to parse body in req
const bodyParser = require("body-parser");
// Require validate function
const iban = require("./iban");
// Declare app variable and assign an instance of express to it
const app = express();
// Tell express to use body-parser
app.use(bodyParser.json());

/* 
	Route handler - validate IBAN number
	Body Params - { IBAN : string }
	Returns - bool
*/ 
app.post("/iban", (req, res) => {
	// Get access to the posted IBAN
	const { IBAN } = req.body;
	const check = iban.validate(IBAN);

	res.send(check === 1);
});

	
app.listen(4000, () => {
	console.log("Listening on 4000");
});