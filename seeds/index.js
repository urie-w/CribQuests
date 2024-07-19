const sequelize = require('../config/connection');
const seedUsers = require('../Side/seeds/userData');
const seedListings = require('../Side/seeds/listingData');

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

