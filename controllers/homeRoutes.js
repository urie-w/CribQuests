const router = require('express').Router();
const { User, Cards, Listing } = require('../models');

// Login route
router.get('/login', (req, res) => {
  res.render('login', { logged_in: req.session.logged_in });
});

router.get('/', async (req, res) => {
  try {
    $(document).ready(function () {
      let cribsTemplate = $("#cribs-container").html();
      let compiledCribsTemplate = Handlebars.compile(cribsTemplate);
     $(".cribs-list").html(compiledCribsTemplate(cribsCard.home));
    });

 //example: res.render("login") = file name login.handlebars
 //anything inside the {} is data you want to extract
    res.render("login")
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/card", async (req, res) => {
  const cardData = await Cards.findAll();
  const cards = cardData.map(card => card.get({ plain: true }));
  res.render("card", { cards });
})

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
