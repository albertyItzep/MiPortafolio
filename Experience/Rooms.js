import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Experience from "./Experience";

export default class Rooms{
    constructor(){
        this.experience = new Experience();
        this.renderer = this.experience.rendere;
        this.scene = this.experience.scene;
        this.camera = this.experience.camera;

        this.createLoadRend();
        this.animate();
    }
    createLoadRend(){
        this.loader = new GLTFLoader();
        this.resize()
        this.loader.load(
            'Models/RooM.glb',
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            function ( error ) {
        
                console.log( 'An error happened' );
        
            }
        );
    }
    animate(){
        window.requestAnimationFrame( ()=> this.animate() );
        this.renderer.renderer.render(this.scene,this.camera.camera)
    }

    resize(){
        this.renderer.renderer.render(this.scene,this.camera.camera)
    }
}