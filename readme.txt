Kontrollspørsmål LAB1:

0)	Javascript kan brukes til å manipulere en webside
	for å gjøre den mer dynamisk ved å opprette animasjoner
	og andre funksjoner som ellers ikke kan gjøres gjennom ren html.
	
1)	CSS id: En CSS id kan forklares som et unikt ccs element som fysisk må 
	bli fysiskt linket til i HTML dokumentet. Dersom du vil ha
	en spesifikk paragraf blå, men ikke resten av paragrafene kan du lage en
	unik CSS id. Eksempel: #pblue {color:blue}, kan skrives i CSS dokumentet for
	så å bli linket til HTML dokumentet; <p id="pblue">Hello!</p>. Da vil kun den
	selekterte paragrafen bli blå.
	
	Class elementer: Et CSS class element er en modifikasjon av en hel klasse i HTML
	dokumentet. Dersom du ønsker at alle paragrafene du skriver i HTML dokumentet skal
	være blå, skriver du i CSS dokumentet; p {color:blue}. Forskjellen fra CSS id er at
	du ikke inkluderer hashtagen (#) før elementet.

2)	Deloppgave 0: Denne framstillingen av en liste ville etter min mening vært ugunsitg
				  dersom antall programmeringsspråk økte fra 22 til 100. Dette fordi en 
				  rett liste med 100 forskjellige alternativer kan for enkelte være
				  svært uoversiktlig. En måte man kan gjøre dette til en god løsning er
				  ved å organisere listen alfabetisk eller kronologisk. Da ville den blitt
				  oversiktlig og relativt brukervennlig.
	
	Deloppgave 1: Denne framstillingen ser jeg på som en enda verre måte å liste 100
				  programmeringsspråk på. Dersom brukeren må fysisk scrolle ned for å 
				  finne et gitt programmeringsspråk, blir det både tungvint og vanskelig.
				  Selv om man kunne organisert det alfabetisk eller kronologisk, føler jeg
				  personlig at den fysiske scrollingen gjør dette til en lite attraktiv
				  framstilling.
				  
3)	Wikipedia løser problemet med å ha en lang liste av programmeringsspråk ved å organisere 
	hvert enkelt språk. Ved å ta utgangspunkt i alfabetet, har wikipedia forstørret hver
	enkelt bokstav alfabetisk for så å plassere de språkene som har den gitte forbokstaven
	under. Personlig synes jeg dette er en god og enkel måte å løse problemet med å ha en
	lang liste av alternativer.
	
4)	<div>: er hva man kaller et "block-line" element. Div har en block rundt seg, og brukes 
		   for å gruppere større mengder tekst i et HTML dokument.
	
	<span>: er hva man kaller et "in-line" element. Span brukes vanligvis i små deler inne
			i et HTML dokument for å endre små deler, for eksempel en paragraf.
			
5)	Deloppgave 2 utgjør et brukbarhetsproblem med at den kun viser til hva man har trykket,
	men ikke noe utover dette. Ønskelig skulle man ved å trykke på et programmeringsspråk
	bli videreført til enten en ekstern webside som kan fortelle noe om dette språket, eller
	til en annen del av websiden hvor du kan lese om det valgte språket. En drop-down meny er
	heller ikke nødvendigvis en veldig oversiktlig måte å fremstille en slik liste på dersom
	den inneholdt alle programmeringsspråkene. Da ville jeg heller lagd en  enkel liste som var
	organisert alfabetisk, uten drop-down alternativet.

Kontrollspørsmål LAB2:

SPØRSMÅL: Forklar hvilken deler av din applikasjon så langt, implementerer de forskjellige lagene i MVC
arkitekturen. MVC står får Model­View­Controller, som til norsk kan oversettes til
Modell­Presentasjon­Kontorller.

SVAR: 

MODEL - Modellen i min oppgave ser jeg for meg at er <select> og <form>. Dette fordi disse
		viser en endring.
		
VIEW - Alt som blir gjort på oppgaven kan sees i html-filen. Dermed er den VIEW i MVC.

CONTROLLER - Controller i oppgaven er javascriptfilene. Controller er definert som det som
			 gir en endring mellom model og view. Det er JS-filen som får <select><form> til
			 å endres i html.
			 
Kontrollspørsmål LAB3:

0) jQuery er et Javascript bibliotek som gjør skriving av JavaScript enklere.
Koding som ellers ville vært lang og tidkrevende med rå JavaScript, blir kuttet ned, og kan hentes
via jQuery biblioteket med enkle linjer kode. 	jQuery gjør ting som ellers er komplisert
mye enklere. Et eksempel er webbrowsere. Mange webbrowsere tolker kode forskjellig, men ved 
hjelp av jQuery trenger du ikke tenke over dette, ettersom jQuery biblioteket gjør jobben for deg. Det 
er ikke for ingenting at jQuerys slagord er "write less, do more."

1) Et <canvas> tag er på en måte det samme som et <img> tag. Forskjellen blir at med et canvas tag 
kan man selv skrive (med JavaScript) hva som skal skje innenfor taggen. Dette kan ikke gjøres med 
et <img> tag. Man har mer frihet med canvas. Man kan lage komplekse animasjoner, 2d, 3d. Dette kan
man bygge videre på, og for eksempel lage spill. Dette er sterke sider med bruk av Canvas.

For eksempel kan dette gjennomføres med Canvas, noe som ikke er mulig med ren HTML/CSS.
"http://raksy.dyndns.org/torus.html" eller "http://raksy.dyndns.org/ico.html".

HTML/CSS har også sterke sider. For det første er det enkelt, i motsetning til canvas, som krever en 
viss kjennskap til blant annet JavaScript. Dersom man kun ønsker å laste opp bilder til en side, legge 
til farger, eller andre  designmessige egenskaper, kan HTML/CSS være gunstig.

HTML/CSS har robust tekst support. Det er enkelt å style text. I Canvas derimot, blir tekst skrevet som et bitmap, 
hvor det å definere tekststyle er mer kompleks.

2) Ut ifra det jeg leste i innledningen til denne oppgaven, så mener jeg at HTML5 Canvas best grafisk representerer 
piksel modellen. Da man har en mengde grafiske muligheter med HTML5 Canvas, både 2d og 3d, mener jeg  at det 
blir for snevert å representere HTML5 Canvas innenfor komponent og strek modellen. Når jeg tenker HTML5 Canvas, 
så ser jeg alle mulighetene med dette verktøyet, hvor man blant annet kan lage komplekse animasjoner i 3d eller 2d. 
3d biten av dette krever at skjermen skal oppdateres fort. DirectX er en måte å manipulere piksler direkte.

X) Samarbeidet ikke med noen for å gjennomføre oppgaven. Eneste var i IS-104 forelesningen (04.10.13) 
hvor Janis gikk gjennom deloppgave 1. Jeg tror det tok bortimot 2-3 timer å gjennomføre oppgaven.