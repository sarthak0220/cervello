const mongoose = require('mongoose');
const Restaurant = require('/Users/Rhythm Gaur/Downloads/cervello/cervello/models/restaurantModel');

const sampleRestaurants = [
    {
name: 'Ristorante L’Olivo',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/lolivo-at-al-mahara/baa_lolivo-at-al-mahara_hotel-fnb-listing-card.jpg?revision=bfb290a2-b054-4795-afce-ba8f0ab155c3',
description: 'A rendition of Capri\'s two Michelin-starred restaurant by Chef Andrea Migliaccio.',
location: 'Burj Al Arab Jumeirah Jumeirah Road Umm Suqeim 3, Dubai'
},
{
name: 'Skyview Lounge',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/skyview-lounge/baa_skyview-lounge_hotel-fnb-listing-card.jpeg?revision=2186d27e-4e03-468d-a6b6-c4ec26dce70a',
description: 'Hypnotic views of the cityscape inspire exquisite mixology in an inviting atmosphere.',
location: '27th Floor, Burj Al Arab, Dubai'
},
{
name: 'Al Iwan',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/al-iwan/baa_al-iwan_hotel-fnb-listing-card.jpeg?revision=518bd1e1-d88c-4124-a741-fdeb0de80ee0',
description: 'An ode to time-honoured Arabic delicacies in opulent surroundings.',
location: 'Ground Floor, Burj Al Arab, Dubai'
},
{
name: 'SAL',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/sal/baa_sal_hotel-fnb-listing-card.jpg',
description: 'Unwind at our elegant beach club, seemingly floating over the glittering Gulf.',
location: 'Jumeirah Burj Al Arab, Dubai'
},
{
name: 'Al Muntaha',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/al-muntaha/baa_al-muntaha_hotel-fnb-listing-card.jpg',
description: 'Michelin-starred French & Italian cuisine by Chef Saverio Sbaragli.',
location: '27th Floor, Burj Al Arab, Dubai'
},
{
name: 'Sahn Eddar',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/sahn-eddar/baa_sahn-eddar_hotel-fnb-listing-card/baa_sahn-eddar_hotel-fnb-listing-card__portrait.jpg',
description: 'Views of Dubai\'s coastline set the stage for an elegant afternoon tea.',
location: 'Ground Floor, Burj Al Arab, Dubai'
},
{
name: 'Bab Al Yam',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/bab-al-yam/baa_bab-al-yam_hotel-fnb-listing-card.jpeg',
description: 'A serene open kitchen serving delicious Middle Eastern and European fusion.',
location: 'Terrace Level, Burj Al Arab, Dubai'
},
{
name: 'Glit',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/gilt/baa_gilt_hotel-fnb-listing-card.jpeg',
description: 'Ascend for artful mixology and small plates set to shimmering views of Dubai.',
location: 'Gold On 27, Burj Al Arab, Dubai'
},
{
name: 'Les Desserts',
image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-burj-al-arab/new-website-content/restaurant-page/les-desserts/baa_les-desserts_hotel-fnb-listing-card.jpg',
description: 'A world of exquisite pastries crafted by Chef Tom Coll.',
location: 'Lobby Lounge, Burj Al Arab, Dubai'
}
];

async function seedDB() {
try {
await mongoose.connect('mongodb://localhost:27017/cervello'); // Adjust DB name/path if needed
await Restaurant.deleteMany({});
await Restaurant.insertMany(sampleRestaurants);
console.log('Restaurant data seeded successfully');
mongoose.disconnect();
} catch (err) {
console.error('Error seeding restaurant data:', err);
}
}

seedDB();