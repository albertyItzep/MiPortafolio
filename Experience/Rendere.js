import * as THREE from 'three'
import Experience from "./Experience";

export default class Rendere{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas;

        this.createRenderer();
    }

    createRenderer(){
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true, 
        })
        this.renderer.setSize(this.sizes.width,this.sizes.height);
    }

    resize(){
       this.renderer.setSize(this.sizes.width,this.sizes.height);
        console.log("render actualizado");
    }
}