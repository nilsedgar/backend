const express = require("express");
const app = express();
const PORT = 3007;
const db = require("mysql2");
const cn = db.createConnection({
    host: "localhost",
    user: "root",
    password: "nisse",
    database: "filmbibliotek"
});


app.get("/hello", (req, res) => {
    cn.query("SELECT * FROM filmer", (err, data) => {res.send(data)});
})

app.listen(PORT);