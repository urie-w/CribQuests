const router = require('express').Router();
const listingRoutes = require('./listing-routes');
router.use('/listings', listingRoutes);
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);

//const apiRoutes = require('./controllers');

//router.use('/api', apiRoutes);

module.exports = router;