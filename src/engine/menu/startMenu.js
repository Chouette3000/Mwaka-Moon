class StartMenu {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
  
  show(){
    $("#startingMenu").show();
    $("#canvas").show();
  }

  hide(){
    $("#startingMenu").hide();
    engine.resize();
  }
}
