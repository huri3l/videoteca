const videos = [];

module.exports = {
  list(req, res) {
    if (videos.length === 0) {
      return res.status(400).json({ warning: "No videos to show" });
    }

    return res.status(200).json(videos);
  },

  create(req, res) {
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
  },
};
