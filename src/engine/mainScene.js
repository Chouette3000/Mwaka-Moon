var mainScene = function () {
	let scene = new BABYLON.Scene( engine );

	var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
	var physicsPlugin = new BABYLON.CannonJSPlugin();
	scene.enablePhysics(gravityVector, physicsPlugin);
	scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
	
	let univers = initUnivers(scene);
	let playerCamera = initPlayerCamera(scene);
	let basketball = initBasketball(scene, playerCamera);

  return scene;

};
