// ChartComponent.js

import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

function ChartComponent() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const csvUrl = 'https://example.com/data.csv'; // Replace with your CSV file URL
        const response = await fetch(csvUrl);
        const csvData = await response.text();
        const { labels, values } = parseCSVData(csvData);
        renderChart(labels, values);
      } catch (error) {
        console.error('Error fetching or parsing CSV data:', error);
      }
    }

    fetchData();
  }, []);

  // Function to parse CSV data
  function parseCSVData(csvData) {
    const lines = csvData.split('\n');
    const labels = [];
    const values = [];

    lines.forEach(line => {
      const parts = line.split(',');
      labels.push(parts[0]);
      values.push(parseFloat(parts[1]));
    });

    return { labels, values };
  }

  // Function to render the chart
  function renderChart(labels, values) {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data from CSV',
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    setChartData(myChart);
  }

  return (
    <div>
      <canvas id="myChart" width="800" height="400"></canvas>
    </div>
  );
}

export default ChartComponent;
