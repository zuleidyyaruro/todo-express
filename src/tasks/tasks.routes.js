const router = require('express').Router();
const {allUsers} = require('./tasks.services');

router.get('/tasks', allUsers);

module.exports = {router}