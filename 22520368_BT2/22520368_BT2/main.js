import * as THREE from 'three';

function init(){
    var scene = new THREE.Scene();

    var box = getBox(1, 1, 1);
    var sphere = getSphere(1, 1, 1);
    var cylinder = getCylinder(1, 1, 1);
    var plane = getPlane(6);

    box.position.y = box.geometry.parameters.height/2;
    box.position.z = 1; 
    box.position.x = 1;

    sphere.position.x = 3;
    sphere.position.y = 1;
    sphere.position.z = 1;

    cylinder.position.x = -1;
    cylinder.position.y = cylinder.geometry.parameters.height/2;
    cylinder.position.z = 1;

    plane.rotation.x = Math.PI/2;
    plane.position.x = 1;

    scene.add( box );
    scene.add( sphere );
    scene.add( cylinder );
    scene.add( plane );

    var camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    camera.lookAt( new THREE.Vector3(1, 0, 0));

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);

    renderer.render(
        scene,
        camera
    );
}

function getBox(w, h, d){
    var geometry = new THREE.BoxGeometry(1, 1, 1, 8);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true
    })
    var mesh = new THREE.Mesh(
        geometry,
        material
    );

    return mesh;
}

function getSphere(w, h, d){
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    });
    var sphere = new THREE.Mesh(geometry, material);

    return sphere;
}

function getCylinder(w, h, d){
    var geometry = new THREE.CylinderGeometry(1,1,1,32);

    var material = new THREE.MeshBasicMaterial({ 
        color: 0xff0000, 
        wireframe: true,
        side: THREE.DoubleSide });
    var mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

function getPlane(size){
    var geometry = new THREE.PlaneGeometry(size, size);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(geometry, material);

    return mesh;
}

init();
