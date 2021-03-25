const { v4: uuid } = require("uuid");
const Video = require("../models/Video");

module.exports = {
  async index(req, res) {
    try {
      const videos = await Video.find();
      return res.status(200).json({ videos });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async store(req, res) {
    const { title, link } = req.body;

    if (!title || !link) {
      return res.status(400).json({ error: "Missing title or link." });
    }

    const video = new Video({
      _id: uuid(),
      title,
      link,
      liked: false,
    });

    try {
      await video.save();

      return res.status(201).json({ message: "Video added succesfully!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    // const { id } = req.params;
    // const { title, link } = req.body;
    // if (!validate(id)) {
    //   return res.status(400).json({ error: "Invalid ID" });
    // }
    // const videoIdx = videos.findIndex((video) => video.id === id);
    // if (videoIdx === -1) {
    //   return res.status(400).json({ error: "Video not found" });
    // }
    // if (!title && !link) {
    //   return res
    //     .status(400)
    //     .json({ error: "You must inform a new title or a new link" });
    // }
    // if (title) videos[videoIdx].title = title;
    // if (link) videos[videoIdx].link = link;
    // return res.status(200).json({ message: "Video updated succesfully!" });
  },

  async delete(req, res) {
    try {
      await res.video.remove();
      return res.status(200).json({ message: "Video removed succesfully!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async updateLike(req, res) {
    const { id } = req.params;

    if (!validate(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const videoIdx = videos.findIndex((video) => video.id === id);

    if (videoIdx === -1) {
      return res.status(400).json({ error: "Video not found" });
    }

    videos[videoIdx].liked = !videos[videoIdx].liked;

    return res.status(200).json({
      message: `Video ${
        videos[videoIdx].liked ? "liked" : "unliked"
      } sucessfully!`,
    });
  },
};
