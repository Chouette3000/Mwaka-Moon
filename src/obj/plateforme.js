
class Plateforme{

	constructor(scene, size, position, type, spherePivot) {
		this.scene = scene;
		this.initPlateforme(size, 1, position, type, spherePivot);
	}

	initPlateforme(size, height, position, type, spherePivot){
		this.sizeBox = size;
		this.boxPlateforme = this.genPlateforme(height, position, 0, type, spherePivot);
		this.boxPlateformeBottom = this.genPlateforme(height, position, Math.PI, type, spherePivot);
	}

	genPlateforme(height, position, rotationZ, type, spherePivot){
		// Materials
		let mat = new BABYLON.StandardMaterial("mat"+rotationZ, this.scene);
		mat.ambientTexture = new BABYLON.Texture(type, this.scene);
		mat.alpha = 0.4;

		// Plateforme
		let boxPlateforme = BABYLON.MeshBuilder.CreateBox("box"+rotationZ, { height: height, width: this.sizeBox, depth: this.sizeBox}, this.scene);
		boxPlateforme.position = position; // 150
		boxPlateforme.material = mat;
	
		//boxPlateforme.rotation.y = rotationX;
		boxPlateforme.rotation.z = rotationZ;
		boxPlateforme.physicsImpostor = new BABYLON.PhysicsImpostor(boxPlateforme, BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0, restitution: 0.9 }, this.scene);
		boxPlateforme.convertToFlatShadedMesh();
		boxPlateforme.parent = spherePivot;
		return boxPlateforme;
	}

}
