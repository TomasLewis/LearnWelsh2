function the_frog_flies(){
console.log('ff1');
var game,fly,bird,player,cursors;
var GAME_WIDTH=596,GAME_HEIGHT=436;
var totalTime,total=0,numQuestions,correct=0,nQS; 
count=0; //used in setting answer + 2 wrong 
var gameMode=true; //false while question or explosion
var answer,wrong1,wrong2,qTime,g,qArray=["#qPic1","#qPic2","#qPic3"],questionAnswered=1;

var explosion,firework;

var left=false,right=false,up=false,down=false,winMusic=1,whistle;

var playerCG,groundCG,flyCG,birdCG;

var mCount=0; //fly flight # secs, counts up to number before change of direction
var flyA,birdA; //angle for fly, bird 
i=100;
var bSpeed=300,fSpeed=Math.floor(Math.random()*(i)+i); //speed of flight, bird, fly
var flyWidthHalf=22;//fly flight, keep within bounds

var nextBirdTime=0,nextBird=5; //count secs since last, initial delay

var plfl=false; //player fly collision - prevents multiple collision detection on single bump
var plbi=false; //player bird collision

var frogH,frogH_anim;
 
var rightAnswerScore=50,wrongAnswerScore=-20,catchFlyScore=10,birdKillScore=-10; //these are primary values, moded for secondary on start

//check set score path
var scorePHPpath='http://static-iclanguage.net/jScript/cors/';
var curHighPlayer='',curHighDate='',curHighScore=0,pauseDisabled=false;
    
    //check for high score
$.get(scorePHPpath+'frogFly_checkScore.php',
        {
                teachLevel: level,
                topic: displaytopic,
                language: ilanguage
        },
        function(data, textStatus)
        {
                
                if(data.charAt(0)=='Y'){
                	i=data.substring(1); 
                	//playerName,date delimited by comma
                	j=i.indexOf('547625874');
                	curHighPlayer=i.substring(0,j);
                	i=i.substring(j+9);
                	j=i.indexOf('842069741');
                	curHighDate=i.substring(0,j);
                	k=i.substring(j+9);
                	curHighScore=parseInt(k);
                	j=modStrings[8];
                	j=j.replace('zzz','<br />');
                	j=j.replace('xxx',displaytopic);
                	j=j.replace('yyy',ilanguage);
                	i='<div style="margin:50px 0">'+j+'<br /><br /><br />';
                	i+=modStrings[9]+' '+ curHighPlayer + '<br />';
                	i+=modStrings[10]+' '+curHighDate+ '<br />';
                	i+=modStrings[11]+' '+curHighScore+'</div>';
                	$("#cHSBox").html(i);
                	//button to show
                	i=star(35,'gold','yellow');
                	$("#cHSBtn").html(i).css("display","block").on("click",function(){
                	if($("#cHSBox").css("display")=="none"){
                	pauseGame(true);disablePauseButton(true);$("#cHSBox").css("display","block");
                	}else{
                	$("#cHSBox").css("display","none");pauseGame(false);disablePauseButton(false);
                	}
                	});	
                } else {
                	
                	$("#cHSBtn").css("display","none");
                }
        });
                
defaultStatusString=modStrings[5];
console.log('ff4, string='+defaultStatusString);

//back btn
$("#back").css("visibility","visible");

$("#statusBar").text(defaultStatusString);

//answers
if(level=="primary"){
myArray=[0,1,2,3,4,5,6,7,8,9];
nQS=numQuestions=8;//running count
}else{
myArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
nQS=numQuestions=15;

rightAnswerScore=25;
wrongAnswerScore=-10;
catchFlyScore=5;
birdKillScore=-5;
}
shuffle(myArray);

//game.state.start('level0');

//listeners on answers
$("#qPic1,#qPic2,#qPic3").on("click touchstart",function(e){
	i=this.id;
	if(qArray[0].indexOf(i)!=-1){
		
		upScore(rightAnswerScore);
		correct=1;
	} else {
		
		upScore(wrongAnswerScore);
		correct=-1;
	}
	questionAnswered=1;
//clear box
clearQuestion();

});

//listeners on keys 1 2 3
$(document).keydown(function( e ) {
if(questionAnswered==0){
i=e.which;
  if ( i == 49 || i == 50 || i == 51) {
   e.preventDefault();
   if(i==49){i=1}else if(i==50){i=2}else{i=3}
   j=parseInt(qArray[0].charAt(5));
   
   if(j==i){
   
   upScore(rightAnswerScore);
		correct=1;
   } else {
   
		upScore(wrongAnswerScore);
		correct=-1;
   }
   questionAnswered=1;
   clearQuestion();
  }
}
});
    
//this game will have only 1 state
var GameState = {
  //load the game assets before the game starts
  preload: function() {

      
    game.load.image('bg', 'visuals/assets/gameAssets/frogFly/sky.png'); 
    game.load.image('ground', 'visuals/assets/gameAssets/frogFly/branch.png');
    game.load.physics('branchPh', 'visuals/assets/gameAssets/frogFly/branch.json');
    game.load.physics('birdPh', 'visuals/assets/gameAssets/frogFly/bird.json');
    game.load.image('fly', 'visuals/assets/gameAssets/frogFly/fly.png');
     game.load.image('bird', 'visuals/assets/gameAssets/frogFly/bird.png');
    game.load.spritesheet('explosion', 'visuals/assets/gameAssets/frogFly/explosion-6x5.png',256,192,28);
    game.load.spritesheet('firework', 'visuals/assets/gameAssets/frogFly/firework-5x4.png',300,294,20);
     game.load.spritesheet('dude', 'visuals/assets/gameAssets/frogFly/frog.png', 32, 42);
     game.load.spritesheet('frogHead', 'visuals/assets/gameAssets/frogFly/frogHeadBig.png',148,125);
	//game.load.audio('whistle', soundURL+'games/bombWhistle.mp3');
	//game.load.audio('bombBang', soundURL+'games/bombBang.mp3');
	//game.load.audio('buzz', soundURL+'games/fly.mp3');
	//game.load.audio('bgSnd', soundURL+'games/frog-chorus.mp3');
      //
	//game.load.audio('correctSnd', soundURL+'games/ping.mp3');
	//game.load.audio('eatFly', soundURL+'games/eatFly.mp3');
  },
  //executed after everything is loaded
  create: function() {
var groundA,groundB,ground1;

totalTime = 0; // time elapsed in the whole game
    
game.add.sprite(0, 0, 'bg');
 //playAudioLoop("g","frog-chorus.mp3");
////game.bgSnd = game.add.audio('bgSnd');
////game.bgSnd.loopFull(0.5);

////game.explodeSnd=game.add.audio('bombBang');
////game.correctSnd=game.add.audio('correctSnd');
////game.eatFly=game.add.audio('eatFly');

//explosion and firework as spritesheets   
game.explosion=game.add.sprite(170,122, 'explosion'); 
  game.explosion.animations.add('explode', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27], 11, false);
  game.explosion.kill();
  
  console.log('ff4');
 game.firework=game.add.sprite(148, 70, 'firework');  
 game.firework.animations.add('fire', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 9, false);
 game.firework.kill();

setupPhysics();
      resizePolygon('branchPh', 'branchPh2', 'branch', -1)

        groundA= game.add.sprite(130, GAME_HEIGHT, 'ground');
        game.physics.p2.enable(groundA);
        groundA.body.static = true;
        groundA.body.setMaterial(groundMaterial);
        groundA.body.clearShapes();
        groundA.body.loadPolygon('branchPh', 'branch');
        groundA.body.setCollisionGroup(groundCG);
        groundA.body.collides([playerCG,flyCG]);
               
       groundB= game.add.sprite(GAME_WIDTH-120, GAME_HEIGHT, 'ground');
       groundB.scale.set(-1);
        game.physics.p2.enable(groundB);
        groundB.body.static = true;
        groundB.body.setMaterial(groundMaterial);
        groundB.body.clearShapes();
        groundB.body.loadPolygon('branchPh2', 'branch');
        groundB.body.setCollisionGroup(groundCG);
      groundB.body.collides([playerCG,flyCG]);
      
      game.branches= game.add.group();
       this.addBranch(180, GAME_HEIGHT/4.01, 1); game.branches.getAt(0).kill();    
       this.addBranch(GAME_WIDTH-120, GAME_HEIGHT/2.65, -1); game.branches.getAt(1).kill();
       this.addBranch(128, GAME_HEIGHT/1.62, 1); game.branches.getAt(2).kill();           
       this.addBranch(GAME_WIDTH-74, GAME_HEIGHT/1.58, -1); game.branches.getAt(3).kill();      
       this.addBranch(-86, GAME_HEIGHT/2.06, 1); game.branches.getAt(4).kill();        
    this.addBranch(GAME_WIDTH-100, -8, -1); game.branches.getAt(5).kill();    
    this.addBranch(130, -8, 1); game.branches.getAt(6).kill();
 
      
game.player=game.add.sprite(GAME_WIDTH/2, GAME_HEIGHT-40, 'dude');
   game.physics.p2.enable(game.player);
   game.player.animations.add('left', [0, 1, 2, 3], 10, true);
   game.player.animations.add('right', [5, 6, 7, 8], 10, true);
   game.player.animations.add('up', [9, 10, 11], 5, true);
  
   game.player.body.fixedRotation = true; 
   game.player.body.collideWorldBounds = true;
      
   game.player.body.setCollisionGroup(playerCG);
   game.player.body.collides(groundCG);
   
    game.player.body.collides(flyCG,flyPlayerCollide,game);
    game.player.body.collides(birdCG,birdPlayerCollide,game);
        
//initialize fly
////game.buzz= game.add.audio('buzz');
game.fly = game.add.sprite(0,0,"fly");
game.physics.p2.enable(game.fly );
game.fly.body.motionState = p2.Body.KINEMATIC;
         
game.fly.body.setCollisionGroup(flyCG);

game.fly.body.collides(playerCG,flyPlayerCollide,game);
game.fly.body.collides(birdCG);

game.fly.kill();
createFly();

// bird
game.bird= game.add.sprite(-200,-200,"bird");
game.physics.p2.enable(game.bird);
game.bird.body.motionState = p2.Body.KINEMATIC; 
game.bird.body.clearShapes();
game.bird.body.loadPolygon('birdPh', 'bird');      
game.bird.body.setCollisionGroup(birdCG);

game.bird.body.collides(playerCG,birdPlayerCollide,game);
game.bird.body.collides(flyCG);
game.bird.kill();

 game.frogH=game.add.sprite(10,GAME_HEIGHT-125, 'frogHead');
  frogH_anim = game.frogH.animations.add('chomp', [0,1,2,3],6,false);
  frogH_anim.killOnComplete = true;
  frogH_anim.onComplete.add(function() { askQuestion(); }, game);
  game.frogH.kill(); 
   
    
//  player controls.
    	game.input.onDown.add(tbMove, game);
    	game.input.onUp.add(tbStop, game);

    
//each second updates
game.time.events.loop(Phaser.Timer.SECOND, secondTimer, game);

  },

  //game loop, executed many times per second
  update: function() {
//fly movement
flyFly(); 
  	
if (left==true){
game.player.animations.play('left');
game.player.body.velocity.x = -150;
} else if (right==true){
game.player.animations.play('right');
game.player.body.velocity.x = 150;        
}   
if (up==true){
game.player.animations.play('up');
game.player.body.velocity.y = -300;
} else  if (down==true){
//game.player.animations.play('up');
game.player.body.velocity.y = 300;          
}
if(left==false && right==false && up==false && down==false) { 
game.player.animations.stop();
game.player.frame = 4;       
}
  },
    
    addBranch: function(x,y,direction){
	var newBranch= game.branches.create(x,y,'ground')
	if(direction!==1){newBranch.scale.set(-1);}
        game.physics.p2.enable(newBranch);      
      	newBranch.body.static=true;
     	 newBranch.body.setMaterial(groundMaterial);
      	newBranch.body.clearShapes();
      	if(direction==1){
      		 newBranch.body.loadPolygon('branchPh', 'branch');
      	} else {
      		newBranch.body.loadPolygon('branchPh2', 'branch');
      }
      newBranch.body.setCollisionGroup(groundCG);
      newBranch.body.collides(playerCG);
      return newBranch; 
}

};

