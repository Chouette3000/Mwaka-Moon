
var getNewPlateforme = function (scene, playerCamera) {
	
	var mat = new BABYLON.StandardMaterial("mat", scene);
	mat.ambientTexture = new BABYLON.Texture("resources/textures/distortion.png", scene);
	mat.alpha = 0.6;

	// Plateforme
	var boxPlateforme = BABYLON.MeshBuilder.CreateBox("box", { height: 5, width: 45.00, depth: 45.00}, scene);
	boxPlateforme.position.y = 30;
	boxPlateforme.material = mat;
	boxPlateforme.physicsImpostor = new BABYLON.PhysicsImpostor(boxPlateforme, BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0, restitution: 0.1 }, scene);
    boxPlateforme.convertToFlatShadedMesh();
	playerCamera.lockedTarget = boxPlateforme;
	return boxPlateforme;
}

	
