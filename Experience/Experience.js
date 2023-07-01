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
        this.camera = new Camera();
        this.rendere = new Rendere();
        this.room = new Rooms();
    }
}