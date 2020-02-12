var startMenuScene = function () {

	// This creates a basic Babylon Scene object (non-mesh)
	var physEngine = new BABYLON.CannonJSPlugin(false);
	var scene = new BABYLON.Scene(engine);
	scene.collisionsEnabled = true;
	scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), physEngine);
	physEngine.setTimeStep(1/60);

	// Parameters: alpha, beta, radius, target position, scene
	let camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 50, 1), scene);
  camera.setPosition(new BABYLON.Vector3(3, 35, 1));

	let univers = new UniversMenu(scene);
	univers.init();


	testtrucrotation(camera, scene);

	return scene;
};

var testtrucrotation = async function (camera, scene) {
	let ball = new Ball(scene, camera);
	let sphere = await ball.initBasketball();

	var axis = new BABYLON.Vector3(2, 0, 4);
	scene.registerAfterRender(function () {
    sphere.rotate(axis, 0.01, BABYLON.Space.WORLD);
  });
}
