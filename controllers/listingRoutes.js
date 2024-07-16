const router = require('express').Router();
const { User } = require('../models');

router.get('/listings', async (req, res) => {
    try {
        //Get all listing searches
        const listingSearches = await User.find({}).select('-password');
    } catch (err) {
        res.status(500).json(err);
      }
    });