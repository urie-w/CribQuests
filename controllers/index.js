const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes);

//const apiRoutes = require('./controllers');

//router.use('/api', apiRoutes);

module.exports = router;