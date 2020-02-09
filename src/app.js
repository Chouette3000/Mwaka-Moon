var canvas = document.getElementById("canvas");
// Page entièrement chargé, on lance le jeu
document.addEventListener("DOMContentLoaded", function () {
    new App('canvas');
}, false);


App = function(canvasId) {
    // Canvas et engine défini ici
    var canvas = document.getElementById(canvasId);
    var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }); };

var loadingMenu = new LoadingMenu();

engine = createDefaultEngine();
if (!engine) throw 'engine should not be null.';

scene = mainScene();
	engine = createDefaultEngine();
	if (!engine) throw 'engine should not be null.';

	scene = mainScene();
	engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
		});

    var _this = this;
    _this.actualTime = Date.now();
    // On initie la scène avec une fonction associée à l'objet Game
    this.scene = this._initScene(engine);
    //Set gravity for the scene (G force like, on Y-axis)
    this.scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

    // Enable Collisions
    this.scene.collisionsEnabled = true;

    var physEngine = new BABYLON.CannonJSPlugin(false);
    this.scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), physEngine);
    physEngine.setTimeStep(1/60);

    
    var _player = new Player(_this, canvas);

    var _arena = new Arena(_this);

    // Permet au jeu de tourner
    engine.runRenderLoop(function () {
        // Récuperer le ratio par les fps
        _this.fps = Math.round(1000/engine.getDeltaTime());

        // Checker le mouvement du joueur en lui envoyant le ratio de déplacement
        _player._checkMove((_this.fps)/60);

        _this.scene.render();
    });

    // Ajuste la vue 3D si la fenetre est agrandie ou diminuée
    window.addEventListener("resize", function () {
        if (engine) {
            engine.resize();
        }
    },false);

};


App.prototype = {
    // Prototype d'initialisation de la scène
    _initScene : function(engine) {
        var scene = new BABYLON.Scene(engine);
        scene.clearColor=new BABYLON.Color3(0,0,0);
        return scene;
    }
};

// ------------------------- TRANSFO DE DEGRES/RADIANS 
function degToRad(deg)
{
   return (Math.PI*deg)/180
}
// ----------------------------------------------------

// -------------------------- TRANSFO DE DEGRES/RADIANS 
function radToDeg(rad)
{
   // return (Math.PI*deg)/180
   return (rad*180)/Math.PI
}
// ----------------------------------------------------



engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
});

// Resize
window.addEventListener("resize", function () {
	engine.resize();
});
