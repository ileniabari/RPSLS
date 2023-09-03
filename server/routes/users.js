var express = require('express');
var router = express.Router();

const UserRepository = require('../data/UserRepository')

/* GET /users */
router.get('/', function (req, res, next) {
    const users = UserRepository.getUsers()
    res.send(users)
});



module.exports = router;