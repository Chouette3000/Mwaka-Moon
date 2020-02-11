class LoadingMenu {
  constructor(hauteur, largeur) {
    this.show();
  }

  show(){
    $("#loadingMenu").show();
    $("#canvas").hide();
  }

  hide(){
    $("#loadingMenu").hide();
    $("#canvas").show();
    engine.resize();
  }

}
