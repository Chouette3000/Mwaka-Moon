
class Plateforme{

	constructor(scene, size, position, type, spherePivot, effet) {
		this.scene = scene;
		this.effet = effet;
		this.position = position;
		this.initPlateforme(size, 1, position, type, spherePivot);
	}

	initPlateforme(size, height, position, type, spherePivot){
		this.sizeBox = size;
		this.boxPlateforme = this.genPlateforme(height, position, 0, type, spherePivot);
		this.boxPlateformeBottom = this.genPlateforme(height, position, Math.PI, type, spherePivot);
	}

	genPlateforme(height, position, rotationZ, type, spherePivot){
		// Materials
		this.type = type;
		let mat = new BABYLON.StandardMaterial("mat"+rotationZ, this.scene);
		mat.ambientTexture = new BABYLON.Texture(this.getTexture(type), this.scene);
		mat.alpha = 0.4;

		// Plateforme
		let boxPlateforme = BABYLON.MeshBuilder.CreateBox("box"+rotationZ, { height: height+1, width: this.sizeBox, depth: this.sizeBox}, this.scene);
		boxPlateforme.position = position; // 150
		boxPlateforme.material = mat;

		//boxPlateforme.rotation.y = rotationX;
		boxPlateforme.rotation.z = rotationZ;
		boxPlateforme.physicsImpostor = new BABYLON.PhysicsImpostor(boxPlateforme, BABYLON.PhysicsImpostor.HeightmapImpostor, { mass: 0, restitution: 0}, this.scene);
		boxPlateforme.convertToFlatShadedMesh();
		boxPlateforme.parent = spherePivot;
		return boxPlateforme;
	}

	setType(type){
		this.type = type;
		let mat = new BABYLON.StandardMaterial("mat"+type, this.scene);
		mat.ambientTexture = new BABYLON.Texture(this.getTexture(type), this.scene);
		mat.alpha = 0.4;
		this.boxPlateforme.material = mat;
		this.boxPlateformeBottom.material = mat;
	}

	getType(){
		return this.type;
	}

	setFireTexture(){
		this.type = "fire";
		var fireMaterial = new BABYLON.StandardMaterial("fontainSculptur2", scene);
		var fireTexture = new BABYLON.FireProceduralTexture("fire", 256, scene);
		fireMaterial.diffuseTexture = fireTexture;
		fireMaterial.opacityTexture = fireTexture;
		this.boxPlateforme.material = fireMaterial;
		this.boxPlateformeBottom.material = fireMaterial;
	}

	getTexture(type){
		this.type = type;
		switch (type) {
		  case 'normal':
			return "resources/textures/fire.png";
		  case 'debutFin':
			return "resources/textures/distortionVert.png";
		  case 'gravity':
			return "resources/textures/floor.png";
		case 'moving':
			return "resources/textures/distortionBleu.png";
		case 'fire':
			return "resources/textures/lavatile.jpg";
		  case 'explosive':
			return "resources/textures/lavatile.jpg";
			break;
		  default:
			return type;
		}
	}
}
