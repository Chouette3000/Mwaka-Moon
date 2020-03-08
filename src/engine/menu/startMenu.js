var startMenu = null;
var difficulty = 2;
class StartMenu {
  constructor(engine, scene) {
    var loadingMenu = new LoadingMenu();
    startMenu = this;
    this.engine = engine;
    this.scene = scene;
    this.scene = startMenuScene();
  	this.scene.executeWhenReady(function() {
      startMenu.showStartMenu();
      loadingMenu.hide();
  	});
    this.selectDifficulty();
    document.getElementById("playTuto").addEventListener("click", this.onPlayTutoButton);
    document.getElementById("playGame").addEventListener("click", this.onPlayGameButton);
	  document.getElementById("endMenu").addEventListener('restartGame', this.onPlayTutoButton);
  }

  getScene(){
    return startMenu.scene;
  }

  onPlayTutoButton() {
    startMenu.hideStartMenu();
    startMenu.showTutoMenu();
  }

  selectDifficulty(){
    if(difficulty == 2)
      this.playNormal();
    else if(difficulty == 1)
      this.playSimple();
    else
      this.playHard();
    document.getElementById("playSimple").addEventListener("click", this.playSimple);
    document.getElementById("playNormal").addEventListener("click", this.playNormal);
    document.getElementById("playHard").addEventListener("click", this.playHard);
  }

  playSimple() {
    difficulty = 1;
    startMenu.playDifficultyInit();
    $("#tutoMenu .lvlSimple.Off").hide();
    $("#tutoMenu .lvlSimple.On").show();
  }
  playNormal() {
    difficulty = 2;
    startMenu.playDifficultyInit();
    $("#tutoMenu .lvlNormal.Off").hide();
    $("#tutoMenu .lvlNormal.On").show();
  }
  playHard() {
    difficulty = 3;
    startMenu.playDifficultyInit();
    $("#tutoMenu .lvlHard.Off").hide();
    $("#tutoMenu .lvlHard.On").show();
  }

  playDifficultyInit(){
    $("#tutoMenu .On").hide();
    $("#tutoMenu .Off").show();
  }

  onPlayGameButton() {
    startMenu.hideStartMenu();
    startMenu.hideTutoMenu();
    startMenu.launchGame();
  }

  launchGame(){
    var loadingMenu = new LoadingMenu();
  	scene = mainScene();
  	scene.executeWhenReady(function() {
      loadingMenu.hide();
      $("#currentLevel").show();
  	});
  }

  showStartMenu(){
    startMenu.hideTutoMenu();
    $("#startingMenu").show();
    engine.resize();
  }

  showTutoMenu(){
    startMenu.hideStartMenu();
    $("#tutoMenu").show();
    engine.resize();
  }

  hideStartMenu(){
    $("#startingMenu").hide();
    engine.resize();
  }

  hideTutoMenu(){
    $("#tutoMenu").hide();
    engine.resize();
  }
}
