// seed.js
const mongoose = require('mongoose');
const Hotel = require('/Users/Rhythm Gaur/Downloads/cervello/cervello/models/hotelModel');

mongoose.connect('mongodb://127.0.0.1:27017/cervello')
  .then(async () => {
    console.log("Connected to MongoDB");

    const hotels = [
      {
        _id: "1",
        name: "Ansty Hall",
        location: {
          country: "United Kingdom",
          city: "Coventry",
          address: "Grove Rd, Ansty, Coventry CV7 9HZ, UK"
        },
        starRating: 4,
        priceRange: { from: 350, to: 480 },
        mainImage: "https://www.exclusive.co.uk/media/mx1dw04e/ansty-brand-film-day-1-136.jpg?rxy=0.4121177842231579,0.5771085801201441&width=1210&height=800&quality=70&v=1dae276ba0614f0",
        galleryImages: [
          "https://www.exclusive.co.uk/media/vkafnk4m/201-1.jpg?width=640&height=640&quality=70&v=1daebda8d9374e0",
          "https://www.exclusive.co.uk/media/vkafnk4m/201-1.jpg?width=640&height=640&quality=70&v=1daebda8d9374e0",
          "https://www.exclusive.co.uk/media/syplvx4n/ahh-food-plus-twine-016.jpg?width=640&height=640&quality=70&v=1db1fdd040c9ad0",
          "https://www.exclusive.co.uk/media/5glak4sq/ansty-brand-film-day-1-195.jpg?width=1280&height=640&quality=70&v=1dae666abdd9850",
          "https://www.exclusive.co.uk/media/jh0n1b1x/ahh-rooms-feb-24-65.jpg?width=640&height=880&quality=70&v=1dae6660b837c30",
          "https://www.exclusive.co.uk/media/43gdrion/27-deluxe-double-low-res.jpg?width=640&height=640&quality=70&v=1daecb4aad364e0"
        ],
        rating: 8.7,
        reviewCount: 1120,
        amenities: [
          { name: "Restaurant", icon: "fa-solid fa-utensils" },
          { name: "Bar", icon: "fa-solid fa-glass-martini" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" },
          { icon: "fa-solid fa-bath", name: "Private bathroom" },
          { icon: "fa-solid fa-key", name: "Key card access" }
        ],
        rooms: [
        {
          type: "Classic Double Room",
          image: "https://i.pinimg.com/736x/a8/24/b1/a824b11e9a62d726234e86418ca4f7e3.jpg",
          size: 20,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 430,
          amenities: ["Free Wifi", "Free parking"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Suite",
          image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
          size: 35,
          maxGuests: 4,
          bedType: "2 king beds",
          price: 480,
          amenities: ["Free Wifi", "Free parking"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Deluxe King Room",
          image: "https://i.pinimg.com/736x/70/a2/4e/70a24e1e6ecb51723fd1c320cbf83093.jpg",
          size: 28,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 460,
          amenities: ["Free Wifi", "Private bathroom"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Executive Suite",
          image: "https://i.pinimg.com/736x/fe/34/0e/fe340e8b2e84312be02c67667e348a08.jpg",
          size: 40,
          maxGuests: 3,
          bedType: "1 king bed, 1 sofa bed",
          price: 480,
          amenities: ["Free Wifi", "Free parking", "Key card access"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Wonderful stay",
            user: "travellerUK",
            rating: 9,
            text: "Beautiful historic building, comfortable rooms and lovely gardens.",
            pros: "Spacious, quiet, friendly staff",
            cons: "Limited vegetarian options",
            date: new Date("2024-03-10")
          }
        ],
        policies: [
          "Check-in after 3 PM",
          "No smoking in rooms"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 9 },
          { name: "Amenities", score: 8 },
          { name: "Location", score: 9 }
        ],
        createdAt: new Date()
      },
      {
        _id: "2",
        name: "Northern Light Hut",
        location: {
          country: "Sweden",
          city: "Kiruna",
          address: "Aurora Road 12, Kiruna, Sweden"
        },
        starRating: 5,
        priceRange: { from: 300, to: 350 },
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14618204.jpg?k=a0a8e418ae0d999b1609639550cc59e314ce27321000aa0a51ab890c5d77c172&o=",
        galleryImages: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/210795673.jpg?k=d0c84d39c1fc2715391c21da6c0c3f29e638a7c44b1860ec8247f8e359fe5149&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343027036.jpg?k=477c36035a6b4924c6031cdae4f069f81464e1040aaf37cfa27608121e5b7e54&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/26821190.jpg?k=b6bcefcb6e7c65de597198777816bad64929cc1c7cbc5320c87c052246c9c588&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343027204.jpg?k=bf8ab60c2180cb5dc1143f912a73e2c79de19cad17449105f8f4d19ccd991830&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343027468.jpg?k=222d8f925ef08bec83e5335fffe6ab0dbf444bfdbf286366196cd9fa39a8e657&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343028190.jpg?k=701a4333fc3f1fdba3849f13a12a0bd2abc338cacdaf05d9279266891e509957&o=&hp=1"
        ],
        rating: 9.2,
        reviewCount: 980,

        amenities: [
          { name: "Sauna", icon: "fa-solid fa-hot-tub" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" },
          { name: "Restaurant", icon: "fa-solid fa-utensils" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" },
          { icon: "fa-solid fa-bath", name: "Private bathroom" }
        ],
        rooms: [
        {
          type: "Aurora Cabin",
          image: "https://i.pinimg.com/736x/3e/2b/a1/3e2ba17d677c39c15eca18302a5b902c.jpg",
          size: 18,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 320,
          amenities: ["Free Wifi", "Sauna"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Igloo",
          image: "https://i.pinimg.com/736x/9e/4c/83/9e4c8394885aadb717cd2deeadb7aee5.jpg",
          size: 30,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 350,
          amenities: ["Free Wifi", "Sauna"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Panorama Suite",
          image: "https://i.pinimg.com/736x/9f/82/e5/9f82e5cb84139acdac8e6b6c2c6d2df2.jpg",
          size: 25,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 340,
          amenities: ["Free Wifi", "Sauna", "Private bathroom"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Glass Dome Room",
          image: "https://i.pinimg.com/736x/8d/a4/32/8da4328a4fdd07ce0883cd91049dfb6b.jpg",
          size: 22,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 330,
          amenities: ["Free Wifi", "Sauna"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Magical Northern Lights!",
            user: "auroraHunter",
            rating: 10,
            text: "Perfect spot for watching the aurora. Cozy cabins and great food.",
            pros: "Location, unique experience",
            cons: "Remote, need a car",
            date: new Date("2024-02-20")
          }
        ],
        policies: [
          "Check-in after 4 PM",
          "No smoking in rooms"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 9 },
          { name: "Amenities", score: 9 },
          { name: "Location", score: 10 }
        ],
        createdAt: new Date()
      },
      {
        _id: "3",
        name: "Villa Saarua",
        location: {
          country: "Finland",
          city: "Rovaniemi",
          address: "Saarua 5, Rovaniemi, Finland"
        },
        starRating: 5,
        priceRange: { from: 200, to: 260 },
        mainImage: "https://a0.muscache.com/im/pictures/7809096f-55f0-47c9-b0be-75bbaeec2122.jpg?im_w=720",
        galleryImages: [
          "https://a0.muscache.com/im/pictures/680264a8-d0fd-4c5d-9a73-cf6cb43dd0d3.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/6c4b90a1-0c4f-403c-9a36-c05627aed54c.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-14837629/original/0db6c135-bef8-4820-9d16-b239c4e1892b.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-14837629/original/7c3b332a-ea00-44c1-9f7e-e7431f7fa001.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/82ec6e74-f732-4e11-85b2-1b44806aca3a.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-14837629/original/b0f0b603-ddc0-4627-adb6-bcb69f5f2650.jpeg?im_w=720"
        ],
        rating: 8.9,
        reviewCount: 1790,
        amenities: [
          { name: "Restaurant", icon: "fa-solid fa-utensils" },
          { name: "Fitness Center", icon: "fa-solid fa-dumbbell" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" },
          { icon: "fa-solid fa-bath", name: "Private bathroom" },
          { icon: "fa-solid fa-key", name: "Key card access" }
        ],
        rooms: [
        {
          type: "Double Standard room",
          image: "https://i.pinimg.com/736x/f9/cd/83/f9cd83db4e00175770998abeca0f3299.jpg",
          size: 18,
          maxGuests: 2,
          bedType: "2 separate beds",
          price: 220,
          amenities: ["Free Wifi", "Free parking"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Comfort single room",
          image: "https://i.pinimg.com/736x/db/11/bd/db11bd9bccb5dfbc0e7a244318496097.jpg",
          size: 15,
          maxGuests: 1,
          bedType: "1 king size bed",
          price: 200,
          amenities: ["Free Wifi", "Free parking"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Superior Family Room",
          image: "https://i.pinimg.com/736x/ae/b2/59/aeb259bcabe0a5104b15dbd2518efd45.jpg",
          size: 28,
          maxGuests: 4,
          bedType: "1 king bed, 2 single beds",
          price: 250,
          amenities: ["Free Wifi", "Free parking"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Junior Suite",
          image: "https://i.pinimg.com/736x/a2/1d/4c/a21d4c9ed23547320e14749b1e43dad6.jpg",
          size: 24,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 240,
          amenities: ["Free Wifi", "Free parking"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Amazing Experience!",
            user: "AdventureSeeker92",
            rating: 10,
            text: "Unforgettable experience under the northern lights!",
            pros: "Great location, friendly staff",
            cons: "A bit cold at night",
            date: new Date("2024-01-15")
          }
        ],
        policies: [
          "Check-in after 3 PM",
          "No smoking in rooms"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 10 },
          { name: "Amenities", score: 9 },
          { name: "Location", score: 10 }
        ],
        createdAt: new Date()
      },
      {
        _id: "4",
        name: "Fanhams Hall",
        location: {
          country: "United Kingdom",
          city: "Ware",
          address: "Fanhams Hall Rd, Ware SG12 7PZ, UK"
        },
        starRating: 4,
        priceRange: { from: 320, to: 400 },
        mainImage: "https://www.exclusive.co.uk/media/1izgzzz1/vb5117404_fanhams_hall_3200x2130.jpg?width=1210&height=800&quality=70&v=1daf2eca2a7f1d0",
        galleryImages: [
          "https://www.exclusive.co.uk/media/snifitzo/fanhams-great-hall-set-for-private-dinner.jpg?width=640&height=880&quality=70&v=1da2dd1363c7ec0",
          "https://www.exclusive.co.uk/media/4kmcfmre/fhh-wisteria-1.jpg?width=640&height=640&quality=70&v=1da495919d8b340",
          "https://www.exclusive.co.uk/media/nbflajit/chestnut-2.jpg?width=1280&height=640&quality=70&v=1da2dc92bd55a90",
          "https://www.exclusive.co.uk/media/0xnbbqjs/dsc_6919.jpg?rxy=0.4432721196411179,0.5077444336882866&width=1280&height=640&quality=70&v=1db08eb4c8430b0",
          "https://www.exclusive.co.uk/media/r5zbbvtm/_crs5497.jpg?width=640&height=640&quality=70&v=1da2dd57a636830",
          "https://www.exclusive.co.uk/media/yqmb01si/fanhams-hall-d81_5056.jpg?width=640&height=880&quality=70&v=1da2dca4d610aa0"
        ],
        rating: 8.5,
        reviewCount: 890,
        amenities: [
          { name: "Bar", icon: "fa-solid fa-glass-martini" },
          { name: "Garden", icon: "fa-solid fa-tree" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" },
          { icon: "fa-solid fa-bath", name: "Private bathroom" }
        ],
        rooms: [
        {
          type: "Deluxe Double Room",
          image: "https://i.pinimg.com/736x/f9/cd/83/f9cd83db4e00175770998abeca0f3299.jpg",
          size: 22,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 360,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Classic Twin Room",
          image: "https://i.pinimg.com/736x/f8/b1/eb/f8b1ebb2cc8fbe866b4588a75d4dbe7a.jpg",
          size: 20,
          maxGuests: 2,
          bedType: "2 single beds",
          price: 340,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Executive Suite",
          image: "https://i.pinimg.com/736x/fe/34/0e/fe340e8b2e84312be02c67667e348a08.jpg",
          size: 35,
          maxGuests: 3,
          bedType: "1 king bed, 1 sofa bed",
          price: 400,
          amenities: ["Free Wifi", "Garden view", "Private bathroom"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Room",
          image: "https://i.pinimg.com/736x/26/35/1a/26351a9c597addf403599bac00c2435d.jpg",
          size: 30,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 380,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Lovely gardens",
            user: "natureFan",
            rating: 8,
            text: "Beautiful outdoor spaces and comfortable rooms.",
            pros: "Gardens, peaceful",
            cons: "Rooms a bit dated",
            date: new Date("2024-02-28")
          }
        ],
        policies: [
          "Check-in after 2 PM",
          "No pets allowed"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 8 },
          { name: "Amenities", score: 8 },
          { name: "Location", score: 9 }
        ],
        createdAt: new Date()
      },
      {
        _id: "5",
        name: "Soneva Jani",
        location: {
          country: "Maldives",
          city: "Noonu Atoll",
          address: "Medhufaru Island, Noonu Atoll, Maldives"
        },
        starRating: 5,
        priceRange: { from: 500, to: 650 },
        mainImage: "https://r1imghtlak.mmtcdn.com/ad2f647425c811ecbeb60a58a9feac02.jpg?downsize=540:*",
        galleryImages: [
          "https://r1imghtlak.mmtcdn.com/b05194962ff611ecac950a58a9feac02.jpg?downsize=540:*",
          "https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/201906121510148753-15a0ac94_z.jpg?downsize=540:*",
          "https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/201906121510148753-218904561.jpg?downsize=540:*",
          "https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/201906121510148753-4d624187_z.jpg?downsize=540:*",
          "https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/201906121510148753-2bb84ae8_z.jpg?downsize=540:*",
          "https://r1imghtlak.mmtcdn.com/d59b86fe25c811ec8a220a58a9feac02.jpg?downsize=540:*"
        ],
        rating: 9.7,
        reviewCount: 2100,
        amenities: [
          { name: "Private Beach", icon: "fa-solid fa-umbrella-beach" },
          { name: "Spa", icon: "fa-solid fa-spa" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" },
          { icon: "fa-solid fa-bath", name: "Private bathroom" }
        ],
        rooms: [
        {
          type: "Overwater Villa",
          image: "https://i.pinimg.com/736x/bf/f5/2e/bff52ecc7cd785031f2e0741bd5229f6.jpg",
          size: 80,
          maxGuests: 4,
          bedType: "2 king beds",
          price: 550,
          amenities: ["Private pool", "Ocean view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Water Retreat",
          image: "https://i.pinimg.com/736x/c3/84/fd/c384fd6d00fb18de4eefb82e8196d090.jpg",
          size: 60,
          maxGuests: 3,
          bedType: "1 king bed, 1 sofa bed",
          price: 600,
          amenities: ["Private pool", "Ocean view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Island Villa",
          image: "https://i.pinimg.com/736x/3c/ae/79/3cae79c8a95f5e89fab0d2ef827a88a0.jpg",
          size: 55,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 520,
          amenities: ["Ocean view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Lagoon Suite",
          image: "https://i.pinimg.com/736x/9a/08/68/9a0868e914627cbdd7ce685a06dd1be4.jpg",
          size: 90,
          maxGuests: 5,
          bedType: "2 king beds, 1 sofa bed",
          price: 650,
          amenities: ["Private pool", "Ocean view"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Paradise!",
            user: "beachLover",
            rating: 10,
            text: "Unbelievable luxury, perfect for a honeymoon.",
            pros: "Privacy, service, views",
            cons: "Expensive",
            date: new Date("2024-04-01")
          }
        ],
        policies: [
          "Check-in after 2 PM",
          "No pets allowed"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 10 },
          { name: "Amenities", score: 10 },
          { name: "Location", score: 10 }
        ],
        createdAt: new Date()
      },
      {
        _id: "6",
        name: "Lainston House",
        location: {
          country: "United Kingdom",
          city: "Winchester",
          address: "Sparsholt, Winchester SO21 2LT, UK"
        },
        starRating: 5,
        priceRange: { from: 350, to: 420 },
        mainImage: "https://www.exclusive.co.uk/media/iy1ldt5o/lainston-house-exclusive-hotels-amy-murrell-2017-1.jpg?width=1210&height=800&quality=70&v=1da21f6379da2800",
        galleryImages: [
          "https://www.exclusive.co.uk/media/q0ckxj3o/lainston-food-rooms-15th-feb-72.jpg?width=1280&height=640&quality=70&v=1dadebb4e032310",
          "https://www.exclusive.co.uk/media/hgfnvv3i/lainston-bedrooms-109.jpg?width=1280&height=640&quality=70&v=1da2e9c17d100c0",
          "https://www.exclusive.co.uk/media/z5rdwppp/tom-h-avenue-food-oct-24-99_websize.jpg?width=640&height=640&quality=70&v=1db2a16645e9990",
          "https://www.exclusive.co.uk/media/szclbtd0/lainston-house-stairs.jpg?width=640&height=880&quality=70&v=1da2e8d4a46c7b0",
          "https://www.exclusive.co.uk/media/rnth5aba/lainston-rooms-food-oct-23-218.jpg?rxy=0.6582452441875963,0.6673212248115235&width=1280&height=640&quality=70&v=1da747a8d057c30",
          "https://www.exclusive.co.uk/media/iyydqwzf/lainston-food-rooms-15th-feb-87.jpg?width=640&height=880&quality=70&v=1da6a4355d386d0"
        ],
        rating: 9.1,
        reviewCount: 1350,
        amenities: [
          { name: "Restaurant", icon: "fa-solid fa-utensils" },
          { name: "Tennis Court", icon: "fa-solid fa-table-tennis" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" },
          { icon: "fa-solid fa-bath", name: "Private bathroom" }
        ],
        rooms: [
        {
          type: "Executive Suite",
          image: "https://i.pinimg.com/736x/95/dc/ed/95dced36ebd93d4ce37933994a63fa20.jpg",
          size: 40,
          maxGuests: 6,
          bedType: "2 king beds",
          price: 380,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Classic Double Room",
          image: "https://i.pinimg.com/736x/f8/d7/49/f8d74963191418f5ba85347613bec6f5.jpg",
          size: 22,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 350,
          amenities: ["Free Wifi", "Private bathroom"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Deluxe King Room",
          image: "https://i.pinimg.com/736x/af/a1/1e/afa11e93ea3621b0ce9139aae93d6b15.jpg",
          size: 28,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 400,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Suite",
          image: "https://i.pinimg.com/736x/f8/05/8f/f8058f275d29f245ab2f0c153f7c159f.jpg",
          size: 38,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 420,
          amenities: ["Free Wifi", "Private bathroom"],
          note: "Non-refundable, Breakfast included"
        }
      ],

        reviews: [
          {
            title: "Elegant country house",
            user: "luxuryFan",
            rating: 9,
            text: "Charming estate, great food and service.",
            pros: "Atmosphere, food",
            cons: "A bit far from city",
            date: new Date("2024-03-15")
          }
        ],
        policies: [
          "Check-in after 3 PM",
          "No smoking in rooms"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 9 },
          { name: "Amenities", score: 9 },
          { name: "Location", score: 8 }
        ],
        createdAt: new Date()
      },
      {
        _id: "7",
        name: "Copacabana Palace",
        location: {
          country: "Sweden",
          city: "Stockholm",
          address: "Palace Road 1, Stockholm, Sweden"
        },
        starRating: 4,
        priceRange: { from: 300, to: 340 },
        mainImage: "https://images.getaroom-cdn.com/image/upload/s--FmHUUFdD--/c_limit,e_improve,fl_lossy.immutable_cache,h_460,q_auto:good,w_460/v1730997868/253a538700e2d4513cca6d6772b8b3175d47f503?atc=e7cd1cfa",
        galleryImages: [
          "https://img.belmond.com/f_auto/t_640x798/photos/cop/cop-gst-pool33.jpg",
          "https://img.belmond.com/f_auto/t_640x798/photos/cop/cop-ext23.jpg",
          "https://img.belmond.com/f_auto/t_640x798/photos/cop/cop-lei-activity-art-museum01.jpg",
          "https://img.belmond.com/f_auto/t_640x798/photos/cop/cop-gst-beach-view01.jpg",
          "https://img.belmond.com/f_auto/t_640x360/photos/cop/cop-din-restaurant-pergula21.jpg",
          "https://img.belmond.com/f_auto/t_640x798/photos/cop/cop-acc-suite-penthouse11.jpg"
        ],
        rating: 8.4,
        reviewCount: 760,
        amenities: [
          { name: "Bar", icon: "fa-solid fa-glass-martini" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" },
          { name: "Conference Room", icon: "fa-solid fa-chalkboard" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" }
        ],
        rooms: [
        {
          type: "Standard Room",
          image: "https://i.pinimg.com/736x/9a/76/1b/9a761b45824d60a117dc7a484cc5c93b.jpg",
          size: 18,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 320,
          amenities: ["Free Wifi", "Conference access"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Deluxe Suite",
          image: "https://i.pinimg.com/736x/78/79/a1/7879a1dd9f190ad2bff4fa1602e9e352.jpg",
          size: 28,
          maxGuests: 3,
          bedType: "1 king bed, 1 sofa bed",
          price: 340,
          amenities: ["Free Wifi", "Conference access"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Room",
          image: "https://i.pinimg.com/736x/03/6e/3c/036e3c96cacc6f4d74d28b56acb7e118.jpg",
          size: 25,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 340,
          amenities: ["Free Wifi"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Business Suite",
          image: "https://i.pinimg.com/736x/b8/a6/ef/b8a6ef0bf6ba45e6487995956a27cbec.jpg",
          size: 22,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 330,
          amenities: ["Free Wifi", "Conference access"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Great business hotel",
            user: "bizTraveler",
            rating: 8,
            text: "Good for meetings, central location.",
            pros: "Location, facilities",
            cons: "Small rooms",
            date: new Date("2024-03-01")
          }
        ],
        policies: [
          "Check-in after 2 PM",
          "No pets allowed"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 8 },
          { name: "Amenities", score: 8 },
          { name: "Location", score: 9 }
        ],
        createdAt: new Date()
      },
      {
        _id: "8",
        name: "Rawstone Luxury",
        location: {
          country: "India",
          city: "Udaipur",
          address: "Rawstone Road, Udaipur, Rajasthan, India"
        },
        starRating: 5,
        priceRange: { from: 250, to: 320 },
        mainImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1346147961467201760/original/e2c0cacb-ae59-4310-ac66-dab68f7d949f.jpeg?im_w=720",
        galleryImages: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/645423524.jpg?k=85b734a1ff26181d77bd79da0f48365a1184af7a36151e6d0716a555299c87e0&o=",
          "https://cf.bstatic.com/xdata/images/hotel/max500/645423513.jpg?k=e1a84c678596b1b1f44868b1742f9e91a861a06fd9dc6de754e0d6a303190c22&o=",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/645420403.jpg?k=07bdba693d83d92ba9457d9cbbaab468e26d10bf067185fb5c2034771b49c986&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/645420414.jpg?k=33f3662047ab34292b4714f922cda5a2f8fca11e605f17fed32e7b3965e0b569&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/645423523.jpg?k=3ebf0c6a8fa0431f45c3fef6c8368130eb7ca6ecb4efc26ce9ae75887c7c3b32&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/645423510.jpg?k=fc2edbb1182895d2ad52c0c67e912ae19e4fc02ac711e87d239a60b1cecc313d&o=&hp=1"
        ],
        rating: 9.3,
        reviewCount: 1430,
        amenities: [
          { name: "Pool", icon: "fa-solid fa-swimmer" },
          { name: "Spa", icon: "fa-solid fa-spa" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" }
        ],
        rooms: [
        {
          type: "Luxury Suite",
          image: "https://i.pinimg.com/736x/9d/84/dd/9d84dd1a8d93f9d0b616e025f8da3430.jpg",
          size: 35,
          maxGuests: 6,
          bedType: "2 king beds",
          price: 280,
          amenities: ["Free Wifi", "Pool access"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Royal Room",
          image: "https://i.pinimg.com/736x/94/4f/42/944f4276f6a20c6dec91e7ec5cb2caa5.jpg",
          size: 28,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 260,
          amenities: ["Free Wifi", "Pool access"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Heritage Suite",
          image: "https://i.pinimg.com/736x/a1/37/cd/a137cde798838b55c9f4402f89b722e9.jpg",
          size: 32,
          maxGuests: 3,
          bedType: "1 king bed, 1 sofa bed",
          price: 300,
          amenities: ["Free Wifi", "Pool access"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Deluxe Twin Room",
          image: "https://i.pinimg.com/736x/f2/a6/c9/f2a6c93fdbc84d266b81c07ed8ede48b.jpg",
          size: 24,
          maxGuests: 2,
          bedType: "2 single beds",
          price: 250,
          amenities: ["Free Wifi", "Pool access"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Royal experience",
            user: "heritageFan",
            rating: 10,
            text: "Felt like royalty! Beautiful interiors and excellent service.",
            pros: "Ambience, food",
            cons: "Far from airport",
            date: new Date("2024-03-20")
          }
        ],
        policies: [
          "Check-in after 1 PM",
          "No pets allowed"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 10 },
          { name: "Amenities", score: 9 },
          { name: "Location", score: 8 }
        ],
        createdAt: new Date()
      },
      {
        _id: "9",
        name: "South Lodge",
        location: {
          country: "United Kingdom",
          city: "Horsham",
          address: "Brighton Rd, Lower Beeding, Horsham RH13 6PS, UK"
        },
        starRating: 5,
        priceRange: { from: 420, to: 500 },
        mainImage: "https://www.exclusive.co.uk/media/3hsp14x1/vb5108495_south_lodge_exclusive_hotels_____amy_murrell_2017-53_3200x2130.jpg?width=1210&height=800&quality=70&v=1daf2edbcd0ea70",
        galleryImages: [
          "https://www.exclusive.co.uk/media/v4xpils2/south-lodge-branding-film-120.jpg?width=1280&height=640&quality=70&v=1da2c3c9cae9d00",
          "https://www.exclusive.co.uk/media/rubayju2/slh-bedrooms-199.jpg?width=640&height=640&quality=70&v=1da2459badbb0a0",
          "https://www.exclusive.co.uk/media/zllp34d5/south-lodge-2019-381-fire-cropped-out.jpg?width=640&height=640&quality=70&v=1da1ddceb20fff0",
          "https://www.exclusive.co.uk/media/uuymqong/south-lodge-at-low.jpg?rxy=0.386588086484533,0.49066021585340197&width=640&height=880&quality=70&v=1daa6e6836c9070",
          "https://www.exclusive.co.uk/media/kdbohrzp/slh-rooms-6-23.jpg?width=640&height=640&quality=70&v=1da245c880570a0",
          "https://www.exclusive.co.uk/media/e1eigddc/south-lodge-exclusive-hotels-amy-murrell-2017-65.jpg?width=640&height=880&quality=70&v=1da2c3f627c5c50"
        ],
        rating: 9.0,
        reviewCount: 1200,
        amenities: [
          { name: "Golf Course", icon: "fa-solid fa-golf-ball" },
          { name: "Spa", icon: "fa-solid fa-spa" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" }
        ],
        rooms: [
        {
          type: "Garden Suite",
          image: "https://i.pinimg.com/736x/54/a8/3b/54a83b7e71ea83129a2b629025cb6c9f.jpg",
          size: 28,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 450,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Classic Double Room",
          image: "https://i.pinimg.com/736x/04/fc/eb/04fceb65df1c019e9915df2f681b5989.jpg",
          size: 22,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 420,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Deluxe King Room",
          image: "https://i.pinimg.com/736x/9e/c6/07/9ec60715ca305f348bf856e90a103d0b.jpg",
          size: 32,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 480,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Suite",
          image: "https://i.pinimg.com/736x/af/c2/f8/afc2f88422bb712cf726868393e6e2b3.jpg",
          size: 36,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 500,
          amenities: ["Free Wifi", "Garden view"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Relaxing getaway",
            user: "wellnessSeeker",
            rating: 9,
            text: "Perfect for a relaxing weekend. Loved the spa.",
            pros: "Spa, grounds",
            cons: "Limited dining options",
            date: new Date("2024-04-05")
          }
        ],
        policies: [
          "Check-in after 3 PM",
          "No smoking in rooms"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 9 },
          { name: "Amenities", score: 9 },
          { name: "Location", score: 8 }
        ],
        createdAt: new Date()
      },
      {
        _id: "10",
        name: "Malahini Resorts",
        location: {
          country: "Maldives",
          city: "Male",
          address: "Malahini Kuda Bandos, North Male Atoll, Maldives"
        },
        starRating: 4,
        priceRange: { from: 480, to: 540 },
        mainImage: "https://r1imghtlak.mmtcdn.com/836afe08df6811e99d6c0242ac110007.jpg?downsize=540:*",
        galleryImages: [
          "https://r1imghtlak.mmtcdn.com/14b65544df6711e99ef90242ac110003.jpg?downsize=540:*",
          "https://r1imghtlak.mmtcdn.com/51f9c994df6811e9978f0242ac110007.jpg?downsize=540:*",
          "https://r1imghtlak.mmtcdn.com/851dce74df6811e9adca0242ac110007.jpg?downsize=540:*",
          "https://r1imghtlak.mmtcdn.com/89460550c4e911ee97bb0a58a9feac02.jpg?downsize=540:*",
          "https://r1imghtlak.mmtcdn.com/7d703008c4de11eeb0700a58a9feac02.jpeg?downsize=540:*",
          "https://r1imghtlak.mmtcdn.com/b5e9bbfac11111eeb7280a58a9feac02.jpeg?downsize=540:*"
        ],
        rating: 9.0,
        reviewCount: 1100,
        amenities: [
          { name: "Private Beach", icon: "fa-solid fa-umbrella-beach" },
          { name: "Water Sports", icon: "fa-solid fa-water" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" }
        ],
        rooms: [
        {
          type: "Beach Villa",
          image: "https://i.pinimg.com/736x/9c/fe/05/9cfe053093f32706ad09c5e72eef11ff.jpg",
          size: 25,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 520,
          amenities: ["Private beach", "Free Wifi"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Beach Pool Villa",
          image: "https://i.pinimg.com/736x/be/f6/75/bef6750529b21db7134454a0c9474697.jpg",
          size: 30,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 520,
          amenities: ["Private beach", "Free Wifi"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Ocean Suite",
          image: "https://i.pinimg.com/736x/04/04/10/0404100e914a191178ce94cdaa60d722.jpg",
          size: 40,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 540,
          amenities: ["Private beach", "Free Wifi"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Deluxe Room",
          image: "https://i.pinimg.com/736x/fe/1c/bc/fe1cbcfe645c4a514586900056255e91.jpg",
          size: 20,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 480,
          amenities: ["Private beach", "Free Wifi"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Great for couples",
            user: "honeymooner",
            rating: 9,
            text: "Romantic setting, beautiful beach.",
            pros: "Privacy, water sports",
            cons: "Food is pricey",
            date: new Date("2024-03-25")
          }
        ],
        policies: [
          "Check-in after 2 PM",
          "No pets allowed"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 9 },
          { name: "Amenities", score: 9 },
          { name: "Location", score: 10 }
        ],
        createdAt: new Date()
      },
      {
        _id: "11",
        name: "Sunrise Villa",
        location: {
          country: "India",
          city: "Goa",
          address: "Sunrise Beach Road, Goa, India"
        },
        starRating: 4,
        priceRange: { from: 200, to: 240 },
        mainImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NjU5NTg0MTAwMTQxMzI4MQ%3D%3D/original/6b21381c-9f44-45c1-be46-4e37968595a7.jpeg?im_w=720",
        galleryImages: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-1286595841001413281/original/a44c0c51-c1e6-4769-9c65-0619f6882119.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1286595841001413281/original/4074556e-05dd-46be-87b8-6198056a86f3.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1286595841001413281/original/c4d7d26b-0c65-4b74-ac8a-711159b416d2.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NjU5NTg0MTAwMTQxMzI4MQ%3D%3D/original/9f71e258-6500-475a-9ad0-4cec2be98e3f.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1286595841001413281/original/789342ee-7086-49c3-9109-524d34e846a4.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NjU5NTg0MTAwMTQxMzI4MQ%3D%3D/original/34d818f4-6fb5-432e-87fe-5a5c37d1ae31.jpeg?im_w=720"
        ],
        rating: 8.6,
        reviewCount: 650,
        amenities: [
          { name: "Pool", icon: "fa-solid fa-swimmer" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" },
          { name: "Restaurant", icon: "fa-solid fa-utensils" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" }
        ],
        rooms: [
        {
          type: "Deluxe Room",
          image: "https://i.pinimg.com/736x/96/b3/55/96b35558e25a803cfdf02706b5e9cf7c.jpg",
          size: 18,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 220,
          amenities: ["Free Wifi", "Pool access"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Sea View Suite",
          image: "https://i.pinimg.com/736x/fb/c6/ce/fbc6ce6f1b2ad9a45ebad2dc8ba9afc2.jpg",
          size: 28,
          maxGuests: 3,
          bedType: "1 king bed, 1 sofa bed",
          price: 240,
          amenities: ["Free Wifi", "Pool access"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Garden Room",
          image: "https://i.pinimg.com/736x/7c/5c/d9/7c5cd9e0cb05e5dc483305f288cb7ffb.jpg",
          size: 22,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 210,
          amenities: ["Free Wifi", "Pool access"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Suite",
          image: "https://i.pinimg.com/736x/cf/ae/d2/cfaed213f4ca3a8f9f3a6c6e22540210.jpg",
          size: 32,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 240,
          amenities: ["Free Wifi", "Pool access"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Great value",
            user: "budgetTraveler",
            rating: 8,
            text: "Nice pool and close to the beach.",
            pros: "Location, pool",
            cons: "Basic breakfast",
            date: new Date("2024-03-12")
          }
        ],
        policies: [
          "Check-in after 1 PM",
          "No pets allowed"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 8 },
          { name: "Amenities", score: 8 },
          { name: "Location", score: 9 }
        ],
        createdAt: new Date()
      },
      {
        _id: "12",
        name: "The Manor House",
        location: {
          country: "United Kingdom",
          city: "Castle Combe",
          address: "Near Bath, Castle Combe, SN14 7HR, UK"
        },
        starRating: 5,
        priceRange: { from: 480, to: 550 },
        mainImage: "https://www.exclusive.co.uk/media/loiidklg/vb1011328_the-manor-exclusive-hotels-_amy-murrell-2017-28.jpg?width=1210&height=800&quality=70&v=1da16e54a5e5930",
        galleryImages: [
          "https://www.exclusive.co.uk/media/10unv35t/tmh-may-22-430.jpg?cc=0.13149026441346484,0,0.2018430689198685,0&width=640&height=640&quality=70&v=1da3338d55abe10",
          "https://www.exclusive.co.uk/media/1aylezec/mhh-brand-film-golf-110.jpg?width=1280&height=640&quality=70&v=1da3f1dc5fc51e0",
          "https://www.exclusive.co.uk/media/aiflbnyz/tmh-may-22-117.jpg?cc=0.17647782383984237,0.00725017072615517,0.16652240379503133,0.007250170726155414&width=640&height=640&quality=70&v=1da33354d60e550",
          "https://www.exclusive.co.uk/media/050canns/ludlow-cottage-8.jpg?width=1280&height=640&quality=70&v=1da334b73e87970",
          "https://www.exclusive.co.uk/media/gv3pxffh/afternoon-tea.jpg?width=640&height=640&quality=70&v=1da3d730608e2f0",
          "https://www.exclusive.co.uk/media/o03dn4xd/mhh-brand-film-golf-340.jpg?rxy=0.51415793747038,0.993549310877856&width=640&height=880&quality=70&v=1da71561fc2b0b0"
        ],
        rating: 9.5,
        reviewCount: 1700,
        amenities: [
          { name: "Golf Course", icon: "fa-solid fa-golf-ball" },
          { name: "Fine Dining", icon: "fa-solid fa-utensils" },
          { name: "Free Wi-Fi", icon: "fa-solid fa-wifi" }
        ],
        features: [
          { icon: "fa-solid fa-wifi", name: "Free Wifi" },
          { icon: "fa-solid fa-car", name: "Free parking" }
        ],
        rooms: [
        {
          type: "Luxury Suite",
          image: "https://i.pinimg.com/736x/86/7f/4e/867f4e8448e5662963ccdb1ec3c096e2.jpg",
          size: 30,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 520,
          amenities: ["Golf access", "Free Wifi"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Classic Double Room",
          image: "https://i.pinimg.com/736x/a8/24/b1/a824b11e9a62d726234e86418ca4f7e3.jpg",
          size: 22,
          maxGuests: 2,
          bedType: "1 queen bed",
          price: 500,
          amenities: ["Golf access", "Free Wifi"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Deluxe King Room",
          image: "https://i.pinimg.com/736x/66/cf/62/66cf62f2beab16c6c94383c27edaa707.jpg",
          size: 28,
          maxGuests: 2,
          bedType: "1 king bed",
          price: 540,
          amenities: ["Golf access", "Free Wifi"],
          note: "Non-refundable, Breakfast included"
        },
        {
          type: "Family Suite",
          image: "https://i.pinimg.com/736x/cf/ae/d2/cfaed213f4ca3a8f9f3a6c6e22540210.jpg",
          size: 36,
          maxGuests: 4,
          bedType: "2 queen beds",
          price: 550,
          amenities: ["Golf access", "Free Wifi"],
          note: "Non-refundable, Breakfast included"
        }
      ],
        reviews: [
          {
            title: "Historic charm",
            user: "historyBuff",
            rating: 10,
            text: "Stunning manor, beautiful grounds.",
            pros: "Ambience, history",
            cons: "Expensive",
            date: new Date("2024-04-10")
          }
        ],
        policies: [
          "Check-in after 3 PM",
          "No pets allowed"
        ],
        ratingCategories: [
          { name: "Cleanliness", score: 10 },
          { name: "Amenities", score: 10 },
          { name: "Location", score: 10 }
        ],
        createdAt: new Date()
      }
    ];

    await Hotel.insertMany(hotels);
    console.log("Hotels saved!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log("Error connecting to MongoDB: ", err);
  });
