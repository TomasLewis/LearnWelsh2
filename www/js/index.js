var i,j,k;
var level='primary',shortCode='en',topicsSelected='0',noTopic,soundURL='sounds/',modStrings,modStringsEN,modStringsES,xGroundCol,xStrokeCol,strokeCol,groundCol;
var displaytopic,topic,secLevel,primLevel;
var startButtonLabel,lessonButtonLabel,lessonToolTip,gamesButtonLabel,testButtonLabel,startToolTip,gamesToolTip,testToolTip,vocToolTip,vocCorrectedLink;
if(level=='primary'){
strokeCol='#FFF';
groundCol='#0079C1';
xGroundCol='#EFB538';
xStrokeCol='#000'
} else {
groundCol='#EFB538';
xGroundCol='#0079C1';
strokeCol='#000';
xStrokeCol='#FFF';
}
if(shortCode=='en'){ 
	startButtonLabel='1. Start';
	lessonButtonLabel='2. Lessons';
	lessonToolTip = 'Lessons to learn / revise your selected topic';
	gamesButtonLabel='3. Games';
	testButtonLabel='4. Tests';
	
	startToolTip='Start by selecting a topic to learn';
	gamesToolTip='Play games to practice / revise your chosen topic';
	testToolTip='Test how well you\'ve learned the topic with our tests';
	vocToolTip ='Vocabulary pages';
	vocCorrectedLink=vocabLink+'?level='+level;
	noTopic='No topic selected!';
	primLevel='primary';
	secLevel='secondary';
} else if(shortCode=='es'){
	startButtonLabel='1. Inicio';
	lessonButtonLabel='2. lecciones';
	gamesButtonLabel='3. juegos';
	testButtonLabel='evaluaciones';

	startToolTip='Comienza seleccionando un tema en '+language;
	lessonToolTip='Estudia el tema seleccionado con tus lecciones de '+language+' gratuitas';
	gamesToolTip='Aprende '+language+' con juegos según el tema que has elegido';
	testToolTip='Comprueba si has comprendido el tema con nuestras evaluaciones de '+language;
	vocToolTip ='Páginas de vocabulario';
	vocCorrectedLink=vocabLink+'?level='+level;
	noTopic='No topic selected ES';
	primLevel='primaryES';
	secLevel='secondaryES';	
}
var infoG='<svg height="22px" width="11px" viewBox="0 0 16 30"><g id="info_symbol"><path fill="#fff" d="M12.992,7.796L6.137,21.391c0,0-1.408,1.721,0.471,3.17c1.877,1.451,4.037,0,4.037,0S10.477,30,5.633,30 c-4.846,0-5.598-3.897-5.598-3.897s-0.283-2.901,0.752-4.712c1.031-1.813,3.096-5.348,3.096-5.348l-3.191-0.09l7.043-8.156H12.992z"></path><path fill="#fff" d="M16,2.63c0,1.45-1.559,2.627-3.475,2.627c-1.92,0-3.479-1.177-3.479-2.627c0-1.45,1.559-2.63,3.479-2.63 C14.441,0,16,1.18,16,2.63z"></path></g></svg>',arra147='<svg width="147px" height="36px" viewBox="0 0 147 36"><g><g id="b"><polygon id="bgFill" fill="'+groundCol+'" points="1.5,34.438 1.5,1.563 135.521,1.563 145.256,17.614 135.502,34.438"></polygon><path id="bgStroke" fill="'+strokeCol+'" d="M134.677,3.063L143.514,18l-8.875,14.938H3V3.063H134.677 M136.366,0.063H0v35.875h136.366L147,18L136.366,0.063L136.366,0.063z"></path></g><polygon id="arraFill" fill="'+strokeCol+'" points="132.53,30.475 124.1,30.475 131.587,18 124.1,5.526 132.53,5.526 140.019,18"></polygon></g></svg>',vocG='<svg width="20px" height="19px" viewBox="0 0 20 19"><path id="vGra" fill="'+strokeCol+'" d="M20,0v0.507c-0.685,0.11-1.295,0.472-1.831,1.083c-0.388,0.458-0.967,1.53-1.733,3.219L9.958,19H9.5 L3.051,4.233c-0.777-1.781-1.297-2.826-1.56-3.137C1.228,0.787,0.73,0.589,0,0.507V0h9.015v0.507H8.71 c-0.814,0-1.369,0.102-1.664,0.301C6.833,0.945,6.727,1.146,6.727,1.411c0,0.164,0.037,0.357,0.111,0.583 c0.073,0.223,0.323,0.824,0.749,1.8l4.008,9.247l3.718-8.233c0.443-0.994,0.716-1.661,0.818-2c0.101-0.336,0.152-0.624,0.152-0.863 c0-0.274-0.074-0.515-0.223-0.726c-0.148-0.209-0.365-0.37-0.651-0.479c-0.398-0.155-0.926-0.233-1.581-0.233V0H20z"></path></svg>',navB='<div id="info"><div id="infoButton"><div id="infoGraphic">'+infoG+'</div></div></div><a href="'+lotopicURL+'" title ="'+startToolTip+'"><div class="menuArrowSign" id="menuArrowSign1"><div class="ArrowSignInMenu">'+arra147+'</div><div class="arraLabel" id="nL1">'+startButtonLabel+'</div></div></a><a href="'+lolessonURL+'" title ="'+lessonToolTip+'"><div class="menuArrowSign" id="menuArrowSign2"><div class="ArrowSignInMenu">'+arra147+'</div><div class="arraLabel" id="nL2">'+lessonButtonLabel+'</div></div></a><a href="'+logamesURL+'" title ="'+gamesToolTip+'"><div class="menuArrowSign" id="menuArrowSign3"><div class="ArrowSignInMenu">'+arra147+'</div><div class="arraLabel" id="nL3">'+gamesButtonLabel+'</div></div></a><a href="'+lotestURL+'" title ="'+testToolTip+'"><div class="menuArrowSign" id="menuArrowSign4"><div class="ArrowSignInMenu">'+arra147+'</div><div class="arraLabel" id="nL4">'+testButtonLabel+'</div></div></a><a href="'+vocCorrectedLink+'" title="'+vocToolTip+'"><div id="vocB"><div id="vocG">'+vocG+'</div></div></a>',arraSign,lotopicURL="topics.html",lolessonURL="lessons.html",logamesURL="games.html",lotestURL="tests.html",vocabLink="vocab.html",tT=[lotopicURL,lolessonURL,logamesURL,lotestURL,vocabLink];


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		
		//console.log(navB);
		$("#navSign").html(navB);
		//modStrings=jQuery.parseJSON(modStringsEN);
		//
		//console.log(modStrings[0]);
        document.addEventListener('deviceready', this.onDeviceReady, false);
		//*****comment out next line when publish app *****
		//$( document ).ready( this.onBrowserTestReady);
    },
    // deviceready Event Handler
    //*****comment out next line when publish app *****
	//onBrowserTestReady: function() {$.ajax({url: "http://static-iclanguage.net/temp/topics.php",data:'1',type:'POST',dataType:'html', success: function(data){$("#game").html(data);}});},
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
	
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		// Load first page into container
		loadPage("topics","onEnd","onStart");
		//window.location.href="topics.html"
    }
};

/**
 * Load page into url
 *
 * @param url           The url to load
 */
function loadPage(url, onleave, onenter) {
	var jsurl="js/"+url+".js";
	var hurl=url+".html";
	
    // If onleave function specified
    //if (onleave) { onleave(url);}

    var xmlhttp = new XMLHttpRequest();
    // Callback function when XMLHttpRequest is ready
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState === 4){
            if (xmlhttp.status === 200) {
                document.getElementById('game').innerHTML = xmlhttp.responseText;

                // If onenter function specified
                if (onenter) { onenter(url); }
				//dynamicJSload("js\\topics.js");
				
            }
            else {
                document.getElementById('game').innerHTML = "Error loading page " + url;
            }
        }
    };
    xmlhttp.open("GET", hurl , true);
    xmlhttp.send();
}
function onStart(url){
	//load js file associated with this page
	landed();
}


function changeCol(myCol){document.getElementById("bgColour").style.setProperty("background-color",myCol)}

function dynamicJSload(url)
{
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState)
    {
        script.onreadystatechange = function(){
            if (script.readyState == "complete" || script.readyState == "loaded"){
                script.onreadystatechange = null;
            }
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}