const express = require("express");
const app = express();
const PORT = 3007;
const db = require("mysql2");
const cn = db.createConnection({
    host: "localhost",
    user: "root",
    password: "nisse",
    database: "webshoppen"
});

app.use(express.json())

app.get("/hello", (req, res) => {
    cn.query("SELECT * FROM products", (err, data) => {res.send(data)});
})



app.post("/admin/create-product", (req, res) =>  {
    cn.query("INSERT INTO products (name, price, stock_quantity, categories_id) VALUES (?, ?, ?, ?);",
        [req.body.name, req.body.price, req.body.stock_quantity, req.body.categories_id]
    )
    res.send("Klart!")
})

app.listen(PORT);