function startGame(){function t(){timerTime+=1,$("#sign_brown_time").text(timerTime+" "+sec)}function e(){mySound.stop(),hangStep=0,timerTime=0,myLettersArray=[],guessedLetters=[],op=.6,speed=4e4,$("#sign_brown_time").text("0 "+sec),defaultStatusString=modStrings[4],$("#statusBar").text(defaultStatusString),$("#bgHangMan").remove(),$("#bgHangBits").remove(),$("#winMan").remove(),$("#bgColour").css("background-color","#6699CC"),$("[id^=skyGrad]").attr("id","skyGrad"),html='<div id="cloud1">'+cloud+"</div>",$("#allClouds").html(html),h(),i=initHangM,$("#game").append(i),kb.appendTo("#game"),$("#gLetters").text(""),$("#letterCells").empty(),timerID=setInterval(t,1e3),s()}function a(){var t,e=0;for(j=0,t="primary"==level?10:20,suitableLabels=[],i=0;i<t;i++)labelsarray[i].length<21&&(e=1,suitableLabels.push(i));shuffle(suitableLabels),0==suitableLabels.length?(i=modStrings[10],alert(i),location.reload()):s()}function s(){for(i=suitableLabels.shift(),targetText=labelsarray[i],targetTextLength=targetText.length,m=40,targetTextLength>15&&(m=(670-5*targetTextLength-5)/targetTextLength),$("<style />",{text:".letterCell{width:"+m+"px;height:"+m+"px;}"}).appendTo("head"),myLettersArray=[],html="",i=0;i<targetTextLength;i++)myLettersArray.push("#"),html+='<div class="letterCell" id="letter'+i+'">'+(i+1)+"</div>";for($("#letterCells").append(html),k=m+5,i=k*targetTextLength-5,j=($("#game").width()-i)/2,i=0;i<targetTextLength;i++)$("#letter"+i).css("left",j),j+=k;for(i=0;i<targetTextLength;i++)m=targetText.charAt(i),(" "==m||"’"==m||"'"==m||"("==m||")"==m||":"==m||"-"==m||";"==m||","==m||"."==m)&&(" "==m?($("#letter"+i).text(" "),myLettersArray[i]=" "):"’"==m?($("#letter"+i).text("'"),myLettersArray[i]="'"):($("#letter"+i).text(m),myLettersArray[i]=m),$(".letterCell#letter"+i).css({border:"0"}));targetText=targetText.toUpperCase(),0==count&&n()}function r(){var t,e,a,s,r,n=[0,0],d=[];for(xLoc=250,"Spanish"==ilanguage||"SpanishLatAm"==ilanguage?(chars="ÁÉÍÓÚÜ?¿QWERTYUIOPASDFGHJKLÑZXCVBNM,.",d=[8,0,0,10,39,24,10,80,42,9,120,64]):"Italian"==ilanguage?(chars="ÌÍÚQWERTYUIOPÈÉASDFGHJKLÒÀÙZXCV BNM,.’",d=[3,0,0,12,39,24,12,80,42,11,120,64],xLoc=214):"French"==ilanguage?(chars="ÀÂÉÊÈËÎÏÔŒÛÜAZERTYUIOPÇŸQSDFGHJKLMÙWXCVBN?,.",d=[12,0,0,12,39,24,11,80,42,9,120,64]):"German"==ilanguage?(chars="1234567890ß?QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM,.",d=[12,0,0,11,39,24,11,80,42,9,120,64]):"Welsh"==ilanguage?(chars="ÂÊÎÔÛŴŶQWERTYUIOPASDFGHJKL;'ZXCVBNM,.?",d=[7,0,0,10,39,24,11,80,42,10,120,64]):"English"==ilanguage?(chars="1234567890-=QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,.?",d=[12,0,0,12,39,24,11,80,42,10,120,64]):(chars="ÀÂÉÊÈËÎÏÔŒÛÜAZERTYUIOPÇŸQSDFGHJKLMÙWXCVBN?,.",d=[12,0,0,12,39,24,11,80,42,9,120,64]),t=d.length/3,e=d[0],a=d[1],i=1;i<e;i++)n.push(42*i),n.push(a);for(r=1;t>r;r++)for(e=d[3*r],a=d[3*r+1],s=d[3*r+2],i=0;i<e;i++)n.push(s+42*i),n.push(a);return n}function n(){var t=r(),e=chars.length,a=[];for(i=0;i<e;i++)a.push(chars.charAt(i));for(html="",i=0;i<e;i++)html+='<div class="keyButton" id="key'+i+'">'+chars[i]+"</div>";for($("#keyboard").append(html),j=0,i=0;i<e;i++)$("#key"+i).css({left:t[j],top:t[j+1]}),j+=2;$("#keyboard").css("left",xLoc),$("#keyboard").on("click",function(t){if(i=t.target,clCh=$(i).text(),-1===guessedLetters.indexOf(clCh)){for(guessedLetters.push(clCh),k=0,i=0;i<targetTextLength;i++)targetText.charAt(i)==clCh&&(k+=1,$("#letter"+i).text(clCh).addClass("correct"),myLettersArray[i]=clCh);0==k?(hangStep+=1,wrong.play(),$("#gLetters").append(clCh+'<span class="redWrong"> X </span> '),i=c(sky1,-(10*hangStep)),$("#bgColour").css("background-color",i),j="skyGrad"+hangStep,$("[id^=skyGrad]").attr("id",j),$("#hang"+hangStep).css("visibility","visible"),op-=.052,$("#bgHangMan").css("opacity",op),html='<div id="cloud'+hangStep+'">'+cloud+"</div>",$("#allClouds").append(html),j=Math.floor(60*Math.random()),speed-=2e3,$("#cloud"+hangStep).css("top",j),h(),12==hangStep&&d()):highPop.play(),l()}else playAudio("i","ding.mp3")})}function d(){for(defaultStatusString=modStrings[7],$("#statusBar").text(defaultStatusString),kb=$("#keyboard").detach(),$("#gLetters").text(""),i=0;i<targetTextLength;i++)"#"==myLettersArray[i]&&(clCh=targetText.charAt(i),$("#letter"+i).text(clCh).addClass("redWrong"));src=soundURL+"games/HangSound.mp3",mySound=new Howl({urls:[src],autoplay:!0,loop:!0}),$("#bgHangBits").on("click",function(){mySound.stop()}),o("l")}function l(){for(i=0;i<targetTextLength;i++)if("#"==myLettersArray[i])return;defaultStatusString=modStrings[8],$("#statusBar").text(defaultStatusString),$("#bgColour").css("background-color","#6699CC"),$("[id^=skyGrad]").attr("id","skyGrad"),$("#allClouds").html('<div id="cloud1">'+cloud+"</div>"),h(),kb=$("#keyboard").detach(),$("#gLetters").text(""),$("#bgHangMan").remove(),$("#bgHangBits").remove(),playAudio("w","cheer1.mp3"),$("#game").append(winMan),$("#sad").css("visibility","hidden"),$("#glad").css("visibility","visible"),$("#nose").css("visibility","visible"),$("#hang1,#hang2,#hang3,#hang4,#hang5,#hang6,#hang7,#hang8,#hang9,#hang10,#hang11,#hang12").css("visibility","visible"),o("w")}function o(t){clearInterval(timerID),count+=1,suitableLabels.length<1?g():($("#endScr").css("visibility","visible"),$i=$("w"==t?"#meS":"#compS"),i=parseInt($i.text()),i+=1,$i.text(i))}function g(){mySound.stop(),i=$("#meS").text(),j=$("#compS").text(),$("#endScr").detach(),$("#letterCells").empty(),$("#final").css("visibility","visible"),i=me+" : "+i+"<br />"+comp+" : "+j,$("#final").html(i),$("#gameOver").fadeIn(2e3),animate(),$("#gameOver_music").css("visibility","hidden")}function c(t,i){t.length>6&&(t=t.substring(1,t.length));var e=parseInt(t,16),a=Math.abs((e>>16&255)+i);a>255&&(a-=a-255);var s=Math.abs((e>>8&255)+i);s>255&&(s-=s-255);var r=Math.abs((255&e)+i);return r>255&&(r-=r-255),a=Number(0>a||isNaN(a))?0:(a>255?255:a).toString(16),1==a.length&&(a="0"+a),s=Number(0>s||isNaN(s))?0:(s>255?255:s).toString(16),1==s.length&&(s="0"+s),r=Number(0>r||isNaN(r))?0:(r>255?255:r).toString(16),1==r.length&&(r="0"+r),"#"+a+s+r}function h(){$("[id^=cloud]").animate({left:"-200px"},speed).animate({left:"800px"},1)}$("#game").css("visibility","visible"),$("#bgColour").css("background-color","#6699CC"),defaultStatusString=modStrings[4],$("#statusBar").text(defaultStatusString),$("#backButton").on("click",function(){clickS.play(),location.reload()}),timerID=setInterval(t,1e3),h(),a(),$("#change").on("click",function(){clickS.play(),g()}),$("#again").on("click",function(){clickS.play(),$("#endScr").css("visibility","hidden"),e()})}var cloud='<svg width="169px" height="50px" viewBox="0 0 169 50"><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="84.2471" y1="0.1221" x2="84.5058" y2="47.6882"><stop offset="0" style="stop-color:#F0EAED"/><stop  offset="0.4692" style="stop-color:#EEE8EB"/><stop offset="0.68" style="stop-color:#E7E2E4"/><stop offset="0.8391" style="stop-color:#DAD7D8"/><stop offset="0.9714" style="stop-color:#C8C8C8"/><stop offset="1" style="stop-color:#C3C4C3"/></linearGradient><path fill="url(#SVGID_1_)" d="M130.351,47.463c3.44-0.859,13.112-0.431,13.112-0.431c3.438,5.814,15.905,1.292,15.905,1.292 c7.308,3.876,9.631-1.229,9.631-1.229c-1.96-5.398-7.837-2.455-7.837-2.455c-3.918-6.378-9.795-1.472-9.795-1.472 c-2.938-5.888-8.817-0.491-8.817-0.491c3.918-8.34-7.347-15.701-7.347-15.701c-10.286-4.417-16.652,5.887-16.652,5.887 c-3.43-6.378-6.368-1.961-6.368-1.961c-4.897-7.36-10.286-2.454-10.286-2.454c-2.448-13.74-16.162-10.795-16.162-10.795 C78.389-0.502,61.785-3.569,48.672,3.536c-12.559,6.809-12.407,25.894-12.407,25.894c-2.208-3.283-6.938-1.56-6.938-1.56 c-4.944,2.369-3.347,8.92-3.347,8.92c-0.979-4.415-6.836-8.36-13.204-5.907c-6.367,2.453-4.919,14.25-4.919,14.25 c-3.429-5.4-7.836,0.981-7.836,0.981c-0.786,5.226,19.919,1.014,22.857,1.996c2.939,0.981,3.569-2.179,6.018-0.216 c0,0,11.392,1.723,14.832-0.861c3.44-2.584,4.514-0.214,8.597,0.431c4.084,0.647,45.568-3.661,44.924-1.077 c-0.645,2.584,8.168,2.8,8.813,0.646c0.482-1.612,1.934,4.308,7.738,0.646C113.801,47.679,124.287,48.981,130.351,47.463z"/></g></svg>',face='<svg width="40px" height="40px" viewBox="0 0 40 40"><g><path fill="#99CCFF" d="M20,39C9.523,39,1,30.477,1,20S9.523,1,20,1s19,8.523,19,19S30.477,39,20,39z"/><path d="M20,2c9.925,0,18,8.075,18,18c0,9.925-8.075,18-18,18c-9.925,0-18-8.075-18-18C2,10.075,10.075,2,20,2 M20,0 C8.955,0,0,8.955,0,20c0,11.046,8.955,20,20,20c11.046,0,20-8.954,20-20C40,8.955,31.046,0,20,0L20,0z"/></g><g><ellipse fill="#FFFFFF" stroke="#000000" stroke-width="0.75" stroke-miterlimit="10" cx="11.089" cy="16.787" rx="3.991" ry="4.995"/><circle cx="10.992" cy="17.492" r="2.492"/><circle fill="#FFFFFF" cx="11.839" cy="16.757" r="0.75"/></g><g><ellipse fill="#FFFFFF" stroke="#000000" stroke-width="0.75" stroke-miterlimit="10" cx="28.089" cy="16.787" rx="3.991" ry="4.995"/><circle cx="27.992" cy="17.492" r="2.492"/><circle fill="#FFFFFF" cx="28.839" cy="16.757" r="0.75"/></g><path id="sad" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M14,31.68 c0,0,5.54-6.237,12.001,0.32"/><path id="glad" visibility="hidden" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M12,30.427 c0,0,7.385,8.316,16-0.427"/><path id="nose" visibility="hidden" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" d="M23,24.031c0,0-0.861,2.247-2.983,2.219 C17.894,26.219,17,24,17,24"/></svg>',rope='<svg width="36px" height="81px" viewBox="0 0 36 81"><g><path d="M18,48c8.271,0,15,6.729,15,15s-6.729,15-15,15S3,71.271,3,63S9.729,48,18,48 M18,45C8.059,45,0,53.059,0,63 s8.059,18,18,18s18-8.059,18-18S27.941,45,18,45L18,45z"/></g><g><path fill="#FF6600" d="M18,51c6.617,0,12,5.383,12,12s-5.383,12-12,12S6,69.617,6,63S11.383,51,18,51 M18,48 C9.716,48,3,54.717,3,63s6.716,15,15,15s15-6.717,15-15S26.284,48,18,48L18,48z"/></g><line fill="none" stroke="#000000" stroke-width="7" stroke-miterlimit="10" x1="17.5" y1="0" x2="17.5" y2="48"/><line fill="none" stroke="#FF6600" stroke-width="3" stroke-miterlimit="10" x1="17.5" y1="0" x2="17.5" y2="49"/></svg>',initHangM='<div id="bgHangMan"></div><div id="bgHangBits"><div id="hang1"></div><div id="hang2"></div><div id="hang3"></div><div id="hang4"></div><div id="hang5"></div><div id="man"><div id="hang6">'+rope+'</div><div id="hang7">'+face+'</div><div id="hang8"><div id="bodInset"></div></div><div id="hang9"><div id="armInset"></div></div><div id="hang10"><div id="armInset"></div></div><div id="hang11"><div id="legInset"></div></div><div id="hang12"><div id="legInset"></div></div><div id="hang13"></div></div></div>',winMan='<div id="winMan"><div id="hang7">'+face+'</div><div id="hang8"><div id="bodInset"></div></div><div id="hang9"><div id="armInset"></div></div><div id="hang10"><div id="armInset"></div></div><div id="hang11"><div id="legInset"></div></div><div id="hang12"><div id="legInset"></div></div><div id="hang13"></div></div>',me="me",comp="computer",again="play again",finish="finished",suitableLabels=[],targetText,targetTextLength,myLettersArray=[],guessedLetters=[],m,chars,clCh,skyCol1,skyCol2,hangStep=0,timerTime=0,timerID=0,swingSpeed="4s",speed=4e4,op=.6,kb,sky1="6699CC",sky2="CCCCFF";count=0,"es"==shortCode&&(me="yo",comp="el ordenador",again="jugar otra vez",finish="completo"),$.cachedScript(jsDesktopProductURL+"settings_page_game.js");