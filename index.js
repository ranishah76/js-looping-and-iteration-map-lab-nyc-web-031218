// Code your solution in this file.
function lowerCaseDrivers(drivers) {
 return drivers.map( function(driver) {
   return driver.toLowerCase()
 })
}

function nameToAttributes(list) {
  return list.map(function(element) {
    const firstname =  element.split(' ')[0];
    const lastname =  element.split(' ')[1];
    return { firstName: firstname, lastName: lastname};
  })
}

function attributesToPhrase(list) {
  return list.map(function (person) {
    return `${person.name} is from ${person.hometown}`
  })
}
