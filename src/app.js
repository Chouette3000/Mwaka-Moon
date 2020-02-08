
var canvas = document.getElementById("canvas");

var engine = null;
var scene = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }); };

engine = createDefaultEngine();
if (!engine) throw 'engine should not be null.';

	scene = mainScene();

	engine.runRenderLoop(function () {
		if (scene) {
			scene.render();
		}
	});

	// Resize
	window.addEventListener("resize", function () {
		engine.resize();
	});




