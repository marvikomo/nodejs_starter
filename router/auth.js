const express = require("express")
const router = express.Router()
const AuthController = require("../controllers/AuthController")

router.get('/admin/login', AuthController.login);


module.exports = router