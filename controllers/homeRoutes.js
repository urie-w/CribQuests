const router = require('express').Router();
const { User, Cards, Listing } = require('../models');

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.get("/", async (req, res) => {
  const cardData = await Cards.findAll();
  const cards = cardData.map(card => card.get({ plain: true }));
  res.render("home-page", { cards, loggedIn:req.session.loggedIn});
})
router.get("/card/:id", async (req, res) => {
  try {
    const cardData = await Cards.findByPk(req.params.id);
    const card = cardData.get({ plain: true });
    res.render("card", { card });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
