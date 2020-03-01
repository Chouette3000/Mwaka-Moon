var startMenu = null;
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
