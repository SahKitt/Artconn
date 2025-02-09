// Setup Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 600);
document.getElementById('scene').appendChild(renderer.domElement);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Add another directional light from the opposite direction
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 5);
directionalLight2.position.set(-10, -10, -10);
scene.add(directionalLight2);

// Add a hemisphere light for soft ambient lighting
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
scene.add(hemisphereLight);

// Add a spotlight to highlight specific areas
const spotlight = new THREE.SpotLight(0xffffff);
spotlight.position.set(5, 5, 5);
spotlight.angle = Math.PI / 6;
spotlight.penumbra = 0.05;
spotlight.decay = 2;
spotlight.distance = 50;
spotlight.castShadow = true;
scene.add(spotlight);

// Add point light
const pointLight = new THREE.PointLight(0xffffff, 5);
pointLight.position.set(0, 0, 5);
scene.add(pointLight);

// Load the model
const loader = new THREE.GLTFLoader();
let model;
loader.load(
    'Assets/a_windy_day.glb',
    function(gltf) {
        model = gltf.scene;
        scene.add(model);
    },
    undefined,
    function(error) {
        console.error(error);
    }
);

// Position the camera
camera.position.z = 2;

// Add OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;

// Update camera and renderer size when the window is resized
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    
    // Rotate the model
    if (model) {
        model.rotation.y += 0.03; // Adjust the rotation speed as needed
    }
    
    renderer.render(scene, camera);
}
animate();
