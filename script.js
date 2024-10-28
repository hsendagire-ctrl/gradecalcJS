document.getElementById("gradecalc").addEventListener("click", calculate);
function calculate() {
  let num1 = Number(document.getElementById("cSide1").value);
  var num2 = Number(document.getElementById("spro1").value);
  var num3 = Number(document.getElementById("spro2").value);
  let num4 = Number(document.getElementById("cSide2").value);
  var num5 = Number(document.getElementById("project").value);

  var answer = (num1 + num2 + num3 + num4 + num5) / 5;

  document.getElementById("percent").innerHTML = answer;
}
