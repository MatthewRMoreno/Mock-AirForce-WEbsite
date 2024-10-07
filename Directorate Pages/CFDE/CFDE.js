const topNames = ["Lt Col John Brindle - Offutt Branch Chief", "Mr. Don Fucik - Offutt Team Lead"];
const bottomNames = ["Mr. Chris Wolf (CTR)", "Mr. Michael Gregory (CTR)", "Ms. Qj Corte (CTR)", "Mr. Samuel Minor (CTR)", "Mr. Stanton Hoppe (CTR)", "Mr. Louie Madsen (CTR)", "Mr. Fred Scarpello (CTR)"];
const buttonTitles = ["General Inquiries", "Construction Logistics Inquiries", "Zone 1 Inquiries", "Zone 2 Inquiries", "Zone 3 Inquiries", "Zone 4 Inquiries", "Zone 5 Inquiries", "Zone 7 Inquiries", "Zone 8 Inquiries", "Zone 9 Inquiries", "Zone 10 Inquiries", "Zone 11 Inquiries", "Zone 12 Inquiries", "JBLE Inquiries", "P&DI Inquiries"];
const buttonLinks = ["mailto:mark.blake.3@us.af.mil,judy.biddle.1@us.af.mil", "mailto:nicholas.cap.1@us.af.mil,allen.lewis.1@us.af.mil", "mailto:eric.long.14@us.af.mil,melissa.lewis.6@us.af.mil", "mailto:mark.blake.3@us.af.mil", "mailto:mark.blake.3@us.af.mil", "mailto:derrick.jochmans.1@us.af.mil", "mailto:nicholas.cap.1@us.af.mil,sandra.buckley-rusnov.1@us.af.mil", "mailto:mary.rutland.1@us.af.mil", "mailto:nicholas.cap.1@us.af.mil,sandra.buckley-rusnov.1@us.af.mil","mailto:nicholas.cap.1@us.af.mil,sandra.buckley-rusnov.1@us.af.mil", "mailto:mary.rutland.1@us.af.mil", "mailto:mary.rutland.1@us.af.mil", "mailto:mary.rutland.1@us.af.mil", "mailto:nicholas.cap.1@us.af.mil,sandra.buckley-rusnov.1@us.af.mil", "mailto:bradley.bugg.1.ctr@us.af.mil,keith.herron.1.ctr@us.af.mil"]


const topDiv = document.getElementById("top-names");
const bottomDiv = document.getElementById("bottom-names");
const personnelButton = document.getElementById("personnel-right");

let txt = "";
let newTxt = "";
let buttonText = "";

topNames.forEach(topFunction);
topDiv.innerHTML = txt;

bottomNames.forEach(bottomFunction);
bottomDiv.innerHTML = newTxt;

buttonTitles.forEach(buttonFunction);
personnelButton.innerHTML = buttonText;

function topFunction(value) {
  txt += value + "<br>"; 
}

function bottomFunction(value) {
  newTxt += value + "<br>"; 
}

function buttonFunction(value) {
  buttonText += "<a ID='cfdo-card' href='" + value + "'>" + value + "</a>" + "<br>"; 
}