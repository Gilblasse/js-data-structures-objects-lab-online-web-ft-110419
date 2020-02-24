// Write your solution in this file!
const driver = {};

// function updateDriverWithKeyAndValue(driver,k,v) {
//   let newDriver = Object.assign(driver,k[v]);
//   return newDriver
// }

function updateDriverWithKeyAndValue(driver, k, v) {
  // Alternate using ES6 Spread operators:
  // return { ...driver, ...{ [key]: value } }
  return Object.assign({}, driver, { [k]: v });
}

function destructivelyUpdateDriverWithKeyAndValue(driver,k) {
 driver[k] = v
 return driver 
}

function deleteFromDriverByKey(driver,k) {
  copyDriver = Object.assign({},driver);
  delete copyDriver[k]
}

function destructivelyDeleteFromDriverByKey(driver,k) {
  delete driver[k]
}