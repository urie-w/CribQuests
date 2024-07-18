const sequelize = require('../config/connection');
const { User, Cards } = require('../models');

const userData = require('./userData.json');
const cardData = require("./cardData.json")
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Cards.bulkCreate(cardData)

  process.exit(0);
};

seedDatabase();
