const { template } = require("@babel/core")

function countPosNegValue(posNegIntegerArray) {
  if (posNegIntegerArray === null || posNegIntegerArray === undefined) {
    return undefined
  } else if (posNegIntegerArray.length === 0) {
    return {}
  }

  let positive = 0
  let negative = 0

  // build object
  const properties = {}

  for (let i = 0; i < posNegIntegerArray.length; i++) {
    if (posNegIntegerArray[i] > 0) {
      positive++
    } else if (posNegIntegerArray[i] < 0) {
      negative++
    }
  }
  return {positive: positive, negative : negative}
}

module.exports = countPosNegValue

