// Write your solution in this file!
function updateDriverWithKeyAndValue(driver,k,v) {
  newDriver = Object.assign(driver,k[v]);
}

function destructivelyUpdateDriverWithKeyAndValue(driver,k) {
 driver[k] = v
}

function deleteFromDriverByKey(driver,k) {
  copyDriver = Object.assign({},driver);
  delete copyDriver[k]
}

function destructivelyDeleteFromDriverByKey(driver,k) {
  delete driver[k]
}