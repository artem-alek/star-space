

function fetchPerson(url) {
    fetch(url).then(responseAPI => {
        responseAPI.json().then(responseJson => {
            let dataObject = responseJson; 
            console.log(dataObject);

            //I CAN ADD += INNER HTML TO DISPLAY A PERSONS PROFILE???
            // images come from image folder, need to add your own images.
            // string of <img src="./images/luke-skywalker.jpg">
        });
    });
}

function buttonEveryPerson() {
    fetch(`https://swapi.co/api/people/`).then(responseAPI => {
        responseAPI.json().then(responseJson => {
            let dataObject = responseJson; 

            for (i=0; i < dataObject.results.length; i++) {
                let person = dataObject.results[i];
                document.getElementById('root').innerHTML += `<button class="person-button" onClick="fetchPerson('${person.url}')"> ${person.name} </button>`
            };
            
        });
    });
}


// an idea of how you can build a profile HTML thought javascipt
function profileHTML(personInfo) {
    `
    <div class="profile">
        <img src...... />
        <div class="info-box">
            <H1>...
            <p> ....
        </div>
    </div>
    `
}


buttonEveryPerson();
