//responsive navigation menu
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuBtn.classList.toggle('active');  // Ensure the button toggles its active state
});



function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById('people-dropdown').classList.toggle("show");
}

window.addEventListener('click', function () {
    document.getElementById('people-dropdown').classList.remove("show");
});

document.getElementById('people-dropdown').addEventListener('click', function (e) {
    e.stopPropagation();
});

function updateGuestDisplay() {
    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);
    let guestText = '';

    if (adults > 0) guestText += `${adults} Adult${adults > 1 ? 's' : ''}`;
    if (children > 0) guestText += (guestText ? ', ' : '') + `${children} Child${children > 1 ? 'ren' : ''}`;

    document.getElementById('guests-display').textContent = guestText || 'Select Guests';
}

function setDefaultDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const format = d => d.toISOString().split('T')[0];
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    checkinInput.min = format(today);
    checkoutInput.min = format(tomorrow);

    checkinInput.value = format(today);
    checkoutInput.value = format(tomorrow);

    checkinInput.addEventListener('change', () => {
        const selected = new Date(checkinInput.value);
        selected.setDate(selected.getDate() + 1);
        const minCheckout = format(selected);
        checkoutInput.min = minCheckout;

        if (checkoutInput.value < minCheckout) {
            checkoutInput.value = minCheckout;
        }
    });
}

const hotels = [
    {
        location: "United Kingdom",
        image: "https://www.exclusive.co.uk/media/mx1dw04e/ansty-brand-film-day-1-136.jpg?rxy=0.4121177842231579,0.5771085801201441&width=1210&height=800&quality=70&v=1dae276ba0614f0",
        dateRange: ["2025-05-15", "2025-05-31"],
        name: "Ansty Hall",
        guests: 4,
        price: "$430/night",
        _id: "1"
    },
    {
        location: "Sweden",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/14618204.jpg?k=a0a8e418ae0d999b1609639550cc59e314ce27321000aa0a51ab890c5d77c172&o=",
        dateRange: ["2025-05-15", "2025-05-31"],
        name: "Northern Light Hut",
        guests: 4,
        price: "$320/night",
        _id: "2"
    },
    {
        location: "Finland",
        image: "https://a0.muscache.com/im/pictures/7809096f-55f0-47c9-b0be-75bbaeec2122.jpg?im_w=720",
        dateRange: ["2025-05-15", "2025-05-31"],
        guests: 4,
        name: "Villa Saarua",
        price: "$220/night",
        _id: "3"
    },
    {
        location: "Uniked Kingdom",
        image: "https://www.exclusive.co.uk/media/1izgzzz1/vb5117404_fanhams_hall_3200x2130.jpg?width=1210&height=800&quality=70&v=1daf2eca2a7f1d0",
        dateRange: ["2025-05-15", "2025-05-31"],
        guests: 2,
        name: "Fanhams Hall",
        price: "$360/night",
        _id: "4"
    },
    {
        location: "Maldives",
        image: "https://r1imghtlak.mmtcdn.com/ad2f647425c811ecbeb60a58a9feac02.jpg?downsize=540:*",
        dateRange: ["2025-05-15", "2025-05-31"],
        guests: 4,
        name: "Soneva Jani",
        price: "$550/night",
        _id: "5"
    },
    {
        location: "United Kingdom",
        image: "https://www.exclusive.co.uk/media/iy1ldt5o/lainston-house-exclusive-hotels-amy-murrell-2017-1.jpg?width=1210&height=800&quality=70&v=1da21f6379da2800",
        dateRange: ["2025-05-15", "2025-05-31"],
        guests: 6,
        name: "Lainston House",
        price: "$380/night",
        _id: "6"
    },
    {
        location: "Sweden",
        image: "https://images.getaroom-cdn.com/image/upload/s--FmHUUFdD--/c_limit,e_improve,fl_lossy.immutable_cache,h_460,q_auto:good,w_460/v1730997868/253a538700e2d4513cca6d6772b8b3175d47f503?atc=e7cd1cfa",
        dateRange: ["2025-05-08", "2025-05-13"],
        name: "Copacabana Palace",
        guests: 4,
        price: "$320/night",
        _id: "7"
    },
    {
        location: "India",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1346147961467201760/original/e2c0cacb-ae59-4310-ac66-dab68f7d949f.jpeg?im_w=720",
        dateRange: ["2025-05-11", "2025-05-16"],
        guests: 6,
        name: "Rawstone Luxury",
        price: "$280/night",
        _id: "8"
    },
    {
        location: "United Kingdom",
        image: "https://www.exclusive.co.uk/media/3hsp14x1/vb5108495_south_lodge_exclusive_hotels_____amy_murrell_2017-53_3200x2130.jpg?width=1210&height=800&quality=70&v=1daf2edbcd0ea70",
        dateRange: ["2025-05-15", "2025-05-31"],
        guests: 4,
        name: "South Lodge",
        price: "$450/night",
        _id: "9"
    },
    {
        location: "Maldives",
        image: "https://r1imghtlak.mmtcdn.com/836afe08df6811e99d6c0242ac110007.jpg?downsize=540:*",
        dateRange: ["2025-05-15", "2025-06-22"],
        guests: 2,
        name: "Malahini Resorts",
        price: "$520/night",
        _id: "10"
    },
    {
        location: "India",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NjU5NTg0MTAwMTQxMzI4MQ%3D%3D/original/6b21381c-9f44-45c1-be46-4e37968595a7.jpeg?im_w=720",
        dateRange: ["2025-05-15", "2025-06-22"],
        guests: 2,
        name: "Sunrise Villa",
        price: "$220/night",
        _id: "11"
    },
    {
        location: "United Kingdom",
        image: "https://www.exclusive.co.uk/media/loiidklg/vb1011328_the-manor-exclusive-hotels-_amy-murrell-2017-28.jpg?width=1210&height=800&quality=70&v=1da16e54a5e5930",
        dateRange: ["2025-05-15", "2025-06-31"],
        guests: 2,
        name: "The Manor House",
        price: "$520/night",
        _id: "12"
    }
];

