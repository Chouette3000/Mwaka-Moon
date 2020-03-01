var musicMenu = null;

var startMenuScene = function () {

	var scene = new BABYLON.Scene(engine);

	// Camera
	var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 2, 0), scene);
	camera.setTarget(BABYLON.Vector3.Zero());
	camera.attachControl(canvas, true);

	// light
	var light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), scene);
    var light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);

	// sky
	var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("resources/textures/skybox/troll/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseTexture = new BABYLON.Texture("resources/textures/skybox/skybox_py.jpg", scene);
	skybox.material = skyboxMaterial;
	
	// music
	musicMenu = new BABYLON.Sound("musicMenu", "resources/music/chevauchee-des-walkyries.mp3", scene, null, {
		loop: true,
		autoplay: true
	});
	musicMenu.setVolume(0.1);
	rotationBallon(camera, scene);  //scene.debugLayer.show();
	
	return scene;
};

var rotationBallon = async function (camera, scene) {

	let sphere = await initBasketball(scene, camera);
	sphere.position.y = 1;
	var axis = new BABYLON.Vector3(11, 0, 0);
	scene.registerAfterRender(function () {
    sphere.rotate(axis, 0.01, BABYLON.Space.WORLD);
  });
}
