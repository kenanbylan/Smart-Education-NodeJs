exports.getIndexPage = (req, res, next) => {
  res.status(200).render("index", {
    page_name: "index",
  });
};

exports.getAboutPage = (req, res, next) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};
