// Write your solution in this file!
function updateDriverWithKeyAndValue(driver,k,v) {
  newDriver = Object.assign(driver,k[v]);
}

function destructivelyUpdateDriverWithKeyAndValue(driver,k,v) {
 driver[k] = v
}

function deleteFromDriverByKey(driver,k,v) {
  copyDriver = Object.assign({},driver);
  delete copyDriver[k]
}

function destructivelyDeleteFromDriverByKey(driver,k,v) {
  delete driver[k]
}