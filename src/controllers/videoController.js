export const trending = (req, res) => {
  const videos = [
    {
      title: "비디오",
      rating: 1,
      comments: 2,
      createdAt: "7 minutes ago",
      views: 11,
      id: 1,
    },
    {
      title: "삐디오",
      rating: 2,
      comments: 1,
      createdAt: "8 minutes ago",
      views: 11,
      id: 1,
    },
    {
      title: "비띠오",
      rating: 3,
      comments: 0,
      createdAt: "9 minutes ago",
      views: 11,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
