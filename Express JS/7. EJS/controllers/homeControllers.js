const homeController = (req, res) => {
  const data = {
    name: "Ritik",
    age: 20,
    email: "ritik@gmail.com",
  };
  res.render("index", data);
};

export default homeController;
