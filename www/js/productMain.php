<?php 
defined('_JEXEC') or die;
$intSpritePath= $resPicPath . 'iSprite.png';
$curPage=substr($currentFile,1);
	
?><script>var jsBaseURL="<? echo $jsRootURL;?>",jsDesktopProductURL="<? echo $jsRootURL.$jsProductDir.'/';?>",siteurl="<?php echo $currentDomain ?>",pageURL="<?php echo $currentDomain . $curPage ?>",resourceurl="<? echo $resPath ?>",soundURL="<? echo $resPath;?>sounds/",imageurl="<?php echo $imageurl ?>",intSpritePath="<? echo $intSpritePath;?>",lotopicURL="<? echo $currentDomain. $lotopicURL;?>",lolessonURL="<? echo $currentDomain.$lolessonURL;?>",logamesURL="<? echo $currentDomain.$logamesURL;?>",lotestURL='<? echo $currentDomain.$lotestURL;?>',testing="<?php echo $testing ?>",smallPicsURL="<? echo $resPath;?>visuals/topics-sc/",bigPicsURL="<? echo $resPath;?>visuals/topics-big-c/",module="<? echo $module;?>",topicsPath="<? echo $topicsPath ?>",displaytopic="<? echo $displaytopic;?>",level="<? echo $level ?>",displayLevel="<? echo $displayLevel;?>",topicsSelected="<? echo $topicsSelected;?>",numPics,numTopics,highPop,wrong,clickS,boing="boing.mp3",cheer1=soundURL+'winmusic/cheer1.mp3',winMusic,defaultStatusString,elanguage="<?php echo $elanguage ?>",ilanguage="<? echo $ilanguage ?>",language="<? echo $language ?>",picSize,format,audioEnded=0,soundsArray=[],isMobileDevice="<? echo $isMobileDevice;?>",signBrown='<? echo $signBrown;?>',signGreen='<? echo $signGreen;?>',signBlue='<? echo $signBlue;?>',signOrange='#EFB538',groundCol="<? echo $groundCol;?>",strokeCol="<? echo $strokeCol;?>",xGroundCol="<? echo $xGroundCol;?>",xStrokeCol="<? echo $xStrokeCol;?>",shadow="<? echo $shadow;?>",signFont='Open Sans',html,sC=shortCode="<?php echo $shortCode ?>",i,j,k,myString,myString2,myArray,num,xLoc,yLoc,total,count,offset,width,height,randomNum,rndNum,mySound,flyV=false,topicNames="<?php echo $topicNames ?>",topicPics,howls={},infoBS="<? echo $infoBS;?>",helpBS="<? echo $helpBS;?>",backBS="<? echo $backBS;?>",langBS="<? echo $langBS;?>",otsTitle="<? echo $otsTitle;?>",noTopic="<? echo $noTopic;?>",infoSS="<? echo $infoSS;?>",helpSS="<? echo $helpSS;?>",backSS="<? echo $backSS;?>",langSS="<? echo $langSS;?>",sec="<? echo $sec;?>",dispLvl="<? echo $dispLvl;?>",picsarray,labelsarray,ilabelsarray,modStrings,topicXML,allTopicNames,allDisplayTopicNames,arra206='<? echo $arra206;?>',gamesXML,isTablet="<? echo $isTablet;?>",overlayStrings;<?php

$js_array = json_encode($picsarray );
	echo "picsarray = ". $js_array . ";";
$js_array = json_encode($labels);
	echo "labelsarray=". $js_array . ";";
	$js_array=json_encode($ilabels);
	echo "ilabelsarray=". $js_array . ";";
	$js_array=json_encode($modStrings);
	echo "modStrings=". $js_array . ";";
	if($topicsSelected == '0' || $module=='topics'){
		echo 'topicXML='.json_encode($topicXML).';'; 
		echo 'allTopicNames='.json_encode($allTopicNames).';';
		echo 'allDisplayTopicNames='.json_encode($allDisplayTopicNames).';';
	}
	
	if($secondLevel){
	//on a specific game page, need overlay strings in js
	echo 'overlayStrings='.json_encode($overlayStrings).';';
	} 


?></script>