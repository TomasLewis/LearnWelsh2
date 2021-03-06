

function switchLevel(){
setLevelCols();//in index.html
//navBar
$("#navSign").css("background-color",groundCol);
chngArraSign(".menuArrowSign",groundCol,strokeCol);
$("#vocB").css("border-color",strokeCol);
$("#vGra").css("fill",strokeCol);
}

function preload(e,t,n){function r(e){var t=new Image;t.onload=s;t.src=e;return t}function s(){u++;if(u>=o){$("#loading").css("visibility","hidden");n()}}$("#loading").css("visibility","visible");myArray=e.split(",");i=myArray.length;var o=i,u=0;for(j=0;j<o;j++){if(t=="small"){e=resourceurl+"visuals/topics-sc/"+myArray[j]+".png"}else{e=resourceurl+"visuals/topics-big-c/"+myArray[j]+".png"}r(e)}}

function shuffle(e){for(var t,n,r=e.length;r;t=Math.floor(Math.random()*r),n=e[--r],e[r]=e[t],e[t]=n){}return e}
function returnRandom(e){var t=Math.floor(Math.random()*e);return t}
function returnDifferentRandom(e,t){rndNum=Math.floor(Math.random()*e);if(rndNum!==t){return rndNum}returnDifferentRandom(e,t)}

function calcDim(e,t){return Math.round(t*(e/100))}
function getRows(e){var t=$(e).height();var n=$(e).css("line-height");n=parseFloat(n);var r=t/n;return Math.ceil(r)}
function setStatusString(e){$("#statusBar").text(e)}
function setDefaultString(){$("#statusBar").text(defaultStatusString)}

function reduceTextLines(e,t){var n=getRows(e);if(n>t){var r=$(e).css("font-size");r=parseFloat(r);for(var i=r;i>8;i--){$(e).css({"font-size":i+"px"});n=getRows(e);if(n<=t){return i}}}}

function reduceFontToFitHeight(e,t,n){var r=e.scrollHeight;if(r>t){for(var i=n;i>8;i--){e.style.fontSize=String(i+"px");r=e.scrollHeight;if(r<t){var s=i;return s}}}}

function reduceToOneLine(e){
var sH,h,fS,i;
sH=$(e)[0].scrollHeight;
h=$(e).height();
fS=$(e).css("font-size");
fS=parseInt(fS);
if(sH>h){for(i=fS;i>10;i--){
$(e).css({"font-size":i+"px"});
sH=$(e)[0].scrollHeight;
if(sH<=h){
return}
}
}}
/*
function reduceToHtWdth(e){
var sH,h,fS,i,sW,w,j,k;
sH=$(e)[0].scrollHeight;
h=$(e).height();
sW=$(e)[0].scrollWidth;w=$(e).width();
k=$(e).css("font-size");
fS=parseInt(k);
//console.log('reduceToHtWdth1, fS='+fS+', sH= '+sH+', h='+h+' sW = '+sW);
if(sH>h||sW>w){for(i=fS;i>10;i--){
$(e).css({"font-size":i+"px"});
sH=$(e)[0].scrollHeight;
sW=$(e)[0].scrollWidth;
console.log('i='+i+' sH = '+sH);
if(sH<=h){if(sW<=w){
//console.log('reduceToHtWdth, fs='+i+', sH= '+sH+', sW = '+sW);
return i}}
}
}}
*/
function reduceToHtWdth(e){
var t,n,r,i,s,o,j;
t=$(e)[0].scrollHeight;
n=$(e).height();
s=$(e)[0].scrollWidth;o=$(e).width();
r=parseInt($(e).css("font-size"));

if(t>n||s>o){for(i=r;i>10;i--){
j=Math.floor(i*1.3);
$(e).css({"font-size":i+"px","line-height":j+"px"});
t=$(e)[0].scrollHeight;
s=$(e)[0].scrollWidth;
if(t<=n){if(s<=o){console.log('reduceToHtWdth, fs='+i+', lh='+j);return i}}
}

}}

