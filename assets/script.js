let drinkName = "whiskey"
let glassType = "Cocktail_glass"
let drinkType = "shake"


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ddab6d3de4msh52dd0d341489032p14c714jsn77846584eadc',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};

fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${drinkName}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?g=${glassType}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${drinkType}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?i=list`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?g=list`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?c=list`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));



// fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
// .then(response => response.json())
// .then(response => console.log(response))