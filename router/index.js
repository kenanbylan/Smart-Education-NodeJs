const express = require("express");

const pageControllers = require("../controllers/pageControllers");

const router = express.Router();

router.router("/").get(pageControllers.getIndexPage);
router.router("/about").get(pageControllers.getAboutPage);