//initiate the Phaser framework
var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO,'sign');

game.state.add('GameState', GameState,false);
    
    function secondTimer(){

	totalTime++;
	minutes = Math.floor(totalTime/ 60) % 60;
	seconds = Math.floor(totalTime) % 60;
    	//If any of the digits becomes a single digit number, pad it with a zero
    if (seconds < 10){
        seconds = '0' + seconds;}
    if (minutes < 10){
        minutes = '0' + minutes;}
	$("#sign_brown_time").text(minutes + ':'+ seconds);

	//increment bird time if in playMode rather than questionMode
	if(gameMode){
		nextBirdTime++;
		if(nextBirdTime>=nextBird){
			createBird();
		}
	}
}


function tbMove(e){
i=e.x - game.player.body.x;
j=e.y - game.player.body.y;
k = Math.atan(j/i); 
if(i<0){
left=true;right=false;
}else{
right=true;left=false;
} 
if(j<0){
up=true;down=false;
}else{
down=true;up=false;
}

}
function tbStop(){
 //player.body.velocity.x =0; player.body.velocity.y =0

left=false;right=false;up=false;down=false;
}

function createBird(){
//reset collision flag
plbi = false;
xLoc= Math.floor(Math.random()*GAME_WIDTH);

if(xLoc<GAME_WIDTH/2){
	birdA=Math.floor(Math.random()*45+135);
} else{
	birdA=Math.floor(Math.random()*45+180);
}


	game.bird.body.x=xLoc;
	game.bird.body.y=-100;
	game.bird.body.angle=birdA;  
    	game.bird.revive(); 		
	game.bird.body.moveForward(bSpeed);
 			
if (game.bird.body.x > GAME_WIDTH) removeBird();
if (game.bird.body.y > GAME_HEIGHT) removeBird();
nextBirdTime=0;
}

