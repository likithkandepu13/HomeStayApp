import React, { useState } from 'react';
import '../CSS/home.css'; // Import CSS for styling

export default function Home() {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [selectedOption, setSelectedOption] = useState('hotels');

  const handleSearch = () => {
    // Add search functionality here
    console.log({ destination, checkInDate, checkOutDate, adults, selectedOption });
  };

  return (
    <div className="home-container">
      <div className="hero-banner">
        <img 
          src="https://media.istockphoto.com/photos/vizag-andhra-pradesh-picture-id904650758?b=1&k=20&m=904650758&s=170667a&w=0&h=YTLsWBXwu4pSXtxZndiJulpOCuMII3NnKvaAw8kaz_A=" 
          alt="Vizag Beach View" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1 className="hero-heading">Your Perfect Getaway Awaits</h1>
          <p className="hero-subtext">Find unique homes and experiences around the world.</p>
        </div>

        {/* Search Component placed over the image */}
        <div className="search-component">
          <div className="option-selector">
            <button
              className={selectedOption === 'hotels' ? 'active' : ''}
              onClick={() => setSelectedOption('hotels')}
            >
              Hotels
            </button>
            <button
              className={selectedOption === 'homes' ? 'active' : ''}
              onClick={() => setSelectedOption('homes')}
            >
              Homes & Apts
            </button>
            <button
              className={selectedOption === 'flight' ? 'active' : ''}
              onClick={() => setSelectedOption('flight')}
            >
              Flight + Hotels
            </button>
            <button
              className={selectedOption === 'packages' ? 'active' : ''}
              onClick={() => setSelectedOption('packages')}
            >
              Travel Packages
            </button>
          </div>

          <input
            className="input-field"
            type="text"
            placeholder="Enter destination or property"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <input
            className="input-field"
            type="date"
            placeholder="Check-in Date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          
          <input
            className="input-field"
            type="date"
            placeholder="Check-out Date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          
          <input
            className="input-field"
            type="number"
            min="1"
            placeholder="No of Adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
