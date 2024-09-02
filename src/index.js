// import * as THREE from 'three';

// // Variables pour la voiture
// let carBottomColor = "#FFF";
// let carTopColor = "#FFF";
// let carWindowColor = "#666";

// // Créer la scène
// const scene = new THREE.Scene();
// scene.background = new THREE.Color("#f1f1f1");

// // Créer et ajouter la voiture
// const car = createCar();
// scene.add(car);

// // Ajouter la lumière ambiante
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
// scene.add(ambientLight);

// // Ajouter la lumière directionnelle
// const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
// dirLight.position.set(200, 500, 300);
// scene.add(dirLight);

// // Paramétrer la caméra orthographique
// const aspectRatio = window.innerWidth / window.innerHeight;
// const cameraWidth = 300;
// const cameraHeight = cameraWidth / aspectRatio;
// const camera = new THREE.OrthographicCamera(
//   cameraWidth / -2, // gauche
//   cameraWidth / 2,  // droite
//   cameraHeight / 2, // haut
//   cameraHeight / -2, // bas
//   200, // near
//   800  // far
// );
// camera.position.set(200, 200, 200);
// camera.lookAt(0, 10, 0);

// // Créer le renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Ajouter le ciel et le sol
// const textureLoader = new THREE.TextureLoader();

// // Texture du ciel
// const skyTexture = textureLoader.load("static/sky.jpg");
// skyTexture.wrapS = skyTexture.wrapT = THREE.RepeatWrapping;
// skyTexture.repeat.set(100, 100); 
// const skyGeometry = new THREE.SphereGeometry(1000, 32, 32);
// const skyMaterial = new THREE.MeshBasicMaterial({
//   map: skyTexture,
//   side: THREE.BackSide // On rend l'intérieur de la sphère visible
// });
// const skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
// scene.add(skyBox);

// // Texture du sol
// const groundTexture = textureLoader.load("static/grasslight-big.jpg");
// groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
// groundTexture.repeat.set(100, 100); // Répéter la texture pour couvrir le sol
// const groundGeometry = new THREE.PlaneGeometry(1000, 1000); // Grand sol
// const groundMaterial = new THREE.MeshBasicMaterial({ map: groundTexture });
// const ground = new THREE.Mesh(groundGeometry, groundMaterial);
// ground.rotation.x = -Math.PI / 2; // Rotation pour le positionner horizontalement
// scene.add(ground);

// window.addEventListener("resize", onWindowResize, false);



// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// // Mouvement de la voiture avec les touches du clavier
// let y = 0;
// let keydown = '';
// document.body.addEventListener('keydown', e => {
//   e.preventDefault();
//   keydown = e.key;
// });
// document.body.addEventListener('keyup', e => {
//   keydown = '';
// });


// const update = () => {
//   switch (keydown) {
//     case 'ArrowUp':
//       camera.translateX(car.position.x /10);
//       car.translateX(1.0);
//     //  camera.lookAt(car.scene);
  
//       break;
//     case 'ArrowDown':
//       camera.translateX(-0.1);
//       car.translateX(-1.0);
//    //   camera.lookAt(0, 10, 0);
//       break;
//     case 'ArrowLeft':
//       y += 0.08;
//       car.rotation.y = y;
//     //  camera.translateZ(y);
//       //camera.lookAt(10, 10, 0);
//       break;
//     case 'ArrowRight':
//       y -= 0.08;
//       car.rotation.y = y;
//      // camera.translateZ(y);
//     //  camera.lookAt(10, 10, 0);
//       break;
//   }
//   window.requestAnimationFrame(update);
// };
// window.requestAnimationFrame(update);

// // Lancer l'animation
// renderer.setAnimationLoop(() => {
//   renderer.render(scene, camera);
// });

// // Fonctions pour créer la voiture
// function createCar() {
//     const car = new THREE.Group();
  
//     // Créer les roues arrière et avant
//     const backWheel = createWheels();
//     backWheel.position.y = 3;
//     backWheel.position.x = -9;
  
//     car.add(backWheel);
  
//     const frontWheel = createWheels();
//     frontWheel.position.y = 3;
//     frontWheel.position.x = 9;
//     car.add(frontWheel);
  
//     // Corps principal de la voiture
//     const main = new THREE.Mesh(
//       new THREE.BoxGeometry(30, 7.5, 15), // Taille réduite
//       new THREE.MeshLambertMaterial({ color: carBottomColor })
//     );
//     main.position.y = 6;
//     car.add(main);
  
