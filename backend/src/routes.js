const express = require("express");
const routes = express.Router();

const VideoController = require("./controllers/VideoController");

routes.get("/videos", VideoController.index);

routes.post("/videos", VideoController.store);

routes.put("/videos/:id", VideoController.update);

routes.delete("/videos/:id", VideoController.delete);

routes.patch("/videos/:id", VideoController.updateLike);

module.exports = routes;
