const express = require("express");
const routes = express.Router();

const VideoController = require("./VideoController");

routes.get("/videos", VideoController.list);

routes.post("/videos", VideoController.create);

routes.put("/videos/:id", VideoController.update);

module.exports = routes;
