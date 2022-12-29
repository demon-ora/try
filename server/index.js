const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;
app.listen(PORT);
