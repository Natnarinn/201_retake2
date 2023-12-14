const { template } = require("@babel/core")

function countCovidStatus(covidStatusArray) {
  if (covidStatusArray === null || covidStatusArray === undefined) {
    return undefined
  } else if (covidStatusArray.length === 0) {
    return {}
  }

  let negLow = 0
  let negHigh = 0
  let pos = 0
  for(const status of covidStatusArray){
    switch(status){
        case "negative and low risk" : negLow++
        break
        case "negative and high risk" : negHigh++
        break
        case "positive" : pos++
        break
    }
  }

  // build object
  const statusCovid = {}
  if (negLow > 0) {
    statusCovid["negative and low risk"] = negLow 
  }
  if (negHigh > 0) {
    statusCovid["negative and high risk"] = negHigh
  }
  if (pos > 0) {
    statusCovid["positive"] = pos
  }
  return statusCovid
}

module.exports = countCovidStatus