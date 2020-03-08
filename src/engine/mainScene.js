BABYLON.StandardMaterial.ReflectionTextureEnabled = false;
var difficulty = 2;
var musicAmbiance = null;
var musicVictoire = null;
var musicDefaite = null;
var mainScene = function () {

  // This creates a basic Babylon Scene object (non-mesh)
	var physEngine = new BABYLON.CannonJSPlugin(false);
	const scene = new BABYLON.Scene(engine);
	scene.collisionsEnabled = true;
	scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), physEngine);
	physEngine.setTimeStep(1/60);


	let playerCamera = initPlayerCamera(scene);
	let univers = new Univers(scene);

	//let basketball = initBasketball(scene, playerCamera);
	let ball = new Ball(scene, playerCamera);

	ball.initBasketball().then((basketball) => {

		//console.log('bas, ',basketball.position);
		const ballControl = new BallControl(basketball , playerCamera, difficulty);
		ballControl.initControl();
		univers.init(basketball);
		var levels = new Levels(scene, basketball, 200, 200, 7);

		//scene.debugLayer.show();
	})

	scene.ambientColor = new BABYLON.Color3(1, 1, 1);

	musicMenu.stop();
	musicAmbiance = new BABYLON.Sound("musicAmbiance", "resources/music/Danse_hongroise.mp3", scene, null, {
		loop: true,
		autoplay: true
	});
	musicAmbiance.setVolume(0.05);
	//musicAmbiance = new BABYLON.Sound("musicAmbiance", "resources/music/Danse_hongroise.mp3", scene);
	musicVictoire = new BABYLON.Sound("musicVictoire", "resources/music/lo_sposo.mp3", scene), null;
	musicDefaite = new BABYLON.Sound("musicDefaite", "resources/music/Chopin_ Nocturne_op9n2.mp3", scene);
	musicDefaite.setVolume(2.5);
	musicVictoire.setVolume(2.5);
	musicVictoire.loop = true;
	musicDefaite.loop = true;
	//BABYLON.Engine.audioEngine.setGlobalVolume(1.5);
	//musicAmbiance.play();*/
	return scene;
};
// x, y, z, indiceRotation
