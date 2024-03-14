// Setup Three.js scene for the second division
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
const renderer2 = new THREE.WebGLRenderer();
renderer2.setSize(600, 600);
document.getElementById('scene2').appendChild(renderer2.domElement);

// Increase the intensity of the ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene2.add(ambientLight);

// Increase the intensity of the directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(-10, 10, 10);
scene2.add(directionalLight);

// Increase the intensity of the point light
const pointLight = new THREE.PointLight(0xffffff, 1.5);
pointLight.position.set(0, 0, 5);
scene2.add(pointLight);


// Load the model for the second scene
const loader2 = new THREE.GLTFLoader();
let model2;
loader2.load(
    'Assets/angel_sculpture.glb',
    function(gltf) {
        model2 = gltf.scene;
        const box = new THREE.Box3().setFromObject(model2);
        const center = box.getCenter(new THREE.Vector3());
        model2.position.x += (model2.position.x - center.x);
        model2.position.y += (model2.position.y - center.y);
        model2.position.z += (model2.position.z - center.z);
        scene2.add(model2);
    },
    undefined,
    function(error) {
        console.error(error);
    }
);

// Position the camera for the second scene
camera2.position.z = 2;

// Add OrbitControls for the second scene
const controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
controls2.enableDamping = true;
controls2.dampingFactor = 0.25;
controls2.enableZoom = false;

// Update camera and renderer size when the window is resized for the second scene
window.addEventListener('resize', function() {
    camera2.aspect = window.innerWidth / window.innerHeight;
    camera2.updateProjectionMatrix();
    renderer2.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop for the second scene
function animate2() {
    requestAnimationFrame(animate2);
    controls2.update();
    
    

    renderer2.render(scene2, camera2);
}
animate2();
