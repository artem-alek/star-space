fetch('https://swapi.co/api/people/1/').then(response => {
    response.json().then(json => {
      let data = json; 
      console.log(data)
    });
  });