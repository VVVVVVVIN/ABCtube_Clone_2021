let videos = [
  {
    title: "비디오",
    rating: 1,
    comments: 2,
    createdAt: "7 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "삐디오",
    rating: 2,
    comments: 1,
    createdAt: "8 minutes ago",
    views: 11,
    id: 2,
  },
  {
    title: "비띠오",
    rating: 3,
    comments: 0,
    createdAt: "9 minutes ago",
    views: 11,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
