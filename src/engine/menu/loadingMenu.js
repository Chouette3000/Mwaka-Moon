class LoadingMenu {
  constructor(hauteur, largeur) {
    this.show();
    setTimeout(this.hide, 3000);
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
