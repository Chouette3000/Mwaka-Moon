class Chrono {
    constructor(){
        this.s = 0;
        this.m = 0;
    }
    start(){
        setTimeout(()=>{
            this.s += 1
            if(this.s === 60){
                this.s = 0;
                this.m += 1;
            }
            this.start()
        },1000)
    }

    getSeconds(){
        return this.m * 60 + this.s;
    }

    show(){
        return this.m === 0 ? `${this.s} sec`
            : `${this.m} min et ${this.s} sec`
    }
} 