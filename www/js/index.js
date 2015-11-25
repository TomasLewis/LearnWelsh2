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
				//dynamicJSload("js/topics.js");
                // If onenter function specified
                if (onenter) { onenter(url); }
				
				
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

