var canvas = document.getElementById("canvas");

var startMenu = new StartMenu();
var engine = null;
var scene = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }); };
engine = createDefaultEngine();
if (!engine) throw 'engine should not be null.';
scene = startMenuScene();
engine.resize();

console.log(scene);	
engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
});	
	
function launchGame(){
	var loadingMenu = new LoadingMenu();
	
	scene = mainScene();
}

// Resize
window.addEventListener("resize", function () {
	engine.resize();
});

document.getElementById("play").addEventListener("click", onPlayButton);

function onPlayButton() {
	startMenu.hide();
	launchGame();
}