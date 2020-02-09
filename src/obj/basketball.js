var initBasketball = function (scene, playerCamera) {
	
	var meshisin = BABYLON.AbstractMesh;
	var ball; 
	meshisin = BABYLON.SceneLoader.ImportMesh("", "resources/obj/ball/", "scene.gltf", scene, function (newMeshes) {	
		ball = newMeshes[0];
		ball.position.y += 10;
		var a = 0;
		engine.runRenderLoop( () => {
			scene.render();
			a +=0.010;
			var sign = Math.cos(a)/Math.abs(Math.cos(a));
			ball.position.x += 1 * sign;
			ball.position.y += 1 * sign;
		})  
		playerCamera.lockedTarget = ball;
	});
	
	return ball;
}