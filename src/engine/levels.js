var endBoom = false;
var thisLevels = null;
var nickname = "Anonyme";

if (typeof localStorage.scoreTop == 'undefined') {
  localStorage.scoreTop = JSON.stringify([]);
}

class Levels {
  constructor(scene, playerCamera, ball, levelSizeX, levelSizeZ, bottomIndex) {
    thisLevels = this;
    this.chrono = new Chrono();
    this.scene = scene;
    this.ball = ball;
    this.playerCamera = playerCamera;
    this.indexLevel = 0;
    this.levelSizeX = levelSizeX;
    this.levelSizeZ = levelSizeZ;
    this.bottomIndex = bottomIndex;
    this.topIndex = bottomIndex;
    this.levelsArray = [];
    $( "#currentLevel .levelNB" ).last().html("Niveau : 1");
	  this.positionBase = new BABYLON.Vector3(0, this.topIndex, 0);
    this.initLevels();
    this.checkInLevels();
    onGroundEnd = false;
    endBoom = false;

    initOnGroundEnd(this.ball, this.levelsArray[this.levelsArray.length-1].getLastPlateforme());
    this.initAnimations();
    this.chrono.start();
  }

  initLevels(){
    this.addLevel(Level1, 0);
    this.addLevel(Level2, Math.PI);
  	this.addLevel(Level3, 0);
  	this.addLevel(Level4, Math.PI);
  	this.addLevel(Level5, 0);
    this.initFinalLvlRocket();
  }

	launchAnimationFin(){
		this.ball.position = this.rocket.position;
		this.ball.isVisible = false;
		this.playerCamera.lockedTarget = this.rocket;
		this.playerCamera.radius = 35;
		this.playerCamera.beta = 2.6; // tourné vers le ciel
		//this.playerCamera.alpha = 1; // tourné vers le ciel
		this.playerCamera.useAutoRotationBehavior = true;
		console.log(this.playerCamera.alpha);
		var fireSystem = getParticlesFireRocket(this.rocket, this.scene);
		var smokeSystem = getParticlesSmokeRocket(this.rocket, this.scene);
		fireSystem.start();
		smokeSystem.start();
		setTimeout(this.addAnimationRocketY, 1000);
		//this.playerCamera.setPosition(new BABYLON.Vector3(0, 0, 0));
		//this.playerCamera.attachControl(canvas, false);
	}

   initAnimations(){

	  // falling plateforms
	  this.scene.registerAfterRender(function () {
		  for(let i = 0; i < thisLevels.levelsArray.length; i++)
			  for(let j = 0; j < thisLevels.levelsArray[i].fallingPlateforms.length; j++){
    			if (thisLevels.ball.intersectsMesh(thisLevels.levelsArray[i].fallingPlateforms[j].boxPlateforme, false)){
    			  thisLevels.platToKill = thisLevels.levelsArray[i].fallingPlateforms[j];
    			  setTimeout(thisLevels.applyGravity, 800);
    			  break;
    			}
  		  }
  	});
  }

  applyGravity(){
		thisLevels.platToKill.boxPlateformeBottom.isVisible = false;
		thisLevels.platToKill.boxPlateforme.physicsImpostor.mass = 1.5;
		thisLevels.platToKill.boxPlateformeBottom.physicsImpostor.mass = 1.5;
	}

  addLevel(levelClass, rotation){
    let positionLvl = this.topIndex;
    let level1 = new levelClass(this.scene, this.ball, this.positionBase, rotation);
    this.levelsArray.push(level1);
    this.topIndex = level1.getLastPlateformePosition().y;
	  this.positionBase = level1.getLastPlateformePosition();
  }

  getNbLevels(){
    this.levelsArray.length;
  }
  setNewScore(){
    let scoresTop = JSON.parse(localStorage.scoreTop);

    let nicknametmp = $("#tutoMenu #nickname").val();
    if(nicknametmp != "")
      nickname = nicknametmp;

    scoresTop.push(thisLevels.chrono.show2() + " - " + nickname);
    scoresTop.sort();

    let newScoresTop = [];
    for (var i = 0; (i < scoresTop.length && i < 10); i++) {
      newScoresTop.push(scoresTop[i]);
    }

    localStorage.scoreTop = JSON.stringify(newScoresTop);
  }
  showScores(){
    let scoresTop = JSON.parse(localStorage.scoreTop);
    scoresTop.sort();
    $( "#endMenu #top10Score ol").last().html("");
    for (var i = 0; (i < scoresTop.length && i < 10); i++) {
      $("#endMenu #top10Score ol").append('<li>'+scoresTop[i]+'</li>');
    }
  }

