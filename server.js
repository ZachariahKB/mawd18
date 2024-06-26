const express = require ("express");
const db = require ("./config/connection.js");




const PORT = process.env.PORT || 3001; 
const app = express();


app.use(express.urlencoded ({extended: true}))
app.use(express.json())

db.once("open", () => {
app.listen(PORT, () => {
    console.log (`API server is slaying on PORT ${PORT}!`);
});
    });