function removeBird(){
	game.bird.kill();
	plbi = false;
	nextBirdTime=0;
}

function birdPlayerCollide(body1,body2){
if (!plbi) {

	gameMode=false;
	
	upScore(birdKillScore);
	// game.paused = true;
	
	removeBird();
	removeFly();
	game.player.kill();
	
	//start timer
	g=window.setInterval(clearRightWrong,3000);
	//show bird eat
	playAudio("g","bombBang.mp3");
	//$("#eBox").css("display","block");
	game.explosion.x=game.player.body.x-128;
	game.explosion.y=game.player.body.y-96;
	game.explosion.revive();
	game.explosion.animations.play('explode');
	//game.explodeSnd.play();
	
	game.player.body.x=GAME_WIDTH/2;
	game.player.body.y=GAME_HEIGHT-40;

	plbi = true; //true till next bird created
	}
}

function flyPlayerCollide(pl,fl){
if (!plfl) {

	game.frogH.revive();
	//game.eatFly.play();
   playAudio("g","eatFly.mp3");
	game.frogH.animations.play('chomp');
	removeFly();
	removeBird();
	game.player.kill();
	}
}
function askQuestion(){

gameMode=false;
	
	
		
	initQuestion();
	
	game.player.body.x=GAME_WIDTH/2;
	game.player.body.y=GAME_HEIGHT-40;
	
	plfl = true; //true till next fly created
}

