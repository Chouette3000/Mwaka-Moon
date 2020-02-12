
var getNewPlateforme = async function (scene) {
	
	// Material
	var mat = new BABYLON.StandardMaterial("whiteTransparant", scene);
	mat.diffuseColor = new BABYLON.Color4(0.97, 0.97, 0.99);
	mat.alpha = 0.2;	// transparence
	
	// Plateforme
	var boxPlateforme = BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25}, scene);
	boxPlateforme.position.x = -1.5;
	boxPlateforme.material = mat;
	
	return boxPlateforme;
}

// style dispos : resources/textures/lavatile.jpg  ||  resources/textures/SunDiffuse.png
var getNewPlateformeWithStyle = async function (scene, style) {
	
	// Material
	var matWithTexture = grass0.diffuseTexture = new BABYLON.Texture(style, scene);
	mat.diffuseColor = new BABYLON.Color4(0.97, 0.97, 0.99);
	//mat.alpha = 0.2;	// transparence
	
	// Plateforme
	var boxPlateforme = BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25}, scene);
	boxPlateforme.position.x = -1.5;
	boxPlateforme.material = mat;
	
	return boxPlateforme;
}
	
