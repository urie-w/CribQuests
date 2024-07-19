const router = require('express').Router();
const { Listing } = require('../../models');
const { Op } = require('sequelize');

// Create a new listing
router.post('/', async (req, res) => {
  try {
    const newListing = await Listing.create(req.body);
    res.status(200).json(newListing);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all listings with optional filters
router.get('/', async (req, res) => {
  try {
    const { city, state, min_rooms, max_rooms, min_bathrooms, max_bathrooms, min_price, max_price } = req.query;
    const filters = {};

    if (city) filters.city = city;
    if (state) filters.state = state;
    if (min_rooms) filters.number_of_rooms = { [Op.gte]: min_rooms };
    if (max_rooms) filters.number_of_rooms = { [Op.lte]: max_rooms };
    if (min_bathrooms) filters.number_of_bathrooms = { [Op.gte]: min_bathrooms };
    if (max_bathrooms) filters.number_of_bathrooms = { [Op.lte]: max_bathrooms };
    if (min_price) filters.price = { [Op.gte]: min_price };
    if (max_price) filters.price = { [Op.lte]: max_price };

    const listings = await Listing.findAll({ where: filters });
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single listing by ID
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByPk(req.params.id);
    if (!listing) {
      res.status(404).json({ message: 'No listing found with this id!' });
      return;
    }
    res.status(200).json(listing);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a listing by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedListing = await Listing.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedListing[0]) {
      res.status(404).json({ message: 'No listing found with this id!' });
      return;
    }

    res.status(200).json(updatedListing);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a listing by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedListing = await Listing.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedListing) {
      res.status(404).json({ message: 'No listing found with this id!' });
      return;
    }

    res.status(200).json(deletedListing);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

