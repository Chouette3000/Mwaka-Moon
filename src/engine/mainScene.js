var mainScene = function () {

	let scene = new BABYLON.Scene( engine );
	let playerCamera = initPlayerCamera(scene);
	
	let univers = initUnivers(scene);
	let basketball = initBasketball(scene, playerCamera);
	
    return scene;

};