// ***************** FLY functions
function createFly(){
	game.fly.body.x=250;
	game.fly.body.y=0;
        game.fly.revive();
	//game.buzz.loopFull(0.6);
	//reset collision flag
	plfl = false;
}

function flyFly(){
flyA=game.fly.body.angle; 
mCount+=1;
if(mCount>=20){mCount=0;flyA=Math.floor(Math.random()*361);}
			
game.fly.body.angle=flyA;
game.fly.body.moveBackward(fSpeed); //specific to tablet or desktop

//autobounds not operational for fly so here is a manual version			
if (game.fly.body.x < flyWidthHalf)game.fly.body.x = flyWidthHalf;
if (game.fly.body.y < flyWidthHalf)game.fly.body.y = flyWidthHalf; 			
if (game.fly.body.x > GAME_WIDTH-flyWidthHalf)game.fly.body.x = GAME_WIDTH-flyWidthHalf;
if (game.fly.body.y > GAME_HEIGHT-flyWidthHalf)game.fly.body.y = GAME_HEIGHT-flyWidthHalf;
                                   
}

function removeFly(player,fly){
//game.buzz.stop();
game.fly.kill();

}

function showBranch(){
var branchList; //based on numQuestions

if(level=="primary"){
branchList=[7,6,5,4,3,2,1];
} else {
branchList=[14,12,10,8,6,4,2];
} 
for(i=0;i<branchList.length;i++){

if(numQuestions<=branchList[i]){
if(game.branches.getAt(i).alive == false){
game.branches.getAt(i).revive(); 
}}

}

}
    
