class Chrono {
    constructor(){
        this.debut = 0;
        this.fin = 0;
        this.resultMs = 0;
    }
    start(){
      this.debut = new Date();
    }

    end(){
      if(this.fin == 0){
        this.fin = new Date();
        this.resultMs = (this.fin.getTime() - this.debut.getTime());
      }
    }

    getMin(){
        this.end();
        return Math.floor(this.getSeconds() / 60);
    }
    getSeconds(){
        this.end();
        return Math.floor(this.resultMs / 1000);
    }
    getMs(){
        this.end();
        return (this.resultMs % 1000);
    }

    show(){
        return this.getMin()  + " min " +  this.getSeconds() + " sec " +  this.getMs() + " ms "
    }

    show2(){
      let min = this.getMin().toString();
      let sec = this.getSeconds().toString();
      let ms = this.getMs().toString();
      if ( sec.length < 2 )
        sec = "0" + sec;
      if ( ms.length < 3 )
        ms = "00" + ms;
      else if(ms.length < 2)
        ms = "0" + ms;
      if ( min.length < 4 ){
        for (var i = min.length; i < 4; i++)
          min = "0" + min;
      }


      return min + ":" + sec + ":" + ms;
    }
}
