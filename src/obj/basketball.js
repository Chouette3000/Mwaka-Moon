var initBasketball = function (scene, playerCamera) {
	//
	// Sphere
	//
	/*let sphere = BABYLON.MeshBuilder.CreateSphere( "sphere", {
	   diameter: 2,
	   segments: 16
	}, scene );

	let mat =  new BABYLON.StandardMaterial( "mat", scene );
	mat.diffuseColor = new BABYLON.Color3( 1, 0, 0 );
	mat.ambientTexture = new BABYLON.Texture("resources/textures/vector-of-basketball-texture.jpg", scene);
	sphere.material = mat;
	*/
	
	var meshisin = BABYLON.AbstractMesh;
	var ball; 
	meshisin = BABYLON.SceneLoader.ImportMesh("", "resources/obj/ball/", "scene.gltf", scene, function (newMeshes) {	
		ball = newMeshes[0];
		ball.position.y += 10;
		var a = 0;
		console.log(ball.position.x);
		engine.runRenderLoop( () => {
			scene.render();
			a +=0.010;
			var sign = Math.cos(a)/Math.abs(Math.cos(a));
			ball.position.x += 1 * sign;
			ball.position.y += 1 * sign;
			console.log(ball.position.x);
			console.log(ball.position.y);
		})  
		playerCamera.lockedTarget = ball;
	});
	
	
	/*var angleX = Math.PI/4;
	var totalTicks = 1;
	function rot() {
		//console.log('test');
		ball.rotate(BABYLON.Axis.X, angleX/totalTicks, BABYLON.Space.WORLD);
		totalTicks += 5;
		setTimeout(rot, 100)
	}
	
	
	setTimeout(rot, 500);*/
	


	/*var a = 0; 
	engine.runRenderLoop( () => {
		scene.render();
		a +=0.010;
		var sign = Math.cos(a)/Math.abs(Math.cos(a));
		sphere.position.x += 1 * sign;
	})  */
	//BABYLON.SceneLoader.ImportMesh("bmw7", "scenes/", "bmw7.babylon", scene, function (newMeshes) {      
	

	
	return ball;
}