game.state.start('GameState'); 
  
    
function initQuestion(){

//game.paused = true;
disablePauseButton(true);
//game.bgSnd.pause();



//able to accept answer
questionAnswered=0;
//
$("#statusBar").text(modStrings[6]);
//score
upScore(catchFlyScore);

//answer #
 answer=myArray[count];
 wrong1=myArray[(count+1)];
 wrong2=myArray[(count+2)];


//increment counts
count+=1;
numQuestions-=1;

//question text
$("#qText").text(labelsarray[answer]);
    
//pictures
shuffle(qArray);

$(qArray[0]).html('<img id="a" src="'+smallPicsURL+picsarray[answer]+'.png" width="115px" height="115px" />');
$(qArray[1]).html('<img id="w1" src="'+smallPicsURL+picsarray[wrong1]+'.png" width="115px" height="115px" />');
$(qArray[2]).html('<img id="w2" src="'+smallPicsURL+picsarray[wrong2]+'.png" width="115px" height="115px" />');
    
    $("#qBox").css("display","block");
    	qTime=5;
	//start the whistle sound	
	//whistle=new Howl({urls:[soundURL+"games/bombWhistle.mp3"],autoplay:true});
playAudio("g","bombWhistle.mp3");
	//countdown clock
    $("#qTime").text(qTime);
    
    //start timer for question
    g=window.setInterval(cntDwn,1000);

}

//countdown timer for question
function cntDwn(){
	qTime-=1;
	//if time runs out clearbox
	if(qTime == -1){ correct=0;clearQuestion(); }
	$("#qTime").text(qTime);
}

//clear Question box, show wrong or right visuals
function clearQuestion(){
	//stop q timer
	window.clearInterval(g);
	//whistle.stop();
	//correct for length of sound/animation
	if(correct==1){
	i=2000;
	} else {
	 i=4000;
	 }
	g=window.setInterval(clearRightWrong,i);
	playAudio("g","bombBang.mp3");
	//hide q box
	$("#qBox").css("display","none");
	
if(correct==0 || correct==-1){
	game.explosion.x=170;
	game.explosion.y=122;
	game.explosion.revive();
	game.explosion.animations.play('explode');
	//game.explodeSnd.play();
    playAudio("g","bombBang.mp3");
} else {
	game.firework.revive();
	game.firework.animations.play('fire');
	//game.correctSnd.play();
    playAudio("g","ping.mp3");
}
	
	
	
} // end clearQuestion

