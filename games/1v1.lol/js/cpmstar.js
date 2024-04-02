var iAd;cpmstarAPI(function(api){iAd=new api.game.InterstitialView("interstitial");iAd.load();iAd.addEventListener("ad_opened",function(e){iAdPause();});iAd.addEventListener("ad_closed",function(e){setTimeout(function(){iAdUnpause();},700);iAd.load();});});function iAdPause(){}
function iAdUnpause(){unityAdFinishedCallback()}
function requestNewAd(){if(iAd&&iAd.isLoaded()){iAd.show();}
else{if(iAd)iAd.load();unityAdFinishedCallback()}}
function unityAdFinishedCallback(){try{if(gameInstance)
gameInstance.SendMessage('MainMenuManagers','OnWebCallback');}
catch(error){console.log(error);}}