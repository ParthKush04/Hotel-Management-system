const express = require("express");
const app = express();

const port = process.env.PORT || 6749;
app.listen(port,()=> console.log("hi"));