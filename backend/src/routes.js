const express = require("express");
const routes = express.Router();

const VideoController = require("./VideoController");

routes.get("/videos", VideoController.list);

routes.post("/videos", VideoController.create);

module.exports = routes;
