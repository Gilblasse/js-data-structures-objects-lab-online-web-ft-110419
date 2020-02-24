// Write your solution in this file!


// function updateDriverWithKeyAndValue(driver,k,v) {
//   let newDriver = Object.assign(driver,k[v]);
//   return newDriver
// }

function updateDriverWithKeyAndValue(driver, k, v) {
  // return { ...driver, ...{ [key]: value } }
  const obj = { [k]: v }
  return Object.assign({}, driver, obj);
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