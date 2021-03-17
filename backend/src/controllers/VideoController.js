const { v4: uuid, validate } = require("uuid");

const videos = [];

module.exports = {
  index(req, res) {
    if (videos.length === 0) {
      return res.status(400).json({ warning: "No videos to show" });
    }

    return res.status(200).json(videos);
  },

  store(req, res) {
    const { title, link } = req.body;

    if (!title || !link) {
      return res.status(400).json({ error: "Missing title or link." });
    }

    video = {
      id: uuid(),
      title,
      link,
      likes: 0,
    };

    videos.push(video);

    return res.status(200).json({ message: "Video added succesfully!" });
  },

  update(req, res) {
    const { id } = req.params;
    const { title, link } = req.body;

    if (!validate(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const videoIdx = videos.findIndex((video) => video.id === id);

    if (videoIdx === -1) {
      return res.status(400).json({ error: "Video not found" });
    }

    if (!title || !link) {
      return res
        .status(400)
        .json({ error: "You must inform a new title and a new link" });
    }

    const updatedVideo = {
      id,
      title,
      link,
    };

    videos[videoIdx] = updatedVideo;

    return res.status(200).json({ message: "Video updated succesfully!" });
  },

  delete(req, res) {
    const { id } = req.params;

    if (!validate(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const videoIdx = videos.findIndex((video) => video.id === id);

    if (videoIdx === -1) {
      return res.status(400).json({ error: "Video not found" });
    }

    videos.splice(videoIdx, 1);

    return res.status(200).json({ message: "Video removed succesfully!" });
  },

  updateLikes(req, res) {
    const { id } = req.params;

    if (!validate(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const videoIdx = videos.findIndex((video) => video.id === id);

    if (videoIdx === -1) {
      return res.status(400).json({ error: "Video not found" });
    }

    videos[videoIdx].likes++;

    return res.status(200).json({ message: "Video liked sucessfully!" });
  },
};