//     // Cabine de la voiture
//     const carFrontTexture = getCarFrontTexture();
//     const carBackTexture = getCarFrontTexture();
//     const carRightSideTexture = getCarSideTexture();
//     const carLeftSideTexture = getCarSideTexture();
//     carLeftSideTexture.center = new THREE.Vector2(0.5, 0.5);
//     carLeftSideTexture.rotation = Math.PI;
  
//     const cabin = new THREE.Mesh(
//       new THREE.BoxGeometry(16.5, 6, 12), // Taille réduite
//       [
//         new THREE.MeshLambertMaterial({ map: carFrontTexture }), // avant
//         new THREE.MeshLambertMaterial({ map: carBackTexture }),  // arrière
//         new THREE.MeshLambertMaterial({ color: carTopColor }),   // haut
//         new THREE.MeshLambertMaterial({ color: carTopColor }),   // bas
//         new THREE.MeshLambertMaterial({ map: carRightSideTexture }), // droite
//         new THREE.MeshLambertMaterial({ map: carLeftSideTexture })   // gauche
//       ]
//     );
//     cabin.position.x = -3;
//     cabin.position.y = 12.75;
//     car.add(cabin);
  
//     return car;
//   }
  
//   function createWheels() {
//     const geometry = new THREE.BoxGeometry(6, 6, 16.5); // Taille réduite des roues
//     const material = new THREE.MeshLambertMaterial({ color: "#333" });
//     return new THREE.Mesh(geometry, material);
//   }
// // Fonction pour obtenir la texture de l'avant de la voiture
// function getCarFrontTexture() {
//   const canvas = document.createElement("canvas");
//   canvas.width = 64;
//   canvas.height = 32;
//   const context = canvas.getContext("2d");
//   context.fillStyle = "#ffffff";
//   context.fillRect(0, 0, 64, 32);
//   context.fillStyle = carWindowColor;
//   context.fillRect(8, 8, 48, 24);
//   return new THREE.CanvasTexture(canvas);
// }

// // Fonction pour obtenir la texture des côtés de la voiture
// function getCarSideTexture() {
//   const canvas = document.createElement("canvas");
//   canvas.width = 128;
//   canvas.height = 32;
//   const context = canvas.getContext("2d");
//   context.fillStyle = "#ffffff";
//   context.fillRect(0, 0, 128, 32);
//   context.fillStyle = carWindowColor;
//   context.fillRect(10, 8, 38, 24);
//   context.fillRect(58, 8, 60, 24);
//   return new THREE.CanvasTexture(canvas);
// }



//**************************************************************************************** */



import * as THREE from 'three';

// Variables pour la voiture
let carBottomColor = "#FFF";
let carTopColor = "#FFF";
let carWindowColor = "#666";

// Créer la scène
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f1f1f1");

// Créer et ajouter la voiture
const car = createCar();
scene.add(car);

// Ajouter la lumière ambiante
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

// Ajouter la lumière directionnelle
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(200, 500, 300);
scene.add(dirLight);

// Paramétrer la caméra orthographique
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 300;
const cameraHeight = cameraWidth / aspectRatio;
const camera = new THREE.OrthographicCamera(
  -cameraWidth / 2, // gauche
  cameraWidth / 2,  // droite
  cameraHeight / 2, // haut
  -cameraHeight / 2, // bas
  200, // near
  800  // far
);
camera.position.set(200, 200, 200);
camera.lookAt(car.position); // Caméra regarde la voiture

// Créer le renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajouter le ciel et le sol
const textureLoader = new THREE.TextureLoader();

// // Texture du ciel
// const skyTexture = textureLoader.load("static/sky.jpg");
// skyTexture.wrapS = skyTexture.wrapT = THREE.RepeatWrapping;
// const skyGeometry = new THREE.SphereGeometry(1000, 32, 32);
// const skyMaterial = new THREE.MeshBasicMaterial({
//   map: skyTexture,
//   side: THREE.BackSide // On rend l'intérieur de la sphère visible
// });
// const skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
// scene.add(skyBox);

// Texture du sol
const groundTexture = textureLoader.load("static/grasslight-big.jpg");
groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set(50, 50); // Répéter la texture pour couvrir le sol
const groundGeometry = new THREE.PlaneGeometry(6000, 6000); // Grand sol
const groundMaterial = new THREE.MeshBasicMaterial({ map: groundTexture });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // Rotation pour le positionner horizontalement
scene.add(ground);
//scene.background = new THREE.Color("#f1f1f1");

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

// Mouvement de la voiture avec les touches du clavier
let y = 0;
let keydown = '';
document.body.addEventListener('keydown', e => {
  e.preventDefault();
  keydown = e.key;
});
document.body.addEventListener('keyup', e => {
  keydown = '';
});

