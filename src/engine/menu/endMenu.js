class EndMenu {
	constructor() {
		document.getElementById("replayGame").addEventListener("click", this.hideEnd);
	}

	playEnd(end) {
		controlOn = false;
		$("#currentLevel").hide();
		musicAmbiance.stop();
		$("#endMenu").show();
		if(end == "endSuccess"){
			musicVictoire.play();
			$( "#endMenu h2" ).last().html( "Mission accomplie" );
		}
		else{
			musicDefaite.play();
			$( "#endMenu h2" ).last().html( "Mission échouée" );
		}
		$( "#endMenu #endText" ).last().html( this.getTextFin(end) );
	}

	hideEnd(){
		$("#endMenu").hide();
		var event = new Event('restartGame');
		document.getElementById("endMenu").dispatchEvent(event);
		musicDefaite.stop();
		musicVictoire.stop();
	}

	getTextFin(fin){
		switch (fin) {
			case 'endSuccess':
				return "Mission accomplie avec succès !";
				break;
			case 'endSpace':
				return "Et le ballon dériva dans l'espace... Après des années d'errance, il atterit sur Mars.";
				break;
			case 'endTrap':
				return "Le ballon connut une fin tragique sur cet astre hostile ...";
				break;
			case 'endChute':
				return "Après cette chute vertigineuse, le ballon perdit tout espoir et préféra s'installer sur la Lune.";
				break;
			case 'endLune':
				return "Le ballon prit peur dès les premiers obstacles, il préféra rester au sol et explorer la Lune.";
				break;
			case 'endBoom':
				return "Ca sent le barbecue, le ballon n'est pas prêt à risquer son caoutchouc !";
				break;
		}
	}
}
