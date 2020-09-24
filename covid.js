fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true')
  .then(response => response.json())
  .then(json => {
      // console.log(json.activeCases)
      // var countries = json.Countries;
      // countries.forEach(function(element){
      //     if(element.Country != "India"){
      //         return;
      //     }
      //   // NewConfirmed: 75083,
      //   // TotalConfirmed: 5562663,
      //   // NewDeaths: 1053,
      //   // TotalDeaths: 88935,
      //   // NewRecovered: 101468,
      //   // TotalRecovered: 4497867,
          var new_active = json.activeCasesNew;
          var total_confirmed = json.totalCases;
          var new_deaths = json.deathsNew;
          var total_deaths = json.deaths;
          var new_recovered = json.recoveredNew;
          var total_recovered = json.recovered;
          var total_active = json.activeCases;
          document.getElementById('na').innerHTML=new_active;
          document.getElementById('tc').innerHTML=total_confirmed;
          document.getElementById('nd').innerHTML=new_deaths;
          document.getElementById('td').innerHTML=total_deaths;
          document.getElementById('nr').innerHTML=new_recovered;
          document.getElementById('tr').innerHTML=total_recovered;
          document.getElementById('ta').innerHTML=total_active;
      });
    //   countries.forEach(({ date, confirmed, recovered, deaths }) =>