function arrowSign(e,t,n,r,i){var s;if(r==0){s='<svg class="svgShadow" width="'+e+'px" height="'+e*(31/150)+'px" viewBox="0 0 150 31"><g id="svgArrow"';if(i==1){s+=' transform="translate('+150+',0)scale(-1,1)"'}s+='><g><polygon id="bgFill" fill="'+n+'" points="1,30 1,1 140.479,1 148.846,15.166 140.465,30 "/><path id="bgStroke" fill="'+t+'" d="M139.907,2l7.782,13.177L139.882,29H2V2H139.907 M141.049,0H0v31h141.049L150,15.154L141.049,0L141.049,0z"/></g><polygon id="arraFill" fill="'+t+'" points="137.721,27 130,27 136,15 130,4 137.721,4 144,15"/></g></svg>'}else{s='<svg width="'+e+'px" height="'+e*(31/180)+'px" viewBox="0 0 180 31"><g id="svgArrow"';if(i==1){s+=' transform="translate('+180+',0)scale(-1,1)"'}s+='><g><polygon id="bgFill" fill="'+n+'" points="1,30 1,1 170.479,1 178.846,15.165 170.465,30"/><path id="bgStroke" fill="'+t+'" d="M169.908,2l7.781,13.177L169.883,29H2V2H169.908 M171.049,0H0v31h171.049L180,15.154L171.049,0L171.049,0z"/></g><polygon id="arraFill" fill="'+t+'" points="167.721,27 160,27 166,15 160,4 167.721,4 174.5,15"/></g></svg>'}return s}
function arraSm(e,t,n){var r='<svg width="'+e+'" height="'+e*.5+'" viewBox="0 0 40 20"><g id="sA"';if(n==1){r+=' transform="translate('+40+',0)scale(-1,1)"'}r+='><path id="arraSmFill" fill="'+t+'" d="M27.01,19.565L40,10L27.01,0.435c-0.687-0.545-1.431-0.545-1.889-0.182 c-0.572,0.424-0.857,1.151-0.572,1.999l1.202,3.934H0v7.628h25.751l-1.202,3.936c-0.285,0.847,0,1.574,0.572,1.997 C25.579,20.11,26.323,20.11,27.01,19.565z"/></g></svg>';return r}
function chngArraSign(e,t,n){$(e).find("#bgFill").css("fill",t).end().find("#bgStroke").css("fill",n).end().find("#arraFill").css("fill",n).end().find(".arraLabel,.arraLabel206,.arraLabel206a").css("color",n)}
function spinner(){var e='<svg width="90px" height="90px" viewBox="0 0 86 86"><g><g><g><path fill="#C43418" d="M68.57,42.951c0-7.039-2.444-13.102-7.431-18.09c-4.987-4.986-11.051-7.431-18.09-7.431 c-7.14,0-13.201,2.444-18.188,7.431c-5.085,4.988-7.529,11.051-7.529,18.09c0,7.139,2.444,13.201,7.529,18.188 c4.987,5.085,11.049,7.529,18.188,7.529c7.039,0,13.103-2.444,18.09-7.529C66.126,56.152,68.57,50.089,68.57,42.951z"/></g><g><path fill="none" stroke="#CCCCCC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M80.5,42.951c0-10.267-3.715-19.165-10.951-26.498C62.215,9.215,53.316,5.5,43.05,5.5c-10.366,0-19.264,3.715-26.5,10.952 C9.216,23.786,5.5,32.684,5.5,42.951c0,10.366,3.716,19.264,11.05,26.598C23.786,76.785,32.684,80.5,43.05,80.5 c4.791,0,9.387-0.88,13.885-2.737c4.303-1.662,8.214-4.204,11.636-7.334"/></g><g><g><path fill="#999999" d="M43.244,18.505c0-1.368-0.391-2.444-1.173-3.324c-0.88-1.076-2.054-1.565-3.521-1.565 c-1.564,0-2.737,0.489-3.618,1.565c-0.782,0.88-1.173,1.956-1.173,3.324c0,1.369,0.391,2.444,1.173,3.325 c0.881,1.075,2.054,1.563,3.618,1.563c1.467,0,2.641-0.488,3.521-1.563C42.854,20.95,43.244,19.875,43.244,18.505z"/></g></g><g><g><path fill="#999999" d="M16.159,35.618c0.879,1.076,1.955,1.564,3.52,1.564s2.738-0.488,3.52-1.564 c0.783-0.88,1.272-2.054,1.272-3.324c0-1.271-0.489-2.444-1.272-3.423c-0.781-0.978-1.955-1.467-3.52-1.467 s-2.641,0.489-3.52,1.467c-0.783,0.979-1.174,2.151-1.174,3.423C14.985,33.564,15.376,34.738,16.159,35.618z"/></g></g><g><g><path fill="#999999" d="M19.483,61.334c0.782,1.075,2.054,1.564,3.521,1.564s2.64-0.489,3.617-1.564 c0.783-0.88,1.174-1.955,1.174-3.324c0-1.37-0.391-2.445-1.174-3.325c-0.978-1.075-2.15-1.564-3.617-1.564 s-2.738,0.489-3.521,1.564c-0.88,0.88-1.174,1.955-1.174,3.325C18.31,59.379,18.604,60.455,19.483,61.334z"/></g></g><g><g><path fill="#999999" d="M62.117,58.107c0.88,1.076,2.054,1.565,3.521,1.565c1.466,0,2.737-0.489,3.618-1.565 c0.781-0.879,1.075-1.955,1.075-3.324c0-1.271-0.294-2.444-1.075-3.422c-0.881-0.978-2.152-1.467-3.618-1.467 c-1.467,0-2.641,0.489-3.521,1.467s-1.271,2.151-1.271,3.422C60.846,56.152,61.237,57.228,62.117,58.107z"/></g></g><g><g><path fill="#999999" d="M43.929,70.917c0.782,1.075,2.055,1.564,3.521,1.564c1.563,0,2.639-0.489,3.52-1.564 c0.881-0.881,1.271-2.054,1.271-3.325c0-1.368-0.39-2.444-1.271-3.324c-0.881-1.076-1.956-1.564-3.52-1.564 c-1.467,0-2.739,0.488-3.521,1.564c-0.782,0.88-1.271,1.956-1.271,3.324C42.658,68.864,43.146,70.037,43.929,70.917z"/></g></g></g><g><g><path fill="#999999" d="M59.379,31.902c0.88,1.076,2.054,1.565,3.618,1.565c1.467,0,2.641-0.489,3.521-1.565 c0.782-0.88,1.173-2.053,1.173-3.324c0-1.369-0.391-2.444-1.173-3.423c-0.88-0.978-2.054-1.466-3.521-1.466 c-1.564,0-2.738,0.488-3.618,1.466c-0.782,0.979-1.173,2.054-1.173,3.423C58.206,29.849,58.597,31.022,59.379,31.902z"/></g></g></g></svg>';return e}
function translate(e,t){if(t==1){t=ilabelsarray[e]}else{t=labelsarray[e]}return t}
function star(e,t,n){var r='<svg width="'+e+'px" height="'+e+'px" viewBox="0 0 40 40"><g><polygon fill="'+t+'" points="10.69,25.384 1.046,15.866 14.133,13.65 19.785,1.171 25.818,13.456 38.964,15.226 29.618,25.064 32.064,38.662 20.266,32.426 8.663,39.055"/><path fill="'+n+'" d="M19.803,2.343l5.449,11.094l0.235,0.479l0.529,0.071l11.911,1.604l-8.498,8.945l-0.349,0.368l0.089,0.499l2.22,12.338 l-10.648-5.628l-0.486-0.257l-0.478,0.273L9.309,38.11l1.839-12.402l0.074-0.502l-0.361-0.356l-8.769-8.654l11.862-2.009 l0.524-0.089l0.22-0.484L19.803,2.343 M19.766,0l-5.979,13.201L0,15.536l10.158,10.026L8.018,40l12.257-7.004l12.463,6.587 l-2.583-14.358L40,14.861l-13.851-1.865L19.766,0L19.766,0z"/></g></svg>';return r}
function tick(e,t){var n='<svg width="'+e+'px" height="'+e*.8+'px" viewBox="0 0 30 24"><polygon fill="'+t+'" points="0,13.589 5.043,8.64 10.599,14.093 24.957,0 30,4.944 10.604,24"/></svg>';return n}
function cross(e,t){var n='<svg width="'+e+'px" height="'+e+'px" viewBox="0 0 24 24"><polygon fill="'+t+'" points="11.994,16.562 4.548,24 0,19.452 7.445,12.001 0,4.556 4.548,0 11.994,7.446 19.444,0.005 23.995,4.556 16.555,12.001 24,19.452 19.444,24"/></svg>';return n}
function speaker(e,t){var n='<svg width="'+e+'px" height="'+e*.94+'px" viewBox="0 0 66 62"><polygon class="sp1" fill="'+t+'" points="0.001,21.335 0.001,40.716 13.36,40.716 30.021,53.691 30.021,8.361 13.361,21.335 "/><path class="sp2" fill="'+t+'" d="M50.135,0.002l-3.918,6.146C53.346,9.21,58.751,19.36,58.751,31.027c0,11.567-5.313,21.643-12.353,24.795 l3.832,6.177c9.209-4.685,15.769-16.782,15.769-30.972C65.999,16.786,59.395,4.649,50.135,0.002z"/><path class="sp3" fill="'+t+'" d="M42.516,11.955l-3.834,6.018c3.157,2.809,5.299,7.659,5.299,13.054c0,5.235-2.016,9.963-5.022,12.808 l3.78,6.09c5.109-4.026,8.49-10.983,8.49-18.898C51.229,22.997,47.749,15.954,42.516,11.955z"/></svg>';return n}
function phone(e,t){var n='<svg width="'+e+'px" height="'+Math.floor(e*2.647)+'px" viewBox="0 0 17 45"><g><path class="ph1" fill="'+t+'" d="M16.361,1.31c0.579,0.332,0.772,0.763,0.547,1.526l-2.189,9.42c-0.103,0.478-0.489,1.134-1.158,1.028 l-1.867-0.431l2.607-12.239L16.361,1.31z"/><path class="ph1" fill="'+t+'" d="M10.276,32.455l2.343,12.458c-0.979,0.159-2.781,0.106-4.532-0.212c-1.648-0.318-3.296-0.85-4.224-1.486 C1.648,39.182,0,30.691,0,22.571c0-8.438,1.648-16.61,3.863-20.644c0.928-0.637,2.898-1.394,4.546-1.712 c1.751-0.318,3.264-0.245,4.54-0.033l-2.673,12.438c-1.069-0.211-0.927-0.299-1.803-0.299c-1.03,0-1.835,0.995-1.835,2.057 L6.593,30.902c0,1.063,0.741,1.918,1.719,1.918C9.188,32.82,9.504,32.614,10.276,32.455z"/><path class="ph1" fill="'+t+'" d="M14.682,33.131l1.969,9.738c0.053,0.531-0.283,1.182-0.836,1.477l-1.803,0.498l-2.318-12.455l1.803-0.266 C14.165,32.018,14.577,32.654,14.682,33.131z"/></g></svg>';return n}
function triArra(e,t,n){var r='<svg width="'+e+'px" height="'+Math.floor(e*1.43)+'px" viewBox="0 0 14 20"><g id="tA"';if(n==1){r+=' transform="translate('+14+',0)scale(-1,1)"'}r+='><polyline id="bgFill" fill="'+t+'" points="0,20 0,0 14,10 "/></svg>';return r}

