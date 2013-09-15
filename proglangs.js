/*
//Denne koden ser ut til å fungere på samme måte
//som den koden du viste i timen (06.09.13)//
//Denne koden brukte jeg på første LAB oppgave, men byttet til koden lenger nede for LAB2//


//Når listen forandres, skjer følgende funksjon//
list.onchange = function() {

//Variabelen "list" henter informasjon fra selve listen med programmeringsspråk//
  var list = document.getElementById('list');

  //Plasserer det valgte alternativet fra listen i span elementet med id="outputbox"//
    outputbox.innerHTML = "Du har selektert programmeringsspråk: " + this.value;
	
  };
*/

//Følgende funksjon ble, ut av kuriositet, brukt for LAB2. Viser seg at den fungerte på 
//akkurat samme måte som min kode brukt i LAB1.
function printToOutputBox(selectobj)	{
	var e_proglangs = document.getElementById("proglangs");
	var e_outputbox = document.getElementById("outputbox");
	e_outputbox.innerHTML = "Du har selektert programmeringsspråk: <p>"
	+ e_proglangs.options[selectobj.selectedIndex].text;
}

//Følgende kode blir brukt for å opprette et alert vindu når brukeren klikker
//på linkene "Kronologisk", "Hierarkisk" og "Alfabetisk".
function AlertIt() {
var answer = confirm("Siden du ønsker å gå inn på er for øyeblikket under konstruksjon, vennligst kom tilbake senere")
if (answer)
window.location="proglangs.html";
}