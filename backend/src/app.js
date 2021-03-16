const express = require("express");

const app = express();

app.use(express.json());

// * Start the videos array
const videos = [];

// * List all the videos
app.get("/videos", (req, res) => {
  res.json(videos);
});

app.post("/videos", (req, res) => {
  const { title, link, likes } = req.body;

  if (!title || !link) {
    return res.status(400).json({ error: "Missing title or link." });
  }

  video = {
    id: String(Math.floor(Math.random() * 1000)),
    title,
    link,
    likes: likes || 0,
  };

  videos.push(video);

  return res.status(200).json(video);
});

module.exports = app;