function playInterface(i){
var t=soundURL+"interface/"+i+".mp3";
if(rippleTest==true){
mySound=new Howl({urls:[t],autoplay:true})
}else{
playMediaAudio(t);
}
}

function playMediaAudio(url) {console.log('playMediaAudio '+url);
    var my_media = new Media(url,
            // success callback
             function () { console.log("playAudio():Audio Success");my_media.release(); },
            // error callback
             function (err) { console.log("playAudio():Audio Error: " + err); }
    );
           // Play audio
    my_media.play();
}
function playAudio(e,t){if(e=="i"){t=soundURL+"interface/"+t}else if(e=="w"){t=soundURL+"winmusic/"+t}else if(e=="g"){t=soundURL+"games/"+t}else{t=soundURL+ilanguage+"/"+t+".mp3"}
if(rippleTest==true){
mySound=new Howl({urls:[t],autoplay:true})
} else {
playMediaAudio(t);
}

}

//function insertJQRollover(e,t){$("selector").on("mouseenter",function(){$("#statusBar").text(t)}).on("mouseleave",function(){$("#statusBar").text(defaultStatusString)}).on("click",function(){clickS.play()})}

!function(){var e={},o=null,n=!0,t=!1;try{"undefined"!=typeof AudioContext?o=new AudioContext:"undefined"!=typeof webkitAudioContext?o=new webkitAudioContext:n=!1}catch(r){n=!1}if(!n)if("undefined"!=typeof Audio)try{new Audio}catch(r){t=!0}else t=!0;if(n){var a="undefined"==typeof o.createGain?o.createGainNode():o.createGain();a.gain.value=1,a.connect(o.destination)}var i=function(e){this._volume=1,this._muted=!1,this.usingWebAudio=n,this.ctx=o,this.noAudio=t,this._howls=[],this._codecs=e,this.iOSAutoEnable=!0};i.prototype={volume:function(e){var o=this;if(e=parseFloat(e),e>=0&&1>=e){o._volume=e,n&&(a.gain.value=e);for(var t in o._howls)if(o._howls.hasOwnProperty(t)&&o._howls[t]._webAudio===!1)for(var r=0;r<o._howls[t]._audioNode.length;r++)o._howls[t]._audioNode[r].volume=o._howls[t]._volume*o._volume;return o}return n?a.gain.value:o._volume},mute:function(){return this._setMuted(!0),this},unmute:function(){return this._setMuted(!1),this},_setMuted:function(e){var o=this;o._muted=e,n&&(a.gain.value=e?0:o._volume);for(var t in o._howls)if(o._howls.hasOwnProperty(t)&&o._howls[t]._webAudio===!1)for(var r=0;r<o._howls[t]._audioNode.length;r++)o._howls[t]._audioNode[r].muted=e},codecs:function(e){return this._codecs[e]},_enableiOSAudio:function(){var e=this;if(!o||!e._iOSEnabled&&/iPhone|iPad|iPod/i.test(navigator.userAgent)){e._iOSEnabled=!1;var n=function(){var t=o.createBuffer(1,1,22050),r=o.createBufferSource();r.buffer=t,r.connect(o.destination),"undefined"==typeof r.start?r.noteOn(0):r.start(0),setTimeout(function(){(r.playbackState===r.PLAYING_STATE||r.playbackState===r.FINISHED_STATE)&&(e._iOSEnabled=!0,e.iOSAutoEnable=!1,window.removeEventListener("touchstart",n,!1))},0)};return window.addEventListener("touchstart",n,!1),e}}};var u=null,d={};t||(u=new Audio,d={mp3:!!u.canPlayType("audio/mpeg;").replace(/^no$/,""),opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")});var l=new i(d),f=function(e){var t=this;t._autoplay=e.autoplay||!1,t._buffer=e.buffer||!1,t._duration=e.duration||0,t._format=e.format||null,t._loop=e.loop||!1,t._loaded=!1,t._sprite=e.sprite||{},t._src=e.src||"",t._pos3d=e.pos3d||[0,0,-.5],t._volume=void 0!==e.volume?e.volume:1,t._urls=e.urls||[],t._rate=e.rate||1,t._model=e.model||null,t._onload=[e.onload||function(){}],t._onloaderror=[e.onloaderror||function(){}],t._onend=[e.onend||function(){}],t._onpause=[e.onpause||function(){}],t._onplay=[e.onplay||function(){}],t._onendTimer=[],t._webAudio=n&&!t._buffer,t._audioNode=[],t._webAudio&&t._setupAudioNode(),"undefined"!=typeof o&&o&&l.iOSAutoEnable&&l._enableiOSAudio(),l._howls.push(t),t.load()};if(f.prototype={load:function(){var e=this,o=null;if(t)return void e.on("loaderror");for(var n=0;n<e._urls.length;n++){var r,a;if(e._format)r=e._format;else{if(a=e._urls[n],r=/^data:audio\/([^;,]+);/i.exec(a),r||(r=/\.([^.]+)$/.exec(a.split("?",1)[0])),!r)return void e.on("loaderror");r=r[1].toLowerCase()}if(d[r]){o=e._urls[n];break}}if(!o)return void e.on("loaderror");if(e._src=o,e._webAudio)_(e,o);else{var u=new Audio;u.addEventListener("error",function(){u.error&&4===u.error.code&&(i.noAudio=!0),e.on("loaderror",{type:u.error?u.error.code:0})},!1),e._audioNode.push(u),u.src=o,u._pos=0,u.preload="auto",u.volume=l._muted?0:e._volume*l.volume();var f=function(){e._duration=Math.ceil(10*u.duration)/10,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play(),u.removeEventListener("canplaythrough",f,!1)};u.addEventListener("canplaythrough",f,!1),u.load()}return e},urls:function(e){var o=this;return e?(o.stop(),o._urls="string"==typeof e?[e]:e,o._loaded=!1,o.load(),o):o._urls},play:function(e,n){var t=this;return"function"==typeof e&&(n=e),e&&"function"!=typeof e||(e="_default"),t._loaded?t._sprite[e]?(t._inactiveNode(function(r){r._sprite=e;var a=r._pos>0?r._pos:t._sprite[e][0]/1e3,i=0;t._webAudio?(i=t._sprite[e][1]/1e3-r._pos,r._pos>0&&(a=t._sprite[e][0]/1e3+a)):i=t._sprite[e][1]/1e3-(a-t._sprite[e][0]/1e3);var u,d=!(!t._loop&&!t._sprite[e][2]),f="string"==typeof n?n:Math.round(Date.now()*Math.random())+"";if(function(){var o={id:f,sprite:e,loop:d};u=setTimeout(function(){!t._webAudio&&d&&t.stop(o.id).play(e,o.id),t._webAudio&&!d&&(t._nodeById(o.id).paused=!0,t._nodeById(o.id)._pos=0,t._clearEndTimer(o.id)),t._webAudio||d||t.stop(o.id),t.on("end",f)},1e3*i),t._onendTimer.push({timer:u,id:o.id})}(),t._webAudio){var _=t._sprite[e][0]/1e3,s=t._sprite[e][1]/1e3;r.id=f,r.paused=!1,p(t,[d,_,s],f),t._playStart=o.currentTime,r.gain.value=t._volume,"undefined"==typeof r.bufferSource.start?d?r.bufferSource.noteGrainOn(0,a,86400):r.bufferSource.noteGrainOn(0,a,i):d?r.bufferSource.start(0,a,86400):r.bufferSource.start(0,a,i)}else{if(4!==r.readyState&&(r.readyState||!navigator.isCocoonJS))return t._clearEndTimer(f),function(){var o=t,a=e,i=n,u=r,d=function(){o.play(a,i),u.removeEventListener("canplaythrough",d,!1)};u.addEventListener("canplaythrough",d,!1)}(),t;r.readyState=4,r.id=f,r.currentTime=a,r.muted=l._muted||r.muted,r.volume=t._volume*l.volume(),setTimeout(function(){r.play()},0)}return t.on("play"),"function"==typeof n&&n(f),t}),t):("function"==typeof n&&n(),t):(t.on("load",function(){t.play(e,n)}),t)},pause:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.pause(e)}),o;o._clearEndTimer(e);var n=e?o._nodeById(e):o._activeNode();if(n)if(n._pos=o.pos(null,e),o._webAudio){if(!n.bufferSource||n.paused)return o;n.paused=!0,"undefined"==typeof n.bufferSource.stop?n.bufferSource.noteOff(0):n.bufferSource.stop(0)}else n.pause();return o.on("pause"),o},stop:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.stop(e)}),o;o._clearEndTimer(e);var n=e?o._nodeById(e):o._activeNode();if(n)if(n._pos=0,o._webAudio){if(!n.bufferSource||n.paused)return o;n.paused=!0,"undefined"==typeof n.bufferSource.stop?n.bufferSource.noteOff(0):n.bufferSource.stop(0)}else isNaN(n.duration)||(n.pause(),n.currentTime=0);return o},mute:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.mute(e)}),o;var n=e?o._nodeById(e):o._activeNode();return n&&(o._webAudio?n.gain.value=0:n.muted=!0),o},unmute:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.unmute(e)}),o;var n=e?o._nodeById(e):o._activeNode();return n&&(o._webAudio?n.gain.value=o._volume:n.muted=!1),o},volume:function(e,o){var n=this;if(e=parseFloat(e),e>=0&&1>=e){if(n._volume=e,!n._loaded)return n.on("play",function(){n.volume(e,o)}),n;var t=o?n._nodeById(o):n._activeNode();return t&&(n._webAudio?t.gain.value=e:t.volume=e*l.volume()),n}return n._volume},loop:function(e){var o=this;return"boolean"==typeof e?(o._loop=e,o):o._loop},sprite:function(e){var o=this;return"object"==typeof e?(o._sprite=e,o):o._sprite},pos:function(e,n){var t=this;if(!t._loaded)return t.on("load",function(){t.pos(e)}),"number"==typeof e?t:t._pos||0;e=parseFloat(e);var r=n?t._nodeById(n):t._activeNode();if(r)return e>=0?(t.pause(n),r._pos=e,t.play(r._sprite,n),t):t._webAudio?r._pos+(o.currentTime-t._playStart):r.currentTime;if(e>=0)return t;for(var a=0;a<t._audioNode.length;a++)if(t._audioNode[a].paused&&4===t._audioNode[a].readyState)return t._webAudio?t._audioNode[a]._pos:t._audioNode[a].currentTime},pos3d:function(e,o,n,t){var r=this;if(o="undefined"!=typeof o&&o?o:0,n="undefined"!=typeof n&&n?n:-.5,!r._loaded)return r.on("play",function(){r.pos3d(e,o,n,t)}),r;if(!(e>=0||0>e))return r._pos3d;if(r._webAudio){var a=t?r._nodeById(t):r._activeNode();a&&(r._pos3d=[e,o,n],a.panner.setPosition(e,o,n),a.panner.panningModel=r._model||"HRTF")}return r},fade:function(e,o,n,t,r){var a=this,i=Math.abs(e-o),u=e>o?"down":"up",d=i/.01,l=n/d;if(!a._loaded)return a.on("load",function(){a.fade(e,o,n,t,r)}),a;a.volume(e,r);for(var f=1;d>=f;f++)!function(){var e=a._volume+("up"===u?.01:-.01)*f,n=Math.round(1e3*e)/1e3,i=o;setTimeout(function(){a.volume(n,r),n===i&&t&&t()},l*f)}()},fadeIn:function(e,o,n){return this.volume(0).play().fade(0,e,o,n)},fadeOut:function(e,o,n,t){var r=this;return r.fade(r._volume,e,o,function(){n&&n(),r.pause(t),r.on("end")},t)},_nodeById:function(e){for(var o=this,n=o._audioNode[0],t=0;t<o._audioNode.length;t++)if(o._audioNode[t].id===e){n=o._audioNode[t];break}return n},_activeNode:function(){for(var e=this,o=null,n=0;n<e._audioNode.length;n++)if(!e._audioNode[n].paused){o=e._audioNode[n];break}return e._drainPool(),o},_inactiveNode:function(e){for(var o=this,n=null,t=0;t<o._audioNode.length;t++)if(o._audioNode[t].paused&&4===o._audioNode[t].readyState){e(o._audioNode[t]),n=!0;break}if(o._drainPool(),!n){var r;if(o._webAudio)r=o._setupAudioNode(),e(r);else{o.load(),r=o._audioNode[o._audioNode.length-1];var a=navigator.isCocoonJS?"canplaythrough":"loadedmetadata",i=function(){r.removeEventListener(a,i,!1),e(r)};r.addEventListener(a,i,!1)}}},_drainPool:function(){var e,o=this,n=0;for(e=0;e<o._audioNode.length;e++)o._audioNode[e].paused&&n++;for(e=o._audioNode.length-1;e>=0&&!(5>=n);e--)o._audioNode[e].paused&&(o._webAudio&&o._audioNode[e].disconnect(0),n--,o._audioNode.splice(e,1))},_clearEndTimer:function(e){for(var o=this,n=0,t=0;t<o._onendTimer.length;t++)if(o._onendTimer[t].id===e){n=t;break}var r=o._onendTimer[n];r&&(clearTimeout(r.timer),o._onendTimer.splice(n,1))},_setupAudioNode:function(){var e=this,n=e._audioNode,t=e._audioNode.length;return n[t]="undefined"==typeof o.createGain?o.createGainNode():o.createGain(),n[t].gain.value=e._volume,n[t].paused=!0,n[t]._pos=0,n[t].readyState=4,n[t].connect(a),n[t].panner=o.createPanner(),n[t].panner.panningModel=e._model||"equalpower",n[t].panner.setPosition(e._pos3d[0],e._pos3d[1],e._pos3d[2]),n[t].panner.connect(n[t]),n[t]},on:function(e,o){var n=this,t=n["_on"+e];if("function"==typeof o)t.push(o);else for(var r=0;r<t.length;r++)o?t[r].call(n,o):t[r].call(n);return n},off:function(e,o){var n=this,t=n["_on"+e],r=o?o.toString():null;if(r){for(var a=0;a<t.length;a++)if(r===t[a].toString()){t.splice(a,1);break}}else n["_on"+e]=[];return n},unload:function(){for(var o=this,n=o._audioNode,t=0;t<o._audioNode.length;t++)n[t].paused||(o.stop(n[t].id),o.on("end",n[t].id)),o._webAudio?n[t].disconnect(0):n[t].src="";for(t=0;t<o._onendTimer.length;t++)clearTimeout(o._onendTimer[t].timer);var r=l._howls.indexOf(o);null!==r&&r>=0&&l._howls.splice(r,1),delete e[o._src],o=null}},n)var _=function(o,n){if(n in e)return o._duration=e[n].duration,void c(o);if(/^data:[^;]+;base64,/.test(n)){for(var t=atob(n.split(",")[1]),r=new Uint8Array(t.length),a=0;a<t.length;++a)r[a]=t.charCodeAt(a);s(r.buffer,o,n)}else{var i=new XMLHttpRequest;i.open("GET",n,!0),i.responseType="arraybuffer",i.onload=function(){s(i.response,o,n)},i.onerror=function(){o._webAudio&&(o._buffer=!0,o._webAudio=!1,o._audioNode=[],delete o._gainNode,delete e[n],o.load())};try{i.send()}catch(u){i.onerror()}}},s=function(n,t,r){o.decodeAudioData(n,function(o){o&&(e[r]=o,c(t,o))},function(e){t.on("loaderror")})},c=function(e,o){e._duration=o?o.duration:e._duration,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play()},p=function(n,t,r){var a=n._nodeById(r);a.bufferSource=o.createBufferSource(),a.bufferSource.buffer=e[n._src],a.bufferSource.connect(a.panner),a.bufferSource.loop=t[0],t[0]&&(a.bufferSource.loopStart=t[1],a.bufferSource.loopEnd=t[1]+t[2]),a.bufferSource.playbackRate.value=n._rate};"function"==typeof define&&define.amd&&define(function(){return{Howler:l,Howl:f}}),"undefined"!=typeof exports&&(exports.Howler=l,exports.Howl=f),"undefined"!=typeof window&&(window.Howler=l,window.Howl=f)}();
/*
$(document).ready(function(){



$("#back").on("click",function(){clickS.play();location.reload()});

});

function goBack(e){location.reload()}
jQuery.cachedScript=function(e,t){t=$.extend(t||{},{dataType:"script",cache:true,url:e});return jQuery.ajax(t)}
*/


function gameEnd(){
//console.log('appAll.js, gameOver');
var mo=1,j=Math.floor(Math.random()*6+1);
if(rippleTest==true){
winHowl=new Howl({urls:[soundURL+"winmusic/music"+j+".mp3"],loop:true,});
}else{
winHowl=soundURL+"winmusic/music"+j+".mp3";
}
function cWinMusic(a){
if(a==1){
if(rippleTest==true){
winHowl.play();
}else{
playMediaAudio(winHowl)
}
}else{
winHowl.stop();
}
}

if(winMusic==1){
cWinMusic(1);
}else{
$("#gameOver_music").find(".onGreenBtn").css("border-color","#66CC66").find("#horn").css("fill","#66CC66");
}
var goDS=false,overlayStringsEN='["Click on PLAY to start the game, or change topic with the CHANGE TOPIC button","PLAY","CURRENT TOPIC","CHANGE<br />TOPIC","Click this button to go to the Start page to choose a new topic","GAME OVER","PLAY<br />again","do<br />TEST","Game over - choose an option from the top menu or the buttons above","Click this button to play this game again","Click this button to choose a new game to play","Click this button to take the tests for this topic","Click this button to switch the music on and off","CHANGE<br />game","Click on a topic from the list, or switch levels to see other topics"]';
overlayStrings=jQuery.parseJSON(overlayStringsEN);
$("#endTitle").text(overlayStrings[5]);
if(goDS==false){defaultStatusString=overlayStrings[8];setStatusString(defaultStatusString);goDS=true};

$("#gameOver_playagain").find(".onGreenBtn").html(overlayStrings[6]).on(pStart,function(){$(this).css("background-color","#000");setStatusString(overlayStrings[9])}).on(pEnd,function(){$(this).css("background-color",signGreen);setStatusString(defaultStatusString)}).on(pUp,function(){cWinMusic(0);loadPage(eGameName)});
$("#changegame").find(".onGreenBtn").html(overlayStrings[13]).on(pStart,function(){$(this).css("background-color","#000");setStatusString(overlayStrings[10])}).on(pEnd,function(){$(this).css("background-color",signGreen);setStatusString(defaultStatusString)}).on(pUp,function(){cWinMusic(0);playInterface("click1");loadPage("games")});
$("#gameOver_test").find(".onGreenBtn").html(overlayStrings[7]).on(pStart,function(){$(this).css("background-color","#000");setStatusString(overlayStrings[11])}).on(pEnd,function(){$(this).css("background-color",signGreen);setStatusString(defaultStatusString)}).on(pUp,function(){cWinMusic(0);playInterface("click1");loadPage("test")});

$("#gameOver_music").on(pStart,function(){setStatusString(overlayStrings[12])}).on(pEnd,function(){setStatusString(defaultStatusString)}).on(pUp,function(){
if(winMusic==1){
if (mo==1){
cWinMusic(0);
$(this).find(".onGreenBtn").css("border-color","#66CC66").find("#horn").css("fill","#66CC66");
winMusic=0;
}else{
cWinMusic(1);
$(this).find(".onGreenBtn").css("border-color","#fff").find("#horn").css("fill","#fff");
winMusic=1;
}
if(mo==1){mo=0}else{mo=1}
}else{
//was off, so now back on
cWinMusic(1);
$(this).find(".onGreenBtn").css("border-color","#fff").find("#horn").css("fill","#fff");
winMusic=1;mo=1;
}

});
}