// clearRightWrong function: after 3 secs, clear right or wrong display
function clearRightWrong(){
	//stop timer
	window.clearInterval(g);
	
	//hide right wrong animations
 	game.firework.animations.stop('fire',0);game.explosion.animations.stop('explode',0);
 	game.firework.kill();game.explosion.kill();
 	
 	//update q number
	if(count+1<=nQS){
	$("#count").text((count+1) + ' / ' + nQS);
	} else {
	$("#count").text(nQS + ' / ' + nQS);
	}
 	 
 	if(numQuestions==0){ 
		endGame(); 
	} else {
		gameMode=true;
		//reset correct for next time
		correct=0;
		$("#statusBar").text(defaultStatusString);
		//unpause game
		disablePauseButton(false);
		//game.bgSnd.resume();
		game.player.revive();
		//wait a bit then new fly 
		setTimeout(function(){ createFly();}, 1000);    
	}

}
    
    function endGame(){
disablePauseButton(true);
//destroy phaser update
game.destroy();
//
defaultStatusString=modStrings[7];
$("#statusBar").text(defaultStatusString);
//score
i=total - totalTime;
j='Checking your score...';
if(i<0){i==0;j=''}
i='<div id="finalScore">For: '+displaytopic + ' in ' + ilanguage + '<br />Points: '+total+'<br />Time: '+ totalTime + ' seconds<br />Score: '+ i + '<br />(total points - time taken)</div>';
$('#sign').html(i);
$("#finalScore").css("display","block");

//record score to fixd variable
total= total - totalTime;if(total<0){total==0}



if(j==''){

	$("#gameOver").fadeIn(2e3);animate();
	playWinAudio();
}else{
	if( curHighPlayer=='' || total>curHighScore ){
		
		//offer to set high score
		i='<div id="highScore">You got the Highest Score so far:';
i+='<form name="save" method="POST" action=""><div><label for="name">'+modStrings[9]+'</label><input type="text" name="name" id="name" maxlength="35" value="anonymous" /></div><div class="button"><button name="SaveScore" id="savescore" type="submit">Save high score</button></div></form></div>';
$('#sign').append(i);
$("#highScore").css("display","block");
	$("#savescore").on("click",function(e){
		e.preventDefault();
		var givenName=$("#name").val();
		
		$.post(scorePHPpath+'frogFly_setScore.php',
        	{
                teachLevel: level,
                topic: displaytopic,
                score: total,
                playerName: givenName,
                language: ilanguage
       		},
        	function(data, textStatus)
        	{
                

                $("#gameOver").fadeIn(2e3);animate();
                playWinAudio();
                //hide form
                $("#highScore").css("display","none");
        	});


		});
		
	}else{
		
		$("#gameOver").fadeIn(2e3);animate();
	}
}
}
    
 // ****************************************************************
// utility scripts

function gofull() {
  if (game.scale.isFullScreen) {
    game.scale.stopFullScreen();
  } else {
    game.scale.startFullScreen(false);
  }
}

function upScore(i){
total +=i;
if(total<0){total=0}
$("#sign_brown_count").text(total);
showBranch();
}

$("#pause").on("click",function(){
	
	if(pauseDisabled==false){
		if(game.paused == false){
		 	pauseGame(true);
		}else{
		  	pauseGame(false);
		}
	}
});

function pauseGame(f){
	
	if(f==true){
	game.paused = true;
 	$("#pause").html('<div id="arrow-right"></div>');
	}else{
	game.paused = false;
  	$("#pause").html('<div id="pause1"></div><div id="pause2"></div>');
	}
}
function disablePauseButton(f){
	
	if(f==true){
 		i="#666";j="#ccc";pauseDisabled=true;
	}else{
		i="#000";j="yellow";pauseDisabled=false;
	}
	$("#pause1, #pause2").css("background",i);$("#pause").css({"background":j,"border-color":i});$("#arrow-right").css("border-left-color",i);
}

function resizePolygon(originalPhysicsKey, newPhysicsKey, shapeKey, scale)
{
var newData = [];
var data = game.cache.getPhysicsData(originalPhysicsKey, shapeKey);
for (var i = 0; i < data.length; i++) {
var vertices = [];
for (var j = 0; j < data[i].shape.length; j += 2) {
vertices[j] = data[i].shape[j]*scale; 
vertices[j+1] = data[i].shape[j+1] * scale; 
}
newData.push({shape : vertices});
}
var item = {};
item[shapeKey] = newData;
game.load.physics(newPhysicsKey, '', item);
}   
function setupPhysics(){
    //start physics system and enable "expensive" collision events
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.defaultRestitution = 0.4;
    game.physics.p2.gravity.y = 800;
    game.physics.p2.friction=4;
    game.world.enableBodySleeping=true;  //allow bodies to not get calculated when there is nothing to do
    game.stage.smoothed = false;  // no antialiasing

    //define materials
    groundMaterial = game.physics.p2.createMaterial('ground');
    playerMaterial = game.physics.p2.createMaterial('player');

    // define what happens when one material contacts the other
  game.physics.p2.createContactMaterial(playerMaterial, groundMaterial, { friction: 16, restitution: 0.6  }); 

    //define collisiongroups
    playerCG = game.physics.p2.createCollisionGroup();
    flyCG = game.physics.p2.createCollisionGroup();
    groundCG = game.physics.p2.createCollisionGroup();
    birdCG = game.physics.p2.createCollisionGroup();
    
//  This part is vital if you want the objects with their own collision groups to still collide with the world bounds
 game.physics.p2.updateBoundsCollisionGroup();

} 
}