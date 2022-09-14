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
  .then(function (data) {
    console.log(data);
    diameter= data.near_earth_objects[0].estimated_diameter.miles.estimated_diameter_max

    console.log(diameter)
  });
  
  fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    velocity= data.near_earth_objects[0].close_approach_data[0].relative_velocity.miles_per_hour

    console.log(velocity)
  });
  
  fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    neoName= data.near_earth_objects[0].name

    console.log(neoName)
  });

  fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    neoMissDist= data.near_earth_objects[0].close_approach_data[0].miss_distance.miles

    console.log(neoMissDist)
  });
  




// create an element; set the text to be miles; append in the diameterSelect/// for loop//


// temp1.near_earth_objects[0].close_approach_data[0].relative_velocity.miles_per_hour//
// temp1.near_earth_objects[0].estimated_diameter.miles.estimated_diameter_max//
// temp1.near_earth_objects[0].name//
// temp1.near_earth_objects[0].close_approach_data[0].miss_distance.miles//