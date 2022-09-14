let drinkName = "whiskey"
let glassType = "Cocktail_glass"
let drinkType = "shot"

let spiritSelector = document.querySelector("#spiritSelector");
let glassSelector = document.querySelector("#glassSelector");
let typeSelector = document.querySelector("#typeSelector");

let drinkOptions;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ddab6d3de4msh52dd0d341489032p14c714jsn77846584eadc',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};

fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${drinkName}`, options)
    .then(response => response.json())
    .then(response => console.log("drinkName", response))
    .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?g=${glassType}`, options)
    .then(response => response.json())
    .then(response => console.log("glassType", response))
    .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${drinkType}`, options)
    .then(response => response.json())
    .then(response => console.log("drinkType", response))
    .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?i=list`, options)
    .then(response => response.json())
    .then(response => console.log("ingredient list", response))
    .catch(err => console.error(err))

    
// console.log(drinkOptions)

// for (var i = 0; i < drinkOptions.length; i++) {

//     var opt = document.createElement("option");
//     opt.textContent = drinkOptions;
//     opt.setAttribute("data-index", i);

//     spiritSelector.appendChild(opt);
// }

fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?g=list`, options)
    .then(response => response.json())
    .then(response => console.log("glass list", response))
    .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?c=list`, options)
    .then(response => response.json())
    .then(response => console.log("cocktail type list", response))
    .catch(err => console.error(err));