  endSuccessLaunch(){
	  var endMenu = new EndMenu();
	  endMenu.playEnd("endSuccess");
      thisLevels.setNewScore();
      thisLevels.showScores();
      $( "#endMenu .greenbox .typeEnd" ).last().html($( "#endMenu .greenbox .typeEnd" ).last().text() + " - Mon Score: " + thisLevels.chrono.show());
  }

  checkInLevels(){
    var flagWhile = true;
    var endMenu = new EndMenu();
    if(thisLevels.ball.position.y > thisLevels.topIndex && onGroundEnd ) {
      flagWhile = false;
	  thisLevels.launchAnimationFin();
	  setTimeout(thisLevels.endSuccessLaunch, 4000);
    }
    else if(endBoom){
      endBoom = false;
      flagWhile = false;
      thisLevels.showScores();
      endMenu.playEnd("endBoom");
    }
    else {
      var currentLevel = thisLevels.levelsArray[thisLevels.indexLevel];
      if(currentLevel){
        if(thisLevels.ball.position.y > currentLevel.getLastPlateformePosition().y){
          thisLevels.indexLevel++;
          $( "#currentLevel .levelNB" ).last().html( "Niveau : " + (thisLevels.indexLevel + 1));
        }
        else if(
          thisLevels.ball.position.x < (-1 * (thisLevels.levelSizeX/2)) ||
          thisLevels.ball.position.x > (thisLevels.levelSizeX/2) ||
          thisLevels.ball.position.z < (-1 * (thisLevels.levelSizeZ/2)) ||
          thisLevels.ball.position.z > (thisLevels.levelSizeZ/2)
        ) {
          if(thisLevels.indexLevel <= 1){
            flagWhile = false;
            thisLevels.showScores();
            endMenu.playEnd("endLune");
          }
          else{
            flagWhile = false;
            thisLevels.showScores();
            endMenu.playEnd("endSpace");
          }
        }
        else if(thisLevels.indexLevel > 1) {
          if(thisLevels.ball.position.y < thisLevels.levelsArray[thisLevels.indexLevel-2].getLastPlateformePosition().y){
            flagWhile = false;
            thisLevels.showScores();
            endMenu.playEnd("endChute");
          }
        }
      }
      else if(
        thisLevels.ball.position.x < (-1 * (thisLevels.levelSizeX/2)) ||
        thisLevels.ball.position.x > (thisLevels.levelSizeX/2) ||
        thisLevels.ball.position.z < (-1 * (thisLevels.levelSizeZ/2)) ||
        thisLevels.ball.position.z > (thisLevels.levelSizeZ/2)
      ) {
        if(thisLevels.indexLevel <= 1){
          flagWhile = false;
          thisLevels.showScores();
          endMenu.playEnd("endLune");
        }
        else{
          flagWhile = false;
          thisLevels.showScores();
          endMenu.playEnd("endSpace");
        }
      }
      else if(thisLevels.indexLevel > 1) {
        if(thisLevels.ball.position.y < thisLevels.levelsArray[thisLevels.indexLevel-2].getLastPlateformePosition().y){
          flagWhile = false;
          thisLevels.showScores();
          endMenu.playEnd("endChute");
        }
      }
    }

    if(flagWhile){
      setTimeout(thisLevels.checkInLevels, 500);
    }
  }
	async initFinalLvlRocket(){

		var newMeshes = (await BABYLON.SceneLoader.ImportMeshAsync("", "resources/obj/rocket/", "scene.gltf", this.scene)).meshes;
		newMeshes[0].position = this.positionBase;
		newMeshes[0].scaling.x = 4;
		newMeshes[0].scaling.y = 4.2;
		newMeshes[0].scaling.z = 4;
		newMeshes[0].position.y += 9.5;
		newMeshes[1].rotation.z = 160;
		this.rocket = newMeshes[0];
		this.rocketCylindre = newMeshes[1];
    }

	addAnimationRocketY(){
	    var animationBox = new BABYLON.Animation("animationRocket", "position", 50, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		var start = thisLevels.rocket.position;
		// Animation keys
		var keys = [];
		var frameId = 0;
		for(var i = 0; i < 800; i = i+10){
			keys.push({
				frame: frameId,
				value: new BABYLON.Vector3(start.x, start.y+i, start.z)
			});
			frameId += 20;
		}

		animationBox.setKeys(keys);
		thisLevels.rocket.animations.push(animationBox);
		thisLevels.animationRocket = thisLevels.scene.beginAnimation(thisLevels.rocket, 0, 800, false);
   }
}
