
class Level{
	constructor(scene, ball, positionDebutLvl, sizeX, sizeY, sizeZ, rotationX) {
		this.scene = scene;
		this.ball = ball;
		this.sizeLvl = [sizeX, sizeY, sizeZ];
		this.positionDebutLvl = positionDebutLvl;
		this.plateSize = this.getWidth("medium");
		this.rotationX = rotationX;
		this.ecartMax = 10;
		this.plateforms = [];
		this.borderPlateforms = [];
		this.initTextures();
		this.initPivot();
		this.initLimits();
		this.initLevel();
		this.initOnGroundAll();
		//console.log("plateforme 0: " + this.borderPlateforms[0].boxPlateforme.position);
		//console.log("plateforme 1: " + this.borderPlateforms[1].boxPlateforme.position);
		//console.log("plateforme avant dernière: " + this.plateforms[this.plateforms.length-1].boxPlateforme.position);
	}

	initOnGroundAll(){
		initOnGround(this.ball, this.borderPlateforms[0].boxPlateforme);
		initOnGround(this.ball, this.borderPlateforms[1].boxPlateforme);
		for(let i = 0; i < this.plateforms.length; i++){
			initOnGround(this.ball, this.plateforms[i].boxPlateforme);
		}
	}

	initPivot(){
		var tmp = ""+Math.random();
		this.spherePivot = BABYLON.MeshBuilder.CreateBox("boxPivot"+tmp, { height: 10, width: 10, depth: 10}, this.scene);
		this.spherePivot.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0));
		this.spherePivot.rotation.y = this.rotationX;
		this.spherePivot.visibility = 0;
	}

	calculPositionDebut(){
		var firstPlatX = this.positionDebutLvl.x - (this.sizeLvl[0]/2);
		var firstPlatY = this.positionDebutLvl.y;
		var firstPlatZ = this.positionDebutLvl.z- (this.sizeLvl[0]/2);
		if(this.positionDebutLvl.x != 0){
			firstPlatX = this.positionDebutLvl.x * (-1);
			firstPlatY = this.positionDebutLvl.y;
			firstPlatZ = this.positionDebutLvl.z * (-1);
		}
		this.positionInitLvl =  new BABYLON.Vector3(firstPlatX, firstPlatY, firstPlatZ);
	}

	calculPositionFin(){
		var maxX = (this.sizeLvl[0]/2)-(this.plateSize);
		var maxY = (this.sizeLvl[1])-(this.plateSize);
		var maxZ = (this.sizeLvl[2]/2)-(this.plateSize);
		this.positionFinLvl = new BABYLON.Vector3(maxX, maxY, maxZ);
	}

	initLimits(){
		this.calculPositionDebut();
		this.calculPositionFin();
		this.borderPlateforms[0] = new Plateforme(this.scene, this.plateSize, this.positionInitLvl, "resources/textures/iceRed.png", this.spherePivot);
		this.borderPlateforms[1] = new Plateforme(this.scene, this.plateSize, this.positionFinLvl, "resources/textures/iceRed.png", this.spherePivot);
	}

	initTextures(){
		//var texturePlatRed = "resources/textures/iceRed.png";
		var texturePlatIce = "resources/textures/ice.jpg";
		var texturePlatIce2 = "resources/textures/ice2.png";
		var texturePlatCloud = "resources/textures/distortion.png";
		this.textures = [texturePlatIce, texturePlatIce2, texturePlatCloud];
	}

	initLevel(){

	}

	getRandomEcartX(plateSize){
		let min = plateSize+3;
		let max = plateSize + this.ecartMax;
		return Math.floor(Math.random() * (max - min) + min);
	}

	getRandomEcartY(){
		let min = 3;
		return Math.floor(Math.random() * (this.ecartMax - min) + min);
	}

	getRandomEcartZ(){
		let min = 1;
		let max = 3;
		return Math.floor(Math.random() * (max - min) + min);
	}

	checkPositionLimits(pos){
		if(pos.x > this.maxX || pos.z > this.maxZ || pos.y > this.maxY){
			console.log("limite Dépassée");
			return false;
		}
		return true;
	}

	getWidth(size){
		switch (size) {
		  case 'small':
			return 9.00;
			break;
		  case 'medium':
			return 15.00;
		  case 'big':
			return 50.00;
			break;
		  default:
			return 15.00;
		}
	}

	getLastPlateformePosition(){
		return this.borderPlateforms[1].boxPlateforme.position;
	}


	getLastPlateforme(){
		return this.borderPlateforms[1].boxPlateforme;
	}
}
