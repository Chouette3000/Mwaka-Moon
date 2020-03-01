BABYLON.StandardMaterial.ReflectionTextureEnabled = false;
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

	let ball = new Ball(scene, playerCamera);

	ball.initBasketball().then((basketball) => {

		//console.log('bas, ',basketball.position);
		const ballControl = new BallControl(basketball , playerCamera);
		ballControl.initControl();
		univers.init(basketball);
		var levels = new Levels(scene, basketball, 200, 200, 7);
		var positionLastPlat = levels.positionBase;
		basketball.position = positionLastPlat;
		basketball.position.y += 0.5;
		//console.log(positionLastPlat);
		initCanon(scene, positionLastPlat);
		
		//scene.debugLayer.show();
	})

	scene.ambientColor = new BABYLON.Color3(1, 1, 1);
	
	musicMenu.stop();
	musicAmbiance = new BABYLON.Sound("musicAmbiance", "resources/music/Danse_hongroise.mp3", scene, null, {
		loop: true,
		autoplay: true
	});
	musicAmbiance.setVolume(0.05);
	musicVictoire = new BABYLON.Sound("musicVictoire", "resources/music/lo_sposo.mp3", scene), null;
	musicDefaite = new BABYLON.Sound("musicDefaite", "resources/music/Chopin_ Nocturne_op9n2.mp3", scene);
	musicDefaite.setVolume(2.5);
	musicVictoire.setVolume(2.5);
	musicVictoire.loop = true;
	musicDefaite.loop = true;

	
	return scene;
};

var initCanon = function(scene, position){
	//var volee = null;
	BABYLON.SceneLoader.ImportMesh("", "resources/obj/canon/", "scene.gltf", scene, function (newMeshes) {
        for(var i = 0; i < newMeshes.length; i++){
			if(newMeshes[i].name.includes("Sphere") || newMeshes[i].name.includes("Cube")){
				newMeshes[i].isVisible = false;
			}
			else{
				if(newMeshes[i].name.includes("polySurface3")){
					//newMeshes[i].rotation.x = 50;
					//console.log(newMeshes[i]);
					//console.log(newMeshes[i].rotation);
					var volee = newMeshes[0];
					console.log(volee);
					console.log(volee.name);
					console.log(volee.rotation.x);
					var animation = new BABYLON.Animation("myAnimation", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
					var keys = []; 

							 // At the animation key 0, the value of scaling is "1"
					keys.push({
					   frame: 0,
					   value: 0
					});

					// At the animation key 50, the value of scaling is "0.2"
					keys.push({
					   frame: 50,
					   value: Math.PI
					});

					// At the animation key 100, the value of scaling is "1"
					keys.push({
					   frame: 100,
					   value: 0
					});

					// Launch animation
					animation.setKeys(keys);
					volee.animations.push(animation);
				}
			}
		}
		//console.log(newMeshes);
		
		newMeshes[0].position = position;
		newMeshes[0].position.y += 0.5;
		newMeshes[0].scaling = new BABYLON.Vector3(1, 1, 1);
		//newMeshes[0].rotation = new BABYLON.Vector3(0, 0, 0);
	});
}

var playAnimationFin = function(camera, ball, volee){
	//camera.target = new BABYLON.Vector3(-200, 400, 200);
	//camera.attachControl(canvas, false);
	for(var i = volee.x ; i > 70; i++){
		volee.position.x++;
		console.log(volee);
	}
	//ball.physicsImpostor.applyImpulse(new BABYLON.Vector3(-400, 200, -400), ball.getAbsolutePosition());
}
// x, y, z, indiceRotation