const update = () => {

  switch (keydown) {
    case 'ArrowUp':
      car.translateX(1.0);
      camera.position.z = car.position.z + 100;
      camera.position.x = car.position.x + 200;
      camera.lookAt(car.position);
      car.children.forEach(child => {
        if (child.name === 'wheel') {
          child.rotation.z += 0.6;
        }
      });
      break;
    case 'ArrowDown':
      car.translateX(-1.0);
      camera.position.z = car.position.z + 200;
      camera.position.x = car.position.x + 200;
      car.children.forEach(child => {
        if (child.name === 'wheel') {
          child.rotation.z += 0.6;
        }
      });
      camera.lookAt(car.position);
      break;
    case 'ArrowLeft':
      car.rotation.y += 0.05;
      car.children.forEach(child => {
        if (child.name === 'wheel') {
          child.rotation.z += 0.6;
        }
      });
      break;
    case 'ArrowRight':
      car.rotation.y -= 0.05;
      car.children.forEach(child => {
        if (child.name === 'wheel') {
          child.rotation.z += 0.6;
        }
      });
      break;
      case ('Shift'):
        car.translateX(4.0);
        car.children.forEach(child => {
            if (child.name === 'wheel') {
              child.rotation.z += 0.6;
            }
          });
      camera.position.z = car.position.z + 200;
      camera.position.x = car.position.x + 200;
      camera.lookAt(car.position);
     
      break;
  }
  window.requestAnimationFrame(update);
};
window.requestAnimationFrame(update);

// Lancer l'animation
renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});

// Fonctions pour créer la voiture
function createCar() {
  const car = new THREE.Group();

 // Créer les roues arrière et avant
 const backLeftWheel = createWheels();
 backLeftWheel.position.set(-9, 3, -6);
 car.add(backLeftWheel);

 const backRightWheel = createWheels();
 backRightWheel.position.set(9, 3, -6);
 car.add(backRightWheel);

 const frontLeftWheel = createWheels();
 frontLeftWheel.position.set(-9, 3, 6);
 car.add(frontLeftWheel);

 const frontRightWheel = createWheels();
 frontRightWheel.position.set(9, 3, 6);
 car.add(frontRightWheel);

  // Corps principal de la voiture
  const main = new THREE.Mesh(
    new THREE.BoxGeometry(30, 7.5, 15), // Taille réduite
    new THREE.MeshLambertMaterial({ color: carBottomColor })
  );
  main.position.y = 6;
  car.add(main);

  // Cabine de la voiture
  const carFrontTexture = getCarFrontTexture();
  const carBackTexture = getCarFrontTexture();
  const carRightSideTexture = getCarSideTexture();
  const carLeftSideTexture = getCarSideTexture();
  carLeftSideTexture.center = new THREE.Vector2(0.5, 0.5);
  carLeftSideTexture.rotation = Math.PI;

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(16.5, 6, 12), // Taille réduite
    [
      new THREE.MeshLambertMaterial({ map: carFrontTexture }), // avant
      new THREE.MeshLambertMaterial({ map: carBackTexture }),  // arrière
      new THREE.MeshLambertMaterial({ color: carTopColor }),   // haut
      new THREE.MeshLambertMaterial({ color: carTopColor }),   // bas
      new THREE.MeshLambertMaterial({ map: carRightSideTexture }), // droite
      new THREE.MeshLambertMaterial({ map: carLeftSideTexture })   // gauche
    ]
  );
  cabin.position.x = -3;
  cabin.position.y = 12.75;
  car.add(cabin);

  return car;
}

function createWheels() {
    const radius = 4; // Rayon des roues
    const height = 4; // Épaisseur des roues
  
    const geometry = new THREE.CylinderGeometry(radius, radius, height, 32); // Créer une roue circulaire
    const material = new THREE.MeshLambertMaterial({ color: "#333" });
  
    // Créer le mesh de la roue
    const wheel = new THREE.Mesh(geometry, material);
  
    // Rotation pour que les roues soient correctement orientées
    wheel.rotation.z = Math.PI / 2;
  
    return wheel;
  }

// Fonction pour obtenir la texture de l'avant de la voiture
function getCarFrontTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 32;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 64, 32);
  context.fillStyle = carWindowColor;
  context.fillRect(8, 8, 48, 24);
  return new THREE.CanvasTexture(canvas);
}

// Fonction pour obtenir la texture des côtés de la voiture
function getCarSideTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 32;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 128, 32);
  context.fillStyle = carWindowColor;
  context.fillRect(10, 8, 38, 24);
  context.fillRect(58, 8, 60, 24);
  return new THREE.CanvasTexture(canvas);
}
