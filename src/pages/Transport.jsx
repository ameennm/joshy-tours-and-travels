import React from 'react';
import EnquiryOptions from '../components/EnquiryOptions';
import './Transport.css';

const vehicles = [
    { id: 1, category: 'Cars & Vans', name: 'Innova Crysta', seats: '7 Seater', desc: 'Premium comfort for small families and groups.', img: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, category: 'Cars & Vans', name: 'Premium Sedan', seats: '4 Seater', desc: 'Luxury travel for executives and couples.', img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, category: 'Tempo Travellers', name: '12 Seater Tempo', seats: '12 Seater', desc: 'Ideal for medium-sized groups. Comfortable pushback seats.', img: 'https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, category: 'Tempo Travellers', name: '17 Seater Tempo', seats: '17 Seater', desc: 'Extra space for longer journeys with ample luggage room.', img: 'https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, category: 'Mini Buses', name: '28 Seater Mini Bus', seats: '28 Seater', desc: 'Perfect for student groups and mid-size corporate outings.', img: 'https://images.pexels.com/photos/163756/cars-classic-vintage-163756.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, category: 'Large Buses', name: '49 Seater Volvo AC Bus', seats: '49 Seater', desc: 'Ultimate luxury travel with Volvo suspension and AC.', img: 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const Transport = () => {
    return (
        <div className="transport-page">
            <div className="page-header">
                <h1>Our <span className="text-gold">Fleet</span></h1>
                <p>Experience the journey with our premium and luxury vehicle rentals.</p>
            </div>

            <div className="fleet-container section-padding">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="vehicle-card">
                        <div className="vehicle-image" style={{ backgroundImage: `url(${vehicle.img})` }}>
                            <div className="vehicle-category">{vehicle.category}</div>
                        </div>
                        <div className="vehicle-details">
                            <h2>{vehicle.name}</h2>
                            <p className="vehicle-seats">💺 {vehicle.seats}</p>
                            <p className="vehicle-desc">{vehicle.desc}</p>
                            <EnquiryOptions />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transport;
