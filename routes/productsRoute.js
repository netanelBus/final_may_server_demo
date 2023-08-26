const express = require('express');
const  router = express.Router();
const db = require('../db.js')

router.get('/', async (req,res) => {
    const allProducts = await db.getAllProducts();
    res.json(allProducts);
});

router.get("/:id", async (req, res) => {
    const allProducts = await getProductById(req.params.id);
    res.send(allProducts);
  });
  
  router.post("/", async (req, res) => {
    const allProducts = await createProduct(req.body);
    res.send(allProducts);
  });
  
  router.put("/:id", async (req, res) => {
    const allProducts = await updateProduct(req.params.id, req.body);
    res.send(allProducts);
  });
  
  router.delete("/:id", async (req, res) => {
    const allProducts = await deleteProduct(req.params.id);
    res.send(allProducts);
  });

module.exports = router;
