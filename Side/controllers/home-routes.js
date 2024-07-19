const router = require('express').Router();
const { User, Listing } = require('../models');

// Login route
router.get('/login', (req, res) => {
  res.render('login', { logged_in: req.session.logged_in });
});

// Example route to render homepage with listings
router.get('/', async (req, res) => {
  try {
    const listingsData = await Listing.findAll();
    const listings = listingsData.map((listing) => listing.get({ plain: true }));

    res.render('homepage', {
      listings,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;


