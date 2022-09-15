let diameter;
let velocity;
let neoName;
let neoMissDist;
let diameterSelect = document.querySelector("#diameterSelect")
let velocitySelect = document.querySelector("#velocitySelect")


fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
  .then(function (response) {
    return response.json();
  })
  .then(({ near_earth_objects }) => {
    // console.log(data);
    // // diameter = data.near_earth_objects[0].estimated_diameter.miles.estimated_diameter_max
    // console.log(diameter)

    for (var i = 0; i < near_earth_objects.length; i++) {

      let diameter = near_earth_objects[i].estimated_diameter_max;
      var opt = document.createElement("option");
      opt.textContent = diameter;
      opt.setAttribute("value", i);

      diameterSelect.appendChild(opt);
    }

  });

fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    velocity = data.near_earth_objects[0].close_approach_data[0].relative_velocity.miles_per_hour

    console.log(velocity)
  });

fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    neoName = data.near_earth_objects[0].name

    console.log(neoName)
  });

fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    neoMissDist = data.near_earth_objects[0].close_approach_data[0].miss_distance.miles

    console.log(neoMissDist)
  });





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
let glassOptions;
let typeOptions;

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

  .then(({ drinks }) => {
    console.log("ingredient list", drinks)
    for (var i = 0; i < drinks.length; i++) {

      let drinkOptions = drinks[i].strIngredient1;
      var opt = document.createElement("option");
      opt.textContent = drinkOptions;
      opt.setAttribute("value", i);

      spiritSelector.appendChild(opt);
    }
  })
  .catch(err => console.error(err))


fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?g=list`, options)
  .then(response => response.json())
  .then(({ drinks }) => {
    console.log("glass list", drinks)
    for (var i = 0; i < drinks.length; i++) {

      let glassOptions = drinks[i].strGlass;
      var opt = document.createElement("option");
      opt.textContent = glassOptions;
      opt.setAttribute("value", i);

      glassSelector.appendChild(opt);
    }
  })
  .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?c=list`, options)
  .then(response => response.json())
  .then(({ drinks }) => {
    console.log("cocktail type list", drinks)
    for (var i = 0; i < drinks.length; i++) {

      let typeOptions = drinks[i].strCategory;
      var opt = document.createElement("option");
      opt.textContent = typeOptions;
      opt.setAttribute("value", i);

      typeSelector.appendChild(opt);
    }
  })
  .catch(err => console.error(err));
