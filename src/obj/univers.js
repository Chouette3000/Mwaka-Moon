var initUnivers = function (scene) {
	//
	// Lighting
	//
	let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,5,0), scene);
	let light2 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 5, 0), scene);
	
	var skybox = BABYLON.Mesh.CreateBox("skyBox", 10000.0, scene);

	//skybox.infiniteDistance = true; // <-- with this you can make the skybox of infinite size
			
	// create material for the skybox
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.disableLighting = true;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("resources/textures/skybox/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skybox.infiniteDistance = true;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skybox.material = skyboxMaterial;
	
	return skybox;
}