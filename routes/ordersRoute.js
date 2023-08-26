const express = require('express');
const  router = express.Router();
const db = require('../db.js');

router.get('/', async (req,res) => {
    const allOrders = await db.getAllOrders();
    res.json(allOrders);
});

router.get("/:id", async (req, res) => {
  const allOrders = await getOrderById(req.params.id);
  res.send(allOrders);
});

router.post("/", async (req, res) => {
  const allOrders = await createOrder(req.body);
  res.send(allOrders);
});

router.put("/:id", async (req, res) => {
  const allOrders = await updateOrder(req.params.id, req.body);
  res.send(allOrders);
});

router.delete("/:id", async (req, res) => {
  const allOrders = await deleteOrder(req.params.id);
  res.send(allOrders);
});

module.exports = router;