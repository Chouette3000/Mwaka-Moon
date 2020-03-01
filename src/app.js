var canvas = document.getElementById("canvas");


var engine = null;
var scene = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }); };
engine = createDefaultEngine();
var startMenu = new StartMenu(scene);

scene = startMenu.getScene();

engine.resize();

engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
});

// Resize
window.addEventListener("resize", function () {
	engine.resize();
});
