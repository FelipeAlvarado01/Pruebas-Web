import * as THREE from "../../node_modules/three/build/three.module.js";

//document.addEventListener('DOMContentLoaded', function() {
    const threeContainer = document.getElementById('three-container');
    
    //console.log(threeContainer.clientHeight);
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    //renderer.setClearColor(0x000000, 1);
    document.getElementById('three-container').appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    //scene.background = new THREE.Color(0xE83D02);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        console.log("hola");
        //console.log(threeContainer.clientWidth);
    }

    animate();
//});