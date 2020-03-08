
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
		this.fallingPlateforms = [];
		this.initPivot();
		this.initLimits();
		this.initLevel();
		this.initOnGroundAll();
		console.log("plateforme 1: " + this.borderPlateforms[1].boxPlateforme.position);
	}
	setBallPositionOnPlateforme(plateform){
		const posPltDebut = plateform.position;
		this.ball.position.x = posPltDebut.x
		this.ball.position.y = posPltDebut.y + 5
		this.ball.position.z = posPltDebut.z
	}

	initOnGroundAll(){
		initOnGround(this.ball, this.borderPlateforms[0].boxPlateforme);
		initOnGround(this.ball, this.borderPlateforms[1].boxPlateforme);
		for(let i = 0; i < this.plateforms.length; i++){
			initOnGround(this.ball, this.plateforms[i].boxPlateforme, this.plateforms[i].getType());
		}
	}

	setFallingPlateform(plateforme){
		this.fallingPlateforms.push(plateforme);
		plateforme.setType("gravity");
	}

	initPivot(){
		var tmp = ""+Math.random();
		this.spherePivot = BABYLON.MeshBuilder.CreateBox("boxPivot"+tmp, { height: 10, width: 10, depth: 10}, this.scene);
		this.spherePivot.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0));
		this.spherePivot.rotation.y = this.rotationX;
		this.spherePivot.visibility = 0;
	}

	setFirePlateform(plateforme){
		plateforme.setFireTexture();
		var smokeSystem = getParticlesSmoke(plateforme.boxPlateforme, this.scene);
		var fireSystem = getParticlesFire(plateforme.boxPlateforme, this.scene);
		smokeSystem.start();
		fireSystem.start();
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
		this.borderPlateforms[0] = new Plateforme(this.scene, this.plateSize, this.positionInitLvl, "debutFin", this.spherePivot);
		this.borderPlateforms[1] = new Plateforme(this.scene, this.plateSize, this.positionFinLvl, "debutFin", this.spherePivot);
	}

	initLevel(){

	}

	checkPositionLimits(pos){
		if(pos.x > this.maxX || pos.z > this.maxZ || pos.y > this.maxY){
			console.log("limite Dépassée");
			return false;
		}
		return true;
	}

	setMovingAnimation(plateforme, axe){
		plateforme.setType("moving");
		switch (axe) {
		  case 'X':
			this.addAnimationMovingX(plateforme.boxPlateforme);
			this.addAnimationMovingX(plateforme.boxPlateformeBottom);
			break;
		  case 'Y':
			this.addAnimationMovingY(plateforme.boxPlateforme);
			this.addAnimationMovingY(plateforme.boxPlateformeBottom);
			break;
		  case 'Z':
			this.addAnimationMovingZ(plateforme.boxPlateforme);
			this.addAnimationMovingZ(plateforme.boxPlateformeBottom);
			break;
		}
	}

	addAnimationMovingX(box){
	    var animationBox = new BABYLON.Animation("animationX"+box.name, "position", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		var start = box.position;
		// Animation keys
		var keys = [];
		keys.push({
			frame: 0,
			value: start
		});

		keys.push({
			frame: 0,
			value: new BABYLON.Vector3(start.x, start.y, start.z)
		});
		keys.push({
			frame: 20,
			value: new BABYLON.Vector3(start.x+5, start.y, start.z)
		});
		keys.push({
			frame: 40,
			value: new BABYLON.Vector3(start.x+10, start.y, start.z)
		});
		keys.push({
			frame: 60,
			value: new BABYLON.Vector3(start.x+5, start.y, start.z)
		});
		keys.push({
			frame: 80,
			value: new BABYLON.Vector3(start.x, start.y, start.z)
		});

		animationBox.setKeys(keys);
		box.animations.push(animationBox);
		scene.beginAnimation(box, 0, 100, true);
   }

   addAnimationMovingY(box){
	    var animationBox = new BABYLON.Animation("animationY"+box.name, "position", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		var start = box.position;
		// Animation keys
		var keys = [];
		keys.push({
			frame: 0,
			value: start
		});

		keys.push({
			frame: 0,
			value: new BABYLON.Vector3(start.x, start.y, start.z)
		});
		keys.push({
			frame: 20,
			value: new BABYLON.Vector3(start.x, start.y-5, start.z)
		});
		keys.push({
			frame: 40,
			value: new BABYLON.Vector3(start.x, start.y-10, start.z)
		});
		keys.push({
			frame: 60,
			value: new BABYLON.Vector3(start.x, start.y-5, start.z)
		});
		keys.push({
			frame: 80,
			value: new BABYLON.Vector3(start.x, start.y, start.z)
		});

		animationBox.setKeys(keys);
		box.animations.push(animationBox);
		scene.beginAnimation(box, 0, 100, true);
   }

   addAnimationMovingZ(box){
	    var animationBox = new BABYLON.Animation("animationZ"+box.name, "position", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		var start = box.position;
		// Animation keys
		var keys = [];
		keys.push({
			frame: 0,
			value: start
		});

		keys.push({
			frame: 0,
			value: new BABYLON.Vector3(start.x, start.y, start.z)
		});
		keys.push({
			frame: 20,
			value: new BABYLON.Vector3(start.x, start.y, start.z+5)
		});
		keys.push({
			frame: 40,
			value: new BABYLON.Vector3(start.x, start.y, start.z+10)
		});
		keys.push({
			frame: 60,
			value: new BABYLON.Vector3(start.x, start.y, start.z+5)
		});
		keys.push({
			frame: 80,
			value: new BABYLON.Vector3(start.x, start.y, start.z)
		});

		animationBox.setKeys(keys);
		box.animations.push(animationBox);
		scene.beginAnimation(box, 0, 100, true);
   }


	getWidth(size){
		switch (size) {
			case 'extra-small':
				return 7.00;
				break;
			case 'small':
				return 9.00;
				break;
			case 'mi-small':
				return 11.00;
				break;
			case 'medium':
				return 15.00;
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
