const express = require('express');
const  router = express.Router();
const db = require('../db.js')
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../services/users.services.js')

router.get('/', async (req,res) => {
    const allUsers = await db.getAllUsers();
    res.json(allUsers);
});

router.get("/:id", async (req, res) => {
    const allUsers = await getUserById(req.params.id);
    res.send(allUsers);
  });
  
  router.post("/", async (req, res) => {
    const allUsers = await createUser(req.body);
    res.send(allUsers);
  });
  
  router.put("/:id", async (req, res) => {
    const allUsers = await updateUser(req.params.id, req.body);
    res.send(allUsers);
  });
  
  router.delete("/:id", async (req, res) => {
    const allUsers = await deleteUser(req.params.id);
    res.send(allUsers);
  });

module.exports = router;