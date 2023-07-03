import * as THREE from 'three'
import Sizes from './Utils/Sizes';
import Camera from './Camera';
import Rendere from './Rendere';
import Rooms from './Rooms';
export default class Experience{
    static instance;
    constructor(canvas){
        if(Experience.instance){
            return Experience.instance;
        }
        Experience.instance = this;
        this.scene = new THREE.Scene();
        this.canvas = canvas;
        this.sizes = new Sizes();
        console.log(this.sizes)
        this.camera = new Camera();
        console.log(this.camera)
        this.rendere = new Rendere();
        console.log(this.rendere, this.rendere.renderer)
        this.room = new Rooms();
        console.log(this.room)
        this.sizes.on("resize",()=>{
            this.resize();
        })
    }

    resize(){
        this.camera.resize();
        this.room.resize();
        this.rendere.resize();
    }
}