let diameter;
let velocity;
let neoName;
let neoMissDist;
let diameterSelect = document.querySelector("#diameterSelect")
let velocitySelect = document.querySelector("#velocitySelect")


fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=JUfSdghhaVFtaCtdpedGHFBW1jh6M4409rWR0Nn1`)
    .then(function (response) {
        return response.json();
    })
    .then(({ near_earth_objects }) => {
        // console.log(data);
        // // diameter = data.near_earth_objects[0].estimated_diameter.miles.estimated_diameter_max
        // console.log(diameter)
        for (var i = 0; i < near_earth_objects.length; i++) {
            let diameter = near_earth_objects[i].estimated_diameter.miles.estimated_diameter_max;
            var opt = document.createElement("option");
            opt.textContent = diameter;
            opt.setAttribute("value", diameter);
            diameterSelect.appendChild(opt);
            console.log(diameter)
        }
    })

fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=JUfSdghhaVFtaCtdpedGHFBW1jh6M4409rWR0Nn1`)
    .then(function (response) {
        return response.json();
    })
    .then(({ near_earth_objects }) => {
        // console.log(data);
        // // diameter = data.near_earth_objects[0].estimated_diameter.miles.estimated_diameter_max
        // console.log(diameter)
        for (var i = 0; i < near_earth_objects.length; i++) {
            let velocity = parseFloat(near_earth_objects[i].close_approach_data[0].relative_velocity.miles_per_hour).toFixed(2);
            var opt = document.createElement("option");
            opt.textContent = velocity;
            opt.setAttribute("value", velocity);
            velocitySelect.appendChild(opt);
            console.log(velocity)
        }
    })
// console.log(data);
// diameter= data.near_earth_objects[0].estimated_diameter.miles.estimated_diameter_max




fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=JUfSdghhaVFtaCtdpedGHFBW1jh6M4409rWR0Nn1`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        velocity = data.near_earth_objects[0].close_approach_data[0].relative_velocity.miles_per_hour

        console.log(velocity)
    });

fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=JUfSdghhaVFtaCtdpedGHFBW1jh6M4409rWR0Nn1`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        neoName = data.near_earth_objects[0].name

        console.log(neoName)
    });

//   https://api.nasa.gov/planetary/apod?api_key=JUfSdghhaVFtaCtdpedGHFBW1jh6M4409rWR0Nn1

fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=JUfSdghhaVFtaCtdpedGHFBW1jh6M4409rWR0Nn1`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        neoMissDist = data.near_earth_objects[0].close_approach_data[0].miss_distance.miles

        console.log(neoMissDist)
    });

diameterSelect.addEventListener("change", function (event) {

    console.log(event.target.value)
})

velocitySelect.addEventListener("change", function (event) {

    console.log(event.target.value)
})
// create an element; set the text to be miles; append in the diameterSelect/// for loop//


// temp1.near_earth_objects[0].close_approach_data[0].relative_velocity.miles_per_hour//
// temp1.near_earth_objects[0].estimated_diameter.miles.estimated_diameter_max//
// temp1.near_earth_objects[0].name//
// temp1.near_earth_objects[0].close_approach_data[0].miss_distance.miles//


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
        // 'X-RapidAPI-Key': 'ddab6d3de4msh52dd0d341489032p14c714jsn77846584eadc',
        // 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
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
