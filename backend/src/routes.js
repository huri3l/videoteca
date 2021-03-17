const express = require("express");
const routes = express.Router();

const VideoController = require("./VideoController");

routes.get("/videos", VideoController.list);

routes.post("/videos", VideoController.create);

routes.put("/videos/:id", VideoController.update);

routes.delete("/videos/:id", VideoController.delete);

routes.patch("/videos/:id", VideoController.updateLikes);

module.exports = routes;