function renderHotels(hotelList) {
    const resultContainer = document.getElementById("hotel-results");
    resultContainer.innerHTML = "";

    if (hotelList.length === 0) {
        resultContainer.innerHTML = "<h7>No matching hotels found.</h7>";
        return;
    }
    hotelList.forEach(hotel => {
        resultContainer.innerHTML += `
          <div style="width: 280px; border: 1px solid #ccc; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); background: #fff; padding: 12px;">
            <img src="${hotel.image}" alt="${hotel.location}" style="width: 100%; height: 180px; object-fit: cover;">
            <h4 style="margin: 0 0 8px;">${hotel.location}</h4>
            <h6 style="margin: 0 0 8px;">${hotel.name}</h6>
            <p style="margin: 0;">${hotel.price}</p>
            <p style="margin: 0;">Max Guests: ${hotel.guests}</p>
           <a href="/hotels/${hotel._id}"><button>View</button></a>

          </div>
        `;
      });
      
}


function checkNow() {
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);
    const totalGuests = adults + children;

    document.getElementById('destination-error').textContent = '';
    document.getElementById('checkin-error').textContent = '';
    document.getElementById('checkout-error').textContent = '';
    document.getElementById('guests-error').textContent = '';

    let isValid = true;

    if (!destination) {
        document.getElementById('destination-error').textContent = 'Please select a destination.';
        isValid = false;
    }
    if (!checkin) {
        document.getElementById('checkin-error').textContent = 'Please select a check-in date.';
        isValid = false;
    }
    if (!checkout) {
        document.getElementById('checkout-error').textContent = 'Please select a check-out date.';
        isValid = false;
    }
    if (adults < 1) {
        document.getElementById('guests-error').textContent = 'At least one adult is required.';
        isValid = false;
    }

    if (!isValid) return;

    const userStart = new Date(checkin);
    const userEnd = new Date(checkout);

    const filtered = hotels.filter(hotel => {
        const hotelStart = new Date(hotel.dateRange[0]);
        const hotelEnd = new Date(hotel.dateRange[1]);

        return (
            hotel.location === destination &&
            userStart >= hotelStart &&
            userEnd <= hotelEnd &&
            totalGuests <= hotel.guests
        );
    });

    renderHotels(filtered);
}

setDefaultDates();
updateGuestDisplay();
renderHotels(hotels); // 🔥 Show all hotels on initial load
