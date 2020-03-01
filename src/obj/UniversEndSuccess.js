var scene = null;
var camera = null;
class UniversEndSucess extends Univers {
  constructor(scene) {
    super(scene);
  }

  async init() {
    this.initLight();
    this.initSkybox();
    await this.initGround();
    //await this.initCannon();
	//this.scene.debugLayer.show();
	scene = this.scene;
  }
}
