const sequelize = require('../config/connection');
const { User, Cards } = require('../models');

// Generates random price
function getRandomPrice() {
  const min = 30000;
  const max = 100000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Create random amount of bathrooms
function getRandomBathrooms() {
  const min = 1;
  const max = 4;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create random amount of bedrooms
function getRandomBedrooms() {
  const min = 3;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// //Generate random data
function getRandomData() {
  const randomPrice = getRandomPrice();
  const randomRooms = getRandomBedrooms();
  const randomBathrooms = getRandomBathrooms();
  const randomState = getRandomStateAbbreviation();

  return {
      price: randomPrice,
      rooms: randomRooms,
      bathrooms: randomBathrooms,
      state: randomState
  };
}

// get random state
function getRandomStateAbbreviation() {
    const stateAbbreviations = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    const randomState = Math.floor(Math.random() * stateAbbreviations.length);
    return stateAbbreviations[randomState];
}


const userData = require('./userData.json');
const cardData = require("./cardData.json");
cardData.cards.forEach((card) => {
  card.price = getRandomPrice();
  card.bedroom = getRandomBedrooms();
  card.bathroom = getRandomBathrooms();
  card.state = getRandomStateAbbreviation();
});

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Cards.bulkCreate(cardData.cards)

  process.exit(0);
};

seedDatabase();
