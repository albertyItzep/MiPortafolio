
import * as THREE from 'three'
import Experience from "./Experience"

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;

        this.createPerspectiveCamera();
    }
    createPerspectiveCamera(){
        this.camera = new THREE.PerspectiveCamera(75, this.sizes.aspect, 0.1, 1000);
        this.camera.position.z = 5;
        this.scene.add(this.camera)
    }

    resize(){
        this.camera.aspect = this.experience.sizes.aspect;
    }
}