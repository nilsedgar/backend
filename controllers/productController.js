const cn = require('../database');

exports.getAll = (req, res) => {
    cn.query("SELECT * FROM products", (err, data) => {
        res.send(data);
    });
};

exports.getById = (req, res) => {
    cn.query("SELECT * FROM products WHERE product_id = ?", req.params.id, (err, data) => {
        res.send(data);
    });
};

exports.create = (req, res) => {
    cn.query("INSERT INTO products (name, price, stock_quantity, categories_id) VALUES (?, ?, ?, ?)",
        [req.body.name, req.body.price, req.body.stock_quantity, req.body.categories_id],
        (err, result) => {
            res.send("Klart!");
        }
    );
};