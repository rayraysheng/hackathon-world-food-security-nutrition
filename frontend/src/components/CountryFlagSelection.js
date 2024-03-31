import React, { useState } from 'react';
import Select from 'react-select';

const countryOptions = [
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  // Add more countries as needed
];

const CountryFlagSelection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div>
      <Select
        value={selectedCountry}
        onChange={handleChange}
        options={countryOptions}
        placeholder="Select country..."
      />
      {selectedCountry && (
        <div>
          <p>Selected country: {selectedCountry.label}</p>
        </div>
      )}
    </div>
  );
};

export default CountryFlagSelection;