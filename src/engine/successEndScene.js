var successEndScene = function () {

	// This creates a basic Babylon Scene object (non-mesh)
	var physEngine = new BABYLON.CannonJSPlugin(false);
	var scene = new BABYLON.Scene(engine);
	scene.collisionsEnabled = true;
	scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), physEngine);
	physEngine.setTimeStep(1/60);

	// Parameters: alpha, beta, radius, target position, scene
	let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(100, 40, 100), scene);
	
	let univers = new UniversEndSucess(scene);
	univers.init();
	
	console.log(scene);
	BABYLON.SceneLoader.Append("resources/obj/cannon/", "scene.gltf", scene, function (scene) {
        // Create a default arc rotate camera and light.
		//thescene.createDefaultCamera(true, true, true);
        //scene.createDefaultCameraOrLight(true, true, true);
		console.log(scene);
		//thescene.position.set(0, 0, 0);
		//thescene.scale.set(5,10,5);
        // The default camera looks at the back of the asset.
        // Rotate the camera by 180 degrees to the front of the asset.
       // scene.activeCamera.alpha += Math.PI;
    });
	//scene.animationsEnabled = false;
	scene.debugLayer.show();
	
	//univers.putCamera(camera);
	//scene = univers.scene;
	//camera.setTarget(univers.cannon);

	//testtrucrotation(camera, scene);

	return scene;
};

var testtrucrotation = async function (camera, scene) {

	let sphere = await initBasketball(scene, camera);

	var axis = new BABYLON.Vector3(2, 0, 4);
	scene.registerAfterRender(function () {
    sphere.rotate(axis, 0.01, BABYLON.Space.WORLD);
  });
}
