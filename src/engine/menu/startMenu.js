class StartMenu {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }

  hide(){
    $("#startingMenu").hide();
    engine.resize();
  }
}
