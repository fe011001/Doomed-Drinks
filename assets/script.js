let diameter;
let velocity;
let neoName;
let neoMissDist;
let diameterSelect = document.querySelector("#diameterSelect")
let velocitySelect = document.querySelector("#velocitySelect")
let asteroidName = document.querySelector("#asteroidName")
let asteroidSize = document.querySelector("#asteroidSize")
let asteroidVelocity = document.querySelector("#asteroidVelocity")
let diameterDataArray = []

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
            let asteroidData = {
              name: near_earth_objects[i].name,
              diameter: diameter,
              velocity: parseFloat(near_earth_objects[i].close_approach_data[0].relative_velocity.miles_per_hour).toFixed(2)
            }
            // console.log(asteroidData)
            diameterDataArray.push(asteroidData)
            opt.setAttribute("value", diameter);
            diameterSelect.appendChild(opt);
            // console.log(diameter)
        }
        console.log(diameterDataArray)
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
            // velocitySelect.appendChild(opt);
            // console.log(velocity)
        }
    
    })

fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=JUfSdghhaVFtaCtdpedGHFBW1jh6M4409rWR0Nn1`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        velocity = data.near_earth_objects[0].close_approach_data[0].relative_velocity.miles_per_hour

        // console.log(velocity)
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
    for (let i = 0; i < diameterDataArray.length; i++) {


      // console.log(diameterDataArray[i].diameter)
      if (event.target.value == diameterDataArray[i].diameter){
        console.log(diameterDataArray[i].name)
        console.log(diameterDataArray[i].velocity)
        asteroidName.textContent = diameterDataArray[i].name
        asteroidSize.textContent = diameterDataArray[i].diameter
        asteroidVelocity.textContent = diameterDataArray[i].velocity

      }
      // const element = diameterDataArray[i];
      
    }
    

    // console.log(event.target.dataset.vel)

})

// velocitySelect.addEventListener("change", function (event) {

//     console.log(event.target.value)
// })
// create an element; set the text to be miles; append in the diameterSelect/// for loop//


// temp1.near_earth_objects[0].close_approach_data[0].relative_velocity.miles_per_hour//
// temp1.near_earth_objects[0].estimated_diameter.miles.estimated_diameter_max//
// temp1.near_earth_objects[0].name//
// temp1.near_earth_objects[0].close_approach_data[0].miss_distance.miles//



let spiritSelector = document.querySelector("#spiritSelector");
let glassSelector = document.querySelector("#glassSelector");
let typeSelector = document.querySelector("#typeSelector");


let drinkOptions;
let glassOptions;
let typeOptions;

const options = {

  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': 'ddab6d3de4msh52dd0d341489032p14c714jsn77846584eadc',
    // 'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }

};

// fills out alcohol selector drop downs
fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?i=list`, options)
  .then(response => response.json())
  .then(({ drinks }) => {
    // console.log("ingredient list", drinks)
    for (var i = 0; i < drinks.length; i++) {

      let drinkOptions = drinks[i].strIngredient1;
      var opt = document.createElement("option");
      opt.textContent = drinkOptions;
      opt.setAttribute("value", drinkOptions);

      spiritSelector.appendChild(opt);
    }
  })
  .catch(err => console.error(err))


fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?g=list`, options)
  .then(response => response.json())
  .then(({ drinks }) => {
    // console.log("glass list", drinks)
    for (var i = 0; i < drinks.length; i++) {

      let glassOptions = drinks[i].strGlass;
      var opt = document.createElement("option");
      opt.textContent = glassOptions;
      opt.setAttribute("value", glassOptions);

      glassSelector.appendChild(opt);
    }
  })
  .catch(err => console.error(err));

fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?c=list`, options)
  .then(response => response.json())
  .then(({ drinks }) => {
    // console.log("cocktail type list", drinks)
    for (var i = 0; i < drinks.length; i++) {

      let typeOptions = drinks[i].strCategory;
      var opt = document.createElement("option");
      opt.textContent = typeOptions;
      opt.setAttribute("value", typeOptions);

      typeSelector.appendChild(opt);
    }
  })
  .catch(err => console.error(err));

// let drinkName = select.options[select.drinkOptions].text;
// let glassType = select.options[select.glassOptions].text;
// let drinkType = select.options[select.typeOptions].text;

let drinkType

spiritSelector.addEventListener("change", function (event) {
  console.log(event.target.value)
  let drinkName = event.target.value

  fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${drinkName}`, options)
    .then(response => response.json())
    .then(response => console.log("drinkName", response))
    .catch(err => console.error(err));

})

glassSelector.addEventListener("change", function (event) {
  console.log(event.target.value)
  let glassType = event.target.value

  fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?g=${glassType}`, options)
    .then(response => response.json())
    .then(response => console.log("glassType", response))
    .catch(err => console.error(err));
  
})

typeSelector.addEventListener("change", function (event) {
  console.log(event.target.value)
  let drinkType = event.target.value

  fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${drinkType}`, options)
  .then(response => response.json())
  .then(response => console.log("drinkType", response))
  .catch(err => console.error(err));
 
  
})
