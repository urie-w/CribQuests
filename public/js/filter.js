const fs = require('fs');
const path = require('path');

function searchNumbers()  {
//sort number of bathroom and rooms
    const rooms = numbers.filter(num => num < 10);
    rooms = 10;
}

//generate random data
function randomData() {
    const randomPrice = getRandomPrice();
    const randomRooms = getRandomRooms();
    const randomBathrooms = getRandomBathrooms();
    const randomState = getRandomStateAbbreviation();

    return {
        price: randomPrice,
        rooms: randomRooms,
        bathrooms: randomBathrooms,
        state: randomState
    };
}


function getRandomPrice() {
    const min = 30000;
    const max = 100000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//search state
    function searchByLocation() {
    const lowCase = query.toLowerCase().trim();
//search
        const result = data.filter(item => item.location.toLowerCase().includes(lowCase));
        result = data;
}


let data=[ 
    {
        price: Math.floor(Math.random() * 100000),
        rooms: Math.floor(Math.random() * 10),
        bathrooms: Math.floor(Math.random() * 4),
        state: getRandomStateAbbreviation(),
        bedrooms: Math.floor(Math.random() * 10),
        cost: getRandomPrice(),
    },

];
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

// get random price
const getRandomPrice = () => {
    const min = 30000;
    const max = 100000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get random rooms
const getRandomRooms = () => {
    const min = 2;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// get random bathrooms
const getRandomBathrooms = () => {
    const min = 1;
    const max = 4;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// console log new ids, state, and price
const randomRooms = getRandomRooms();
const randomBathrooms = getRandomBathrooms();
const randomPrice = getRandomPrice();
const randomState = getRandomStateAbbreviation();
console.log(`Bedrooms:${randomRooms}, Bathrooms: ${randomBathrooms}, State: ${randomState}, Price:$${randomPrice}`);

let cribsCard = {
    "home": {
        "rooms": randomRooms,
        "bathrooms": randomBathrooms,
        "state": randomState,
        "price": randomPrice
    }
}

const fs = require('fs');
const path = require('path');

// links to json file
const cardData = path.join(__dirname, 'cardData.json');

fs.readFile(cardData, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let jsonData = JSON.parse(data);

    //add the filters to the json data
    jsonData.rooms = `${randomRooms}`;
    jsonData.bathrooms = `${randomBathrooms}`;
    jsonData.state = `${randomState}`;
    jsonData.price = `${randomPrice}`;


    let updatedData = {
        fs.writeFile(cardData, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('File updated successfully.');
            }
        })
    }
});


