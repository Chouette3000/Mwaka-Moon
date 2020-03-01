var thisLevels = null;
class Levels {
  constructor(scene, ball, levelSizeX, levelSizeZ, bottomIndex) {
    thisLevels = this;
    this.scene = scene;
    this.ball = ball;
    this.indexLevel = 0;
    this.levelSizeX = levelSizeX;
    this.levelSizeZ = levelSizeZ;
    this.bottomIndex = bottomIndex;
    this.topIndex = bottomIndex;
    this.levelsArray = [];
    $( "#currentLevel .levelNB" ).last().html("Niveau : 1");
	this.positionBase = new BABYLON.Vector3(0, this.topIndex, 0);
    this.initLevels();
    //this.checkInLevels();
	//setTimeout(function(){ var endMenu = new EndMenu(); endMenu.playEnd("endSuccess");}, 5000); 
	//setTimeout(function(){ var endMenu = new EndMenu(); endMenu.playEnd("endLune");}, 5000); 
  }


  initLevels(){
    
    this.addLevel(Level1, 0);
    //this.addLevel(Level2, Math.PI);
	//this.addLevel(Level3, 0);
  }

  addLevel(levelClass, rotation){
    let positionLvl = this.topIndex;
    let level1 = new levelClass(this.scene, this.ball, this.positionBase, rotation);
    this.levelsArray.push(level1);
    this.topIndex = level1.getLastPlateformePosition().y;
	  this.positionBase = level1.getLastPlateformePosition();

	//console.log(this.topIndex);
  }

  getNbLevels(){
    this.levelsArray.length;
  }

  checkInLevels(){
    var flagWhile = true;
    var endMenu = new EndMenu();
    if(thisLevels.ball.position.y > thisLevels.topIndex) {
      flagWhile = false;
      endMenu.playEnd("endSuccess");
    }
    else {
      var currentLevel = thisLevels.levelsArray[thisLevels.indexLevel];
      if(thisLevels.ball.position.y > currentLevel.getLastPlateformePosition().y){
        thisLevels.indexLevel++;
        $( "#currentLevel .levelNB" ).last().html( "Niveau : " + (thisLevels.indexLevel + 1) );
      }
      else if(
        thisLevels.ball.position.x < (-1 * (thisLevels.levelSizeX/2)) ||
        thisLevels.ball.position.x > (thisLevels.levelSizeX/2) ||
        thisLevels.ball.position.z < (-1 * (thisLevels.levelSizeZ/2)) ||
        thisLevels.ball.position.z > (thisLevels.levelSizeZ/2)
      ) {
        //console.log("thisLevels.ball.position.x: " + thisLevels.ball.position.x);
        //console.log("thisLevels.ball.position.z: " + thisLevels.ball.position.z);
        if(thisLevels.indexLevel <= 1){
          flagWhile = false;
          endMenu.playEnd("endLune");
        }
        else{
          flagWhile = false;
          endMenu.playEnd("endSpace");
        }
      }
      else if(thisLevels.indexLevel > 1) {
        if(thisLevels.ball.position.y < thisLevels.levelsArray[thisLevels.indexLevel-2].getLastPlateformePosition().y){
          flagWhile = false;
          endMenu.playEnd("endChute");
        }
      }
    }

    if(flagWhile){
      setTimeout(thisLevels.checkInLevels, 500);
    }

  }

}
