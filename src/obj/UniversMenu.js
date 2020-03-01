class UniversMenu extends Univers {
  constructor(scene) {
    super(scene);
  }

  init() {
    this.initLight();
    this.initSkybox();
  }
  
  initSkybox(){
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("resources/textures/skybox/troll/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseTexture = new BABYLON.Texture("resources/textures/skybox/skybox_py.jpg", scene);
	skybox.material = skyboxMaterial;	
  }
}
