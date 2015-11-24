//	/home/iclangua/public_html/resources/jScript/appNavB_1511.js

function domReady(){function e(e){chngArra(e.target,"#fff","#000")}function t(e){chngArra(e.target,groundCol,strokeCol)}function n(e){chngArra(e.target,"#fff","#000")}function r(e){chngArra(e.target,groundCol,strokeCol)}function o(){playClick();var e,t=this.id;("switch_en"==t||"switch_es"==t)&&("switch_en"==t?i="/en":"switch_es"==t&&(i="/es"),e=new XMLHttpRequest,e.onreadystatechange=function(){4==e.readyState&&(window.location.href=i)},e.open("GET","/lo_Save_Status.php?langChng=1",!0),e.send())}

var d,l=document.getElementsByClassName("menuArrowSign"),c=document.getElementsByClassName("arraWrap"),a="",s='<div id="curPgB"><div id="cornerFlag"></div></div>';
/*
document.getElementById("navSign").addEventListener("click",playClick),(-1!=currentFile.indexOf(tT[0])||-1!=currentFile.indexOf(tT[1])||-1!=currentFile.indexOf(tT[2])||-1!=currentFile.indexOf(tT[3]))&&(-1!=currentFile.indexOf(tT[0])?i="1":-1!==currentFile.indexOf(tT[1])?i="2":-1!=currentFile.indexOf(tT[2])?i="3":-1!=currentFile.indexOf(tT[3])&&(i="4"),i="menuArrowSign"+i,a=document.getElementById(i),a.removeEventListener("mouseenter",e),a.removeEventListener("mouseleave",t),a.removeEventListener("click",e),a.getElementsByClassName("ArrowSignInMenu")[0].outerHTML=s,j=document.getElementById(i).getElementsByClassName("arraLabel")[0],j.style.color="#000",j.style.textAlign="right"),d=document.getElementById("vocB"),d.addEventListener("mouseenter",function(){chngVocBtn(this,"#000");this.style.borderColor="#000",this.style.backgroundColor="#fff"},!1),d.addEventListener("mouseleave",function(){chngVocBtn(this,"#fff");this.style.borderColor=strokeCol,this.style.backgroundColor=groundCol},!1),d.addEventListener("click touchstart",function(){chngVocBtn(this,"#000");this.style.borderColor="#000",this.style.backgroundColor="#fff"});
*/
}



function playMyAudio(e){if(window.HTMLAudioElement)try{var t=document.getElementById("mAu"),n=e;n!==currentFile&&(t.src=n,currentFile=n),t.play()}catch(r){window.console&&console.error("Error:"+r)}}

function playClick(){playMyAudio("http://resources-iclanguage.net/sounds/interface/click1.mp3")}

function chngArra(e,t,n){e.children[1].style.setProperty("color",n),mArraSVG=e.children[0].children[0],mArraSVG.getElementById("bgFill").style.setProperty("fill",t),mArraSVG.getElementById("bgStroke").style.setProperty("fill",n),mArraSVG.getElementById("arraFill").style.setProperty("fill",n)}

function chngVocBtn(e,n){mArraSVG=e.children[0].children[0],mArraSVG.getElementById("vGra").style.setProperty("fill",n)}

document.addEventListener?document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),domReady()},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),domReady())});