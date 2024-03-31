// Function to parse CSV data
function parseCSVData(csvData) {
  const lines = csvData.split('\n');
  const labels = [];
  const usdValues = [];
  const percentages = [];

  lines.forEach(line => {
    const parts = line.split(',');
    labels.push(parts[0]);
    usdValues.push(parseFloat(parts[1]));
    percentages.push(parseFloat(parts[2]));
  });

  return { labels, usdValues, percentages };
}

// Function to read CSV file
async function readCSVFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

// Function to initialize and render the chart
async function initChart(csvFile) {
  try {
    const csvData = await readCSVFile(csvFile);
    const { labels, usdValues, percentages } = parseCSVData(csvData);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'USD Value',
          data: usdValues,
          yAxisID: 'usd-axis',
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 1
        }, {
          label: 'Percentage',
          data: percentages,
          yAxisID: 'percent-axis',
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'year',
              displayFormats: {
                year: 'YYYY'
              },
              tooltipFormat: 'YYYY'
            },
            scaleLabel: {
              display: true,
              labelString: 'Year'
            }
          }],
          yAxes: [{
            id: 'usd-axis',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'USD ($)'
            }
          }, {
            id: 'percent-axis',
            type: 'linear',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'Percentage (%)'
            },
            ticks: {
              min: 0,
              max: 100
            }
          }]
        }
      }
    });
  } catch (error) {
    console.error('Error reading CSV file:', error);
  }
}

// Function to handle file input change event
document.querySelector('#csvFile').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    initChart(file);
  }
});
