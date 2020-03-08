
class Level3 extends Level{

	constructor(scene, ball, positionDebutLvl, rotation) {
		super(scene, ball, positionDebutLvl, positionDebutLvl.x+100, positionDebutLvl.y+50, positionDebutLvl.z+100, rotation);
	}

	initLevel(){
		var pos = this.positionInitLvl;
		var ecartX = this.plateSize + 6;
		var ecartY = 4;
		var ecartZ = this.plateSize + 6;
		var typeDef = "normal";

		for(var i = 0; i < 4; i++){
			pos = new BABYLON.Vector3(pos.x + ecartX, pos.y + ecartY, pos.z);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos.x, pos.y, pos.z), typeDef, this.spherePivot));
		}

		var pos2 = this.plateforms[this.plateforms.length-1].boxPlateforme.position;

		while(pos2.y < (this.positionFinLvl.y-ecartY) && pos2.z < (this.positionFinLvl.z-ecartZ)){
			pos2 = new BABYLON.Vector3(pos2.x, pos2.y + ecartY, pos2.z + ecartZ);
			if((this.positionFinLvl.z - pos2.z) < ecartZ)
				break;
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), typeDef, this.spherePivot));
		}
		this.setMovingAnimation(this.plateforms[2], "X");
		this.setMovingAnimation(this.plateforms[4], "Y");
		this.setMovingAnimation(this.plateforms[this.plateforms.length-1], "X");
	}
}
