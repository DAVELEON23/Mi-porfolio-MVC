const express = require ("express");
const router = express.Router();

const path = require("path");

const rutaHome= require("../routers/main.js")

const homeController = require ("../controllers/mainControllers.js")

router.get("/",homeController.home);



module.exports = router;