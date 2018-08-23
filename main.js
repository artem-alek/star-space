

async function fetchPerson(url) {
    const personData =  await fetch(url);
    const personJson =  await personData.json();
    return personJson
}

async function getStarwarsPersons() {
    const personsData =  await fetch(`https://swapi.co/api/people/`);
    const personsJson =  await personsData.json();
    return personsJson.results
}


function profileHTML(person) {
    const personImage = `${person.name}.jpg`;
    
    let personHTML = ` 
        <div id="${person.name}" class="profile">
            <img class="profile-image" src="./images/${personImage}" />
            <div class="profile-box">
                <p> ${person.name} </p>
            </div>
        </div>
    `
    document.getElementById('root').innerHTML += personHTML;
}

function personDetailsHTML(person) {
    const personImage = `${person.name}.jpg`;
    
    let personHTML = ` 
        <button onClick="startingFunctionOnPageLoad()"> Back </button>
        <div id="${person.name}" class="profile">
            <img class="profile-image" src="./images/${personImage}" />
            <div class="profile-box">
                <p> ${person.name} </p>
            </div>
        </div>
    `
    document.getElementById('root').innerHTML = personHTML;
}

async function navigateToPersonInfo(url) {
    const person = await fetchPerson(url);
    console.log(person)
    personDetailsHTML(person);
}

// ALL MY LOGIC GOES HERE
async function startingFunctionOnPageLoad() {
    const personsData = await getStarwarsPersons();
    document.getElementById('root').innerHTML = '';

    for (i=0; i < personsData.length; i++) {
        profileHTML(personsData[i])
    };

    for (i=0; i < personsData.length; i++) {
        const url = personsData[i].url;
        document.getElementById(personsData[i].name).addEventListener("click", () => navigateToPersonInfo(url));
        
    };



    //LOGIC manulate my DOM
}

startingFunctionOnPageLoad();
