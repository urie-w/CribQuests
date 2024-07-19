const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedListings = require('./listingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced!');

  await seedUsers();
  console.log('Users seeded!');

  await seedListings();
  console.log('Listings seeded!');

  process.exit(0);
};

seedAll();

