import React, { useState } from 'react';

function YearSlider() {
  // Define the range of years
  const minYear = 1990;
  const maxYear = 2025;

  // Initialize state to track the selected year
  const [selectedYear, setSelectedYear] = useState(minYear);

  // Event handler for the slider input change
  const handleSliderChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min={minYear}
        max={maxYear}
        value={selectedYear}
        onChange={handleSliderChange}
        step={1}
      />
      <p>Selected Year: {selectedYear}</p>
    </div>
  );
}

export default YearSlider;
