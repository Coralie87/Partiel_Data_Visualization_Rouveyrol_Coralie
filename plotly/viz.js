fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
  
    sortByCountryPopulation(data);
    
   
    const top30Countries = data.slice(-30);
 
    top30Countries.sort((a, b) => a.population - b.population);
    
    
    const countries = top30Countries.map(country => country.country);
    const populations = top30Countries.map(country => country.population);
    
   
    const trace = {
        x: countries,
        y: populations,
        type: 'bar',
        marker: {
            color: 'rgb(158,202,225)',
            opacity: 0.6,
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    const layout = {
        title: 'Data distribution of countries population',
        xaxis: {
            title: 'Country'
        },
        yaxis: {
            title: 'Population'
        }
    };

    Plotly.newPlot('data-viz', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}
