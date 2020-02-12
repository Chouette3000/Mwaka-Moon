var mainScene = function () {


  // This creates a basic Babylon Scene object (non-mesh)
	var physEngine = new BABYLON.CannonJSPlugin(false);
	var scene = new BABYLON.Scene(engine);
	scene.collisionsEnabled = true;
	scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), physEngine);
	physEngine.setTimeStep(1/60);

	let univers = new Univers(scene);
	let playerCamera = initPlayerCamera(scene);
	//let basketball = initBasketball(scene, playerCamera);
	let ball = new Ball(scene, playerCamera);
	
	ball.initBasketball().then((basketball) => {
		console.log('bas, ',basketball.position);
		const ballControl = new BallControl(basketball);
		ballControl.initControl();
	})
	
	var boxPlateforme = getNewPlateforme(scene, playerCamera);
	console.log(boxPlateforme.position);
  return scene;
};
