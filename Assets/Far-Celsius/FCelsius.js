function convertirCelsius(farenheit){
  var fTempVal = parseFloat(document.getElementById('farenheit').value);
  var celsius = document.getElementById('celsius');
  var cTempVal = (fTempVal - 32) * (5/9);
  celsius.value = cTempVal;

}
function convertToF(celsius) {
    var cTempVal = parseFloat(document.getElementById('celsius').value);
    var farenheit = document.getElementById('farenheit');
    var fTempVal = (cTempVal * (9/5)) + 32;
    farenheit.value=fTempVal;
}
