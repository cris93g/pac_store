module.exports = {
  /******ALL ITEMS ******/
  getAllItems(req, res) {
    const db = req.app.get("db");
    db.getAllItems()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  /******MENS ITEMS ******/
  getMensHoodies(req, res) {
    const db = req.app.get("db");
    db.getMensHoodies()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getMensJoggers(req, res) {
    const db = req.app.get("db");
    db.getAllMensJoggers()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getMensShirts(req, res) {
    const db = req.app.get("db");
    db.getAllMensShirts()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getMensSweaters(req, res) {
    const db = req.app.get("db");
    db.getAllMensSweaters()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getMensSwim(req, res) {
    const db = req.app.get("db");
    db.getAllMensSwim()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getMensItems(req, res) {
    const db = req.app.get("db");
    db.getMensItems()
      .then(results => res.status(200).json(rsults))
      .catch(console.log);
  },
  /******WOMANS ITEMS ******/
  getWomansPants(req, res) {
    const db = req.app.get("db");
    db.getAllWomansPants()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getWomansShorts(req, res) {
    const db = req.app
      .get("db")
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getWomansTops(req, res) {
    const db = req.app.get("db");
    getAllWomansTop()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getDress(req, res) {
    const db = req.app.get("db");
    db.getDress()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getWomansItems(req, res) {
    const db = req.app.get("db");
    db.getWomansItems()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  getWomansSwim(req, res) {
    const db = req.app.get("db");
    db.getWomansSwm()
      .then(results => res.status(200).json(results))
      .catch(console.log);
  },
  /******  CART  ******/
  addToCart(req, res) {
    req.session.cart.push(req.body);
    res.status(200).send(req.session.cart);
  },

  getCart(req, res) {
    res.status(200).send(req.session.cart);
  }
};
