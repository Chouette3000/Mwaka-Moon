var initBasketball = function (scene, engine, playerCamera) {
	//
	// Sphere
	//
	let sphere = BABYLON.MeshBuilder.CreateSphere( "sphere", {
	   diameter: 2,
	   segments: 16
	}, scene );

	let mat =  new BABYLON.StandardMaterial( "mat", scene );
	mat.diffuseColor = new BABYLON.Color3( 1, 0, 0 );
	mat.ambientTexture = new BABYLON.Texture("resources/textures/vector-of-basketball-texture.jpg", scene);
	sphere.material = mat;
	
	playerCamera.lockedTarget = sphere;


	var a = 0; 
	engine.runRenderLoop( () => {
		scene.render();
		a +=0.010;
		var sign = Math.cos(a)/Math.abs(Math.cos(a));
		sphere.position.x += 0.02 * sign;
	})  
	
	return sphere;
}