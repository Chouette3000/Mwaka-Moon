
var getNewPlateforme = function (scene, playerCamera) {
	
	var mat = new BABYLON.StandardMaterial("mat", scene);
	mat.ambientTexture = new BABYLON.Texture("resources/textures/distortion.png", scene);
	mat.alpha = 0.7;

	// Plateforme
	var boxPlateforme = BABYLON.MeshBuilder.CreateBox("box", { height: 5, width: 150.00, depth: 150.00}, scene);
	boxPlateforme.position.y = 150;
	boxPlateforme.material = mat;
	boxPlateforme.physicsImpostor = new BABYLON.PhysicsImpostor(boxPlateforme, BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0, restitution: 0.9 }, scene);
    boxPlateforme.convertToFlatShadedMesh();
	playerCamera.lockedTarget = boxPlateforme;
	//console.log(boxPlateforme.position);
	return boxPlateforme;
}

	
