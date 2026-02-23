const cn = require('../database');

exports.getCustomerOrders = (req, res) => {
    cn.query(`SELECT * FROM orders
        JOIN orders_items ON orders.orders_id=orders_items.orders_id
        JOIN products ON products.product_id=orders_items.product_id
        WHERE customers_id = ?`,
        req.params.id,
        (err, data) => {
            res.send(data);
        }
    );
};