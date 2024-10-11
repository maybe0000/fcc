fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
            .then(response => response.json())
            .then(data => document.getElementById('bar-chart').innerHTML = JSON.stringify(data));