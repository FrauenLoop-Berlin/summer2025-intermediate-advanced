// code here

function addNumbers (a,b) {
  if(Number(a) && Number(b)) {
    return a + b
  } else {
    return 'parameters must be numbers'
  }
} 

function setAlarm(employed, vacation) {
  return employed && !vacation
}
// export functions
module.exports =  { addNumbers, setAlarm }


// For each
let tableData = ["<td></td>", "<td></td>"]
function addNumbers(number){

  console.log(number);
  
}
tableData.forEach((item, index) => {addNumbers(index)})
tableData.forEach(function(item, b){addNumbers(b)})