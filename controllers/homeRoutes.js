const router = require('express').Router();
const { User, Cards, Listing } = require('../models');

// Login route
router.get('/login', (req, res) => {
  res.render('login', { logged_in: req.session.logged_in });
});

// router.get('/', async (req, res) => {
//   try {
//     const listingsData = await Listing.findAll();
//     const listings = listingsData.map((listing) => listing.get({ plain: true }));

//     res.render('card', {
//       listings,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  const cardData = await Cards.findAll();
  const cards = cardData.map(card => card.get({ plain: true }));
  res.render("card", { cards });
})

//     res.render("login")
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/login", async (req, res) => {
//   res.render("login");
// });

module.exports = router;
