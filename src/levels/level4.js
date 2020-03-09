
class Level4 extends Level{

	constructor(scene, ball, positionDebutLvl, rotation) {
		super(scene, ball, positionDebutLvl, positionDebutLvl.x+100, positionDebutLvl.y+38, positionDebutLvl.z+100, rotation);
	}

	initLevel(){
		var pos = this.positionInitLvl;
		var ecartXZ = this.plateSize+4;
		this.nbPlats = 4;
		var ecartY = 4;
		var index = 0;
		var pos2 = pos;
		var pos3 = pos;
		while(pos.y < (this.positionFinLvl.y-ecartY)){
			pos = new BABYLON.Vector3(pos.x + ecartXZ, pos.y + ecartY, pos.z + ecartXZ);
			if(this.positionFinLvl.x < pos.x || this.positionFinLvl.y < pos.y || this.positionFinLvl.z < pos.z)
				break;
			// la vraie plateforme
			this.plateforms.push(new Plateforme(this.scene, this.getWidth("extra-small"), new BABYLON.Vector3(pos.x, pos.y, pos.z), "normal", this.spherePivot));
			if(index > 0)
				this.setFallingPlateform(this.plateforms[this.plateforms.length-1]);
			index++;	
			// les 2 plateformes pièges autour
			pos2 = new BABYLON.Vector3(pos2.x+ecartXZ, pos.y+ecartY, pos.z + ecartXZ);
			pos3 = new BABYLON.Vector3(pos.x + ecartXZ, pos.y+ecartY, pos.z);this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos2.x, pos2.y, pos2.z), "normal", this.spherePivot));

			this.setFirePlateform(this.plateforms[this.plateforms.length-1]);
			this.plateforms.push(new Plateforme(this.scene, this.plateSize, new BABYLON.Vector3(pos3.x, pos3.y, pos3.z), "normal", this.spherePivot));
			this.setFirePlateform(this.plateforms[this.plateforms.length-1]);
			index++;
		}
		//this.setFirePlateform(this.borderPlateforms[0]);
		//this.setFallingPlateform(this.plateforms[0]);
		//this.setFallingPlateform(this.plateforms[2]);
		//this.setMovingAnimation(this.plateforms[1], "X");
		//this.setMovingAnimation(this.plateforms[3], "Y");
	}
}
