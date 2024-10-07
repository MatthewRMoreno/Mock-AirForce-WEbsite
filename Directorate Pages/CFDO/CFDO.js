const topNames = ["Lt Col John Brindle - Offutt Branch Chief", "Mr. Don Fucik - Offutt Team Lead"];
const bottomNames = ["Mr. Chris Wolf (CTR)", "Mr. Michael Gregory (CTR)", "Ms. Qj Corte (CTR)", "Mr. Samuel Minor (CTR)", "Mr. Stanton Hoppe (CTR)", "Mr. Louie Madsen (CTR)", "Mr. Fred Scarpello (CTR)"];

const topDiv = document.getElementById("top-names")
const bottomDiv = document.getElementById("bottom-names")

let txt = "";
let newTxt = "";

topNames.forEach(topFunction);
topDiv.innerHTML = txt;

bottomNames.forEach(bottomFunction);
bottomDiv.innerHTML = newTxt;

function topFunction(value, index, array) {
  txt += value + "<br>"; 
}

function bottomFunction(value, index, array) {
  newTxt += value + "<br>"; 
}
