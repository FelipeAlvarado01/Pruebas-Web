import * as THREE from "../../node_modules/three/build/three.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

        
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    //renderer.setClearColor(0x000000, 1);
    document.getElementById('three-container').appendChild( renderer.domElement ); //Se obtiene el div del html y se le agrega el renderer
    
    const controls = new OrbitControls( camera, renderer.domElement );


    const geometry = new THREE.BoxGeometry();
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Cara 1 - rojo
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Cara 2 - verde
        new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Cara 3 - azul
        new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Cara 4 - amarillo
        new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Cara 5 - magenta
        new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cara 6 - cian
    ];    
    const cube = new THREE.Mesh(geometry, materials);
    cube.position.set(0, -5 , 0);
    scene.add(cube);

    const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
    topLight.position.set(5, 5, 5) //top-left-ish
    topLight.castShadow = true;
    scene.add(topLight);

    camera.position.z = 5;
    //scene.background = new THREE.Color(0xE83D02);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        //console.log("hola");
        //console.log(threeContainer.clientWidth);
    }

    animate();
