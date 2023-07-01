export default class Sizes{
    constructor(){
        this.witdh = window.innerWidth;
        this.heigth = window.innerHeight;
        this.aspect = this.witdh/this.heigth;

        window.addEventListener("resize",()=>{
            this.witdh = window.innerWidth;
            this.heigth = window.innerHeight;
            this.aspect = this.witdh/this.heigth;
        })
    }
}