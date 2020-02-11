var mainScene = function () {


  // This creates a basic Babylon Scene object (non-mesh)
	var physEngine = new BABYLON.CannonJSPlugin(false);
	var scene = new BABYLON.Scene(engine);
	scene.collisionsEnabled = true;
	scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), physEngine);
	physEngine.setTimeStep(1/60);


	let univers = initUnivers(scene);
	let playerCamera = initPlayerCamera(scene);
	let basketball = initBasketball(scene, playerCamera);

  return scene;

};
