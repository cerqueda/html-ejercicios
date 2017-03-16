function convertirCelsius(){
  var fTempVal = parseFloat(document.getElementById('fTemp').value);
var cTempVal = (fTempVal - 32) * (5/9);
document.getElementById('cTemp').value = cTempVal;
}
function convertToF(celsius) {
    var cTempVal = parseFloat(document.getElementById('celsius').value);
    var fTempVal = (cTempVal * (9/5)) + 32;
    document.getElementById('fTemp').value = fTempVal;
}

document.getElementById('farenheit').value
