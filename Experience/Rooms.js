import * as THREE from 'three';
import Experience from "./Experience";

export default class Rooms{
    constructor(){
        this.experience = new Experience();
        this.renderer = this.experience.rendere;
        this.scene = this.experience.scene;
        this.camera = this.experience.camera;

        this.createBox();
        this.animate();
    }

    createBox(){
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshNormalMaterial()
        this.cube = new THREE.Mesh( this.geometry, this.material );

        this.scene.add( this.cube );
    }
    animate(){
        window.requestAnimationFrame( ()=> this.animate() );
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.renderer.render(this.scene,this.camera.camera)
    }

    resize(){
        this.renderer.renderer.render(this.scene,this.camera.camera)
    }
}