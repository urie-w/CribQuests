const { faker } = require('@faker-js/faker');
const { Listing } = require('../models');

const listingData = [];

for (let i = 0; i < 10; i++) {
  listingData.push({
    location: faker.address.streetAddress(),
    number_of_rooms: faker.datatype.number({ min: 1, max: 5 }),
    number_of_bathrooms: faker.datatype.number({ min: 1, max: 4 }),
    square_footage: faker.datatype.number({ min: 500, max: 5000 }),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    price: faker.datatype.number({ min: 50000, max: 1000000 }),
  });
}

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;


