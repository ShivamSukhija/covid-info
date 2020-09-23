fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(json => {
      var countries = json.Countries;
      countries.forEach(function(element){
          if(element.Country != "India"){
              return;
          }
        // NewConfirmed: 75083,
        // TotalConfirmed: 5562663,
        // NewDeaths: 1053,
        // TotalDeaths: 88935,
        // NewRecovered: 101468,
        // TotalRecovered: 4497867,
          var new_confirmed = element.NewConfirmed;
          var total_confirmed = element.TotalConfirmed;
          var new_deaths = element.NewDeaths;
          var total_deaths = element.TotalDeaths;
          var new_recovered = element.NewRecovered;
          var total_recovered = element.TotalRecovered;
          document.getElementById('nc').innerHTML=new_confirmed;
          document.getElementById('tc').innerHTML=total_confirmed;
          document.getElementById('nd').innerHTML=new_deaths;
          document.getElementById('td').innerHTML=total_deaths;
          document.getElementById('nr').innerHTML=new_recovered;
          document.getElementById('tr').innerHTML=total_recovered;
      });
    //   countries.forEach(({ date, confirmed, recovered, deaths }) =>
  })
.catch(console.error);  