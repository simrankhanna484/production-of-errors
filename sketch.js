// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// // Track mouse movement
// window.addEventListener("mousemove", (event) => {
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// });

// function animate() {
//   requestAnimationFrame(animate);

//   // Update raycaster with the camera and mouse position
//   raycaster.setFromCamera(mouse, camera);

//   // Calculate objects intersected by the raycaster
//   const intersects = raycaster.intersectObjects(scene.children);

//   // Reset all triangles' opacity
//   triangles.forEach(({ mesh }) => (mesh.material.opacity = 0.4));

//   // Change color or opacity of intersected objects
//   intersects.forEach((intersect) => {
//     intersect.object.material.opacity = 1.0;
//   });

//   renderer.render(scene, camera);
// }

// // Array of wabi-sabi inspired affirmations
// const affirmations = [
//     "Embrace imperfection.",
//     "Find beauty in simplicity.",
//     "Every moment is fleeting.",
//     "Celebrate the unfinished.",
//     "Let go of control.",
//     "See the world as it is.",
//     "Live fully in each moment.",
//     "Nothing is permanent.",
//     "Be content with less.",
//     "Nature is our greatest teacher."
//   ];
  
//   // Function to display an affirmation on click
//   function showAffirmation() {

//         triangles.forEach(({ mesh }) => {
//           mesh.position.x += (Math.random() - 0.5) * 2;
//           mesh.position.y += (Math.random() - 0.5) * 2;
//           mesh.rotation.z += (Math.random() - 2) * 0.2;
//         });
      
      
//     // Choose a random affirmation
//     const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  
//     // Create an element for the affirmation
//     const affirmationElement = document.createElement("div");
//     affirmationElement.innerText = affirmation;
//     affirmationElement.className = "affirmation";
  
//     // Append affirmation element to the container
//     document.body.appendChild(affirmationElement);
  
//     // Set a timeout to fade and remove the affirmation after 2 seconds
//     setTimeout(() => {
//       affirmationElement.classList.add("fade-out");
//       setTimeout(() => affirmationElement.remove(), 500);
//     }, 1000);
//   }
  
//   // Event listener for clicks on the screen
//   document.addEventListener("click", showAffirmation);
  

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 38;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x96CCC, 0.8); // Set the background color to green

// document.getElementById('container').appendChild(renderer.domElement);

// // Kaleidoscope pattern settings
// const layers = 4; // Number of layers for depth effect
// const trianglesPerLayer = 10; // Number of triangles per layer
// const shapeRadius = 6; // Radius of each triangle
// const layerSpacing = 7; // Distance between layers


// const triangles = [];
// const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 2, 3);
// const mirrorMaterial = new THREE.MeshStandardMaterial({
//   color: new THREE.Color(),
//   metalness: 105, // reflective surface
//   roughness: 4,
//   transparent: true,
//   opacity: 80,
// });


// // Create multi-layered kaleidoscope effect
// for (let layer = 0; layer < layers; layer++) {
//   for (let i = 0; i < trianglesPerLayer; i++) {
//     const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 4, 3);
//     const material = new THREE.MeshStandardMaterial({
//       color: new THREE.Color(`hsl(${(i * 60) / trianglesPerLayer + layer * 1}, 30%, 50%)`),
//       emissive: new THREE.Color(`hsl(${(i * 60) / trianglesPerLayer + layer * 1}, 30%, 30%)`),
//       emissiveIntensity: 0.5,
//       wireframe: false,
//       side: THREE.DoubleSide,
//       transparent: true,
//       opacity: 0.4
//     });
//     const mesh = new THREE.Mesh(geometry, material);

//     // Arrange each triangle in a circular pattern within each layer
//     const angle = (i / trianglesPerLayer) * Math.PI * 2;
//     const radius = layerSpacing * (layer + 1); // Distance from the center for each layer
//     mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
//     mesh.rotation.z = angle + Math.PI / 2; // Align triangles radially

//     scene.add(mesh);
//     triangles.push({ mesh, layer });
//   }
// }

// // Add lighting for vibrant colors
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 1.5);
// pointLight.position.set(0, 0, 15);
// scene.add(pointLight);

// // Animation loop for kaleidoscope effect
// function animate() {
//   requestAnimationFrame(animate);

//   // Rotate each triangle and add dynamic color shifts
//   triangles.forEach(({ mesh, layer }, index) => {
//     // Vary rotation speed per layer for complexity
//     const rotationSpeed = 0.002 * (layer + 1);
//     mesh.rotation.z += rotationSpeed;

//     // Pulsate each layer at different depths
//     mesh.position.z = Math.sin(Date.now() * 0.001 + index) * 2.5;

//     // Apply dynamic color shifting for each triangle
//     mesh.material.color.setHSL((Date.now() * 0.0001 + index / 2) % 1, 0.5, 0.5);
//   });

//   // Rotate the entire scene slightly
//   scene.rotation.z += 0.001;

//   renderer.render(scene, camera);
// }

// // Handle window resizing
// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// });

// animate();


// let blobs = [];
// let glitchImage;



// function setup() {
//     // createCanvas(windowWidth, windowHeight);
//     let cnv = createCanvas(windowWidth, windowHeight);

//       cnv.style('display', 'block'); // Prevents a small gap around the canvas

//     noStroke();

//     // Generate blobs with random positions and sizes
//     for (let i = 0; i < 10; i++) {
//         blobs.push(new Blob(random(width), random(height), random(30, 100)));
//     }

//     // Load image for glitch effect (you can also use webcam input)
//     glitchImage = createCapture(VIDEO);
//     glitchImage.hide();
// }

// function draw() {
//     background(30);

//     // Display and move blobs
//     for (let blob of blobs) {
//         blob.update();
//         blob.display();
//     }

//     // Apply glitch effect on image
//     glitchEffect(glitchImage, width / 2, height / 2);
// }

// // Blob class
// class Blob {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.offsetX = random(-2, 2);
//         this.offsetY = random(-2, 2);
//         this.color = color(random(255), random(255), random(255), 150);
//     }

//     update() {
//         // Move randomly
//         this.x += this.offsetX;
//         this.y += this.offsetY;

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.offsetX *= -1;
//         if (this.y < 0 || this.y > height) this.offsetY *= -1;
//     }

//     display() {
//         fill(this.color);
//         ellipse(this.x, this.y, this.size);
//     }
// }

// // Glitch effect function
// function glitchEffect(img, x, y) {
//     image(img, x - img.width / 4, y - img.height / 4, img.width / 2, img.height / 2);
//     loadPixels();
//     for (let i = 0; i < pixels.length; i += 4) {
//         if (random(100) < 5) {
//             pixels[i] = pixels[i + 1] = pixels[i + 2] = pixels[i + 3]; // Apply random glitch
//         }
//     }
//     updatePixels();
// }

// // On mouse click, add new blob
// function mousePressed() {
//     blobs.push(new Blob(mouseX, mouseY, random(30, 100)));
// }

// let blobs = [];
// let glitchImage;
// let movementThreshold = 30; // Threshold for detecting movement

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.style('display', 'block'); // Prevents a small gap around the canvas
//     noStroke();

//     // Generate blobs with random positions and sizes
//     for (let i = 0; i < 10; i++) {
//         blobs.push(new Blob(random(width), random(height), random(30, 100)));
//     }

//     // Load image for glitch effect
//     glitchImage = createCapture(VIDEO);
//     glitchImage.size(640, 480);
//     glitchImage.hide();
// }

// function draw() {
//     background(30);

//     // Display and move blobs
//     for (let blob of blobs) {
//         blob.update();
//         blob.display();
//     }

//     // Apply glitch effect on image
//     glitchEffect(glitchImage, width / 2, height / 2);
    
//     // Check for motion in the webcam feed
//     let movement = checkForMovement();
//     if (movement) {
//         // Change blob attributes based on movement
//         for (let blob of blobs) {
//             blob.color = color(random(255), random(255), random(255), 150);
//             blob.size = random(50, 150); // Change size on movement
//         }
//     }
// }

// // Blob class
// class Blob {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.offsetX = random(-2, 2);
//         this.offsetY = random(-2, 2);
//         this.color = color(random(255), random(255), random(255), 150);
//     }

//     update() {
//         // Move randomly
//         this.x += this.offsetX;
//         this.y += this.offsetY;

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.offsetX *= -1;
//         if (this.y < 0 || this.y > height) this.offsetY *= -1;
//     }

//     display() {
//         fill(this.color);
//         ellipse(this.x, this.y, this.size);
//     }
// }

// // Glitch effect function
// function glitchEffect(img, x, y) {
//     image(img, x - img.width / 4, y - img.height / 4, img.width / 2, img.height / 2);
//     loadPixels();
//     for (let i = 0; i < pixels.length; i += 4) {
//         if (random(900) < 5) {
//             pixels[i] = pixels[i + 1] = pixels[i + 2] = pixels[i + 3]; // Apply random glitch
//         }
//     }
//     updatePixels();
// }

// // Check for movement in the webcam feed
// function checkForMovement() {
//     let currentImage = glitchImage.get();
//     let previousImage = createImage(glitchImage.width, glitchImage.height);
//     if (previousImage) {
//         // Compare current and previous images to detect motion
//         previousImage.copy(glitchImage, 0, 0, glitchImage.width, glitchImage.height, 0, 0, glitchImage.width, glitchImage.height);
//         previousImage.loadPixels();
//         currentImage.loadPixels();

//         let totalDiff = 0;
//         for (let i = 0; i < currentImage.pixels.length; i += 4) {
//             // Calculate pixel difference
//             let rDiff = abs(currentImage.pixels[i] - previousImage.pixels[i]);
//             let gDiff = abs(currentImage.pixels[i + 1] - previousImage.pixels[i + 1]);
//             let bDiff = abs(currentImage.pixels[i + 2] - previousImage.pixels[i + 2]);
//             totalDiff += (rDiff + gDiff + bDiff);
//         }

//         // If the difference is greater than a threshold, we have movement
//         return totalDiff > movementThreshold * 100; // Adjust this multiplier for sensitivity
//     }
//     return false;
// }

// // On mouse click, add new blob
// function mousePressed() {
//     blobs.push(new Blob(mouseX, mouseY, random(30, 100)));
// }


///THE BOLBS AND TEXT///

// let blobs = [];
// let glitchImage;

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.style('display', 'block'); // Prevents a small gap around the canvas
//     noStroke();

//     // Generate blobs with random positions and sizes
//     for (let i = 0; i < 10; i++) {
//         blobs.push(new Blob(random(width), random(height), random(30, 100)));
//     }

//     // Load image for glitch effect
//     glitchImage = createCapture(VIDEO);
//     glitchImage.size(640, 480);
//     glitchImage.hide();
// }

// function draw() {
//     background(30);

//     // Display and move blobs
//     for (let blob of blobs) {
//         blob.update();
//         blob.display();
//     }

//     // Apply glitch effect on image
//     glitchEffect(glitchImage, width / 2, height / 2);
    
//   displayDynamicText();
// }

// function displayDynamicText() {
//     fill(255);
//     textSize(64);
//     textFont("Roboto"); // Use the Google Font

//     // Show random emotional words based on blob states
//     for (let blob of blobs) {
//         if (blob.size > 50) { // Happy blob
//             text("Joy", random(width), random(height));
//         } else if (blob.size < 30) { // Sad blob
//             text("Sorrow", random(width), random(height));
//         } else { // Excited blob
//             text("Excitement", random(width), random(height));
//         }
//     }
// }

// // React to mouse clicks with different emotional responses
// function mousePressed() {
//     // Determine the emotion based on the mouse position
//     let emotion = '';
//     if (mouseX < width / 3) {
//         emotion = 'happy';
//     } else if (mouseX > width * 2 / 3) {
//         emotion = 'sad';
//     } else {
//         emotion = 'excited';
//     }
    
//     // Trigger blobs' reactions to the emotion
//     for (let blob of blobs) {
//         blob.reactToEmotion(emotion);
//     }
// }

// // Blob class
// class Blob {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.offsetX = random(-2, 2);
//         this.offsetY = random(-2, 2);
//         this.color = color(random(255), random(255), random(255), 150);
//     }

//     update() {
//         // Move randomly
//         this.x += this.offsetX;
//         this.y += this.offsetY;

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.offsetX *= -1;
//         if (this.y < 0 || this.y > height) this.offsetY *= -1;
//     }

//     display() {
//         fill(this.color);
//         ellipse(this.x, this.y, this.size);
//     }

//     reactToEmotion(emotion) {
//         if (emotion === 'happy') {
//             this.color = color(255, 223, 0); // Bright yellow for happiness
//             this.size += 10; // Increase size
//             this.offsetX *= 2; // Move faster
//             this.offsetY *= 2; // Move faster
//         } else if (emotion === 'sad') {
//             this.color = color(0, 0, 255); // Blue for sadness
//             this.size = max(10, this.size - 10); // Decrease size, not below 10
//             this.offsetX *= 0.5; // Slow down movement
//             this.offsetY *= 0.5; // Slow down movement
//         } else if (emotion === 'excited') {
//             this.color = color(255, 0, 0); // Red for excitement
//             this.size += 5; // Increase size
//             this.offsetX = random(-5, 5); // Randomize movement direction and speed
//             this.offsetY = random(-5, 5);
//         }
//     }
// }

// // Glitch effect function
// function glitchEffect(img, x, y) {
//     image(img, x - img.width / 4, y - img.height / 4, img.width / 2, img.height / 2);
//     loadPixels();
//     for (let i = 0; i < pixels.length; i += 4) {
//         if (random(100) < 5) {
//             pixels[i] = pixels[i + 1] = pixels[i + 2] = pixels[i + 3]; // Apply random glitch
//         }
//     }
//     updatePixels();
// }


// let blobs = [];
// let glitchImage;
// let natureImages = [];
// let shards = []; // Array to hold shards

// function preload() {
//     // Load nature images (replace with paths to your own nature images)
//     for (let i = 1; i <= 5; i++) {
//         natureImages.push(loadImage(`brushed-metal-texture_1048-7624.avif`)); // Load your nature images
//     }
// }

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.style('display', 'block'); // Prevents a small gap around the canvas
//     noStroke();

//     // Generate blobs with random positions and sizes
//     for (let i = 0; i < 10; i++) {
//         blobs.push(new Blob(random(width), random(height), random(30, 100)));
//     }

//     // Load image for glitch effect
//     glitchImage = createCapture(VIDEO);
//     glitchImage.size(640, 480);
//     glitchImage.hide();

//     // Create shards for the kaleidoscope effect
//     for (let i = 0; i < 5; i++) {
//         shards.push(new Shard(random(width), random(height), random(50, 100)));
//     }
// }

// function draw() {
//     background(30);

//     // Display and move blobs
//     for (let blob of blobs) {
//         blob.update();
//         blob.display();
//     }

//     // Apply glitch effect on image
//     glitchEffect(glitchImage, width / 2, height / 2);

//     // Display shards with mirror effect
//     for (let shard of shards) {
//         shard.update();
//         shard.display();
//     }

//     displayDynamicText();
// }

// function displayDynamicText() {
//     fill(255);
//     textSize(64);
//     textFont("Roboto"); // Use the Google Font

//     // Show random emotional words based on blob states
//     for (let blob of blobs) {
//         if (blob.size > 50) { // Happy blob
//             text("Joy", random(width), random(height));
//         } else if (blob.size < 30) { // Sad blob
//             text("Sorrow", random(width), random(height));
//         } else { // Excited blob
//             text("Excitement", random(width), random(height));
//         }
//     }
// }

// // React to mouse clicks with different emotional responses
// function mousePressed() {
//     // Determine the emotion based on the mouse position
//     let emotion = '';
//     if (mouseX < width / 3) {
//         emotion = 'happy';
//     } else if (mouseX > width * 2 / 3) {
//         emotion = 'sad';
//     } else {
//         emotion = 'excited';
//     }
    
//     // Trigger blobs' reactions to the emotion
//     for (let blob of blobs) {
//         blob.reactToEmotion(emotion);
//     }
// }

// // Blob class
// class Blob {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.offsetX = random(-2, 2);
//         this.offsetY = random(-2, 2);
//         this.color = color(random(255), random(255), random(255), 150);
//     }

//     update() {
//         // Move randomly
//         this.x += this.offsetX;
//         this.y += this.offsetY;

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.offsetX *= -1;
//         if (this.y < 0 || this.y > height) this.offsetY *= -1;
//     }

//     display() {
//         fill(this.color);
//         ellipse(this.x, this.y, this.size);
//     }

//     reactToEmotion(emotion) {
//         if (emotion === 'happy') {
//             this.color = color(255, 223, 0); // Bright yellow for happiness
//             this.size += 10; // Increase size
//             this.offsetX *= 2; // Move faster
//             this.offsetY *= 2; // Move faster
//         } else if (emotion === 'sad') {
//             this.color = color(0, 0, 255); // Blue for sadness
//             this.size = max(10, this.size - 10); // Decrease size, not below 10
//             this.offsetX *= 0.5; // Slow down movement
//             this.offsetY *= 0.5; // Slow down movement
//         } else if (emotion === 'excited') {
//             this.color = color(255, 0, 0); // Red for excitement
//             this.size += 5; // Increase size
//             this.offsetX = random(-5, 5); // Randomize movement direction and speed
//             this.offsetY = random(-5, 5);
//         }
//     }
// }

// // Shard class for kaleidoscope effect with mirror-like reflections
// class Shard {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.rotation = random(TWO_PI);
//         this.speed = random(0.1, 0.5);
//         this.image = random(natureImages); // Select a random nature image
//     }

//     update() {
//         // Rotate slightly
//         this.rotation += this.speed;

//         // Move randomly
//         this.x += random(-1, 1);
//         this.y += random(-1, 1);

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.x = constrain(this.x, 0, width);
//         if (this.y < 0 || this.y > height) this.y = constrain(this.y, 0, height);
//     }

//     display() {
//         push();
//         translate(this.x, this.y);
//         rotate(this.rotation);
//         imageMode(CENTER);
//         // Draw the nature image with mirror effect
//         for (let i = 0; i < 6; i++) {
//             let angle = TWO_PI / 6 * i; // Create 6 reflections
//             push();
//             rotate(angle);
//             image(this.image, 0, 0, this.size, this.size);
//             pop();
//         }
//         pop();
//     }
// }

// // Glitch effect function
// function glitchEffect(img, x, y) {
//     image(img, x - img.width / 4, y - img.height / 4, img.width / 2, img.height / 2);
//     loadPixels();
//     for (let i = 0; i < pixels.length; i += 4) {
//         if (random(100) < 1) {
//             pixels[i] = pixels[i + 1] = pixels[i + 2] = pixels[i + 3]; // Apply random glitch
//         }
//     }
//     updatePixels();
// }





// let blobs = [];
// let glitchImage;
// let natureImages = [];
// let shards = []; // Array to hold shards
// let currentEmotion = ''; // Variable to track the current emotion
// let dynamicTextInstances = []; // Array to hold instances of dynamic text

// // Emotion colors
// const emotionColors = {
//     happy: [255, 223, 0],  // Bright yellow for happiness
//     sad: [0, 0, 255],      // Blue for sadness
//     excited: [255, 0, 0]    // Red for excitement
// };

// function preload() {
//     // Load nature images (replace with paths to your own nature images)
//     for (let i = 1; i <= 5; i++) {
//         natureImages.push(loadImage(`brushed-metal-texture_1048-7624.avif`)); // Load your nature images
//     }
// }

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.style('display', 'block'); // Prevents a small gap around the canvas
//     noStroke();

//     // Generate blobs with random positions and sizes
//     for (let i = 0; i < 10; i++) {
//         blobs.push(new Blob(random(width), random(height), random(30, 100)));
//     }

//     // Load image for glitch effect
//     glitchImage = createCapture(VIDEO);
//     glitchImage.size(640, 480);
//     glitchImage.hide();

//     // Create shards for the kaleidoscope effect
//     for (let i = 0; i < 5; i++) {
//         shards.push(new Shard(random(width), random(height), random(50, 100)));
//     }
// }

// function draw() {
//     background(30);

//     // Display and move blobs
//     for (let blob of blobs) {
//         blob.update();
//         blob.display();
//     }

//     // Apply glitch effect on image
//     glitchEffect(glitchImage, width / 2, height / 2);

//     // Display shards with mirror effect
//     for (let shard of shards) {
//         shard.update();
//         shard.display();
//     }

//     displayDynamicText();
// }

// function displayDynamicText() {
//     textSize(64);
//     textFont("Roboto"); // Use the Google Font

//     // Loop through all dynamic text instances and display them
//     for (let instance of dynamicTextInstances) {
//         fill(...instance.color); // Set text color based on emotion
//         text(instance.text, instance.x, instance.y);
//     }
// }

// // React to mouse clicks with different emotional responses
// function mousePressed() {
//     // Determine the emotion based on the mouse position
//     if (mouseX < width / 3) {
//         currentEmotion = 'happy'; // Set emotion to happy
//     } else if (mouseX > width * 2 / 3) {
//         currentEmotion = 'sad'; // Set emotion to sad
//     } else {
//         currentEmotion = 'excited'; // Set emotion to excited
//     }

//     // Add multiple instances of the dynamic text based on the current emotion
//     for (let i = 0; i < 8; i++) { // Create 5 instances for each click
//         dynamicTextInstances.push({
//             text: currentEmotion === 'happy' ? "Joy" :
//                   currentEmotion === 'sad' ? "Sorrow" : "Excitement",
//             x: random(width),
//             y: random(height),
//             color: emotionColors[currentEmotion] // Set the color based on emotion
//         });
//     }

//     // Trigger blobs' reactions to the emotion
//     for (let blob of blobs) {
//         blob.reactToEmotion(currentEmotion);
//     }
// }

// // Blob class
// class Blob {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.offsetX = random(-2, 2);
//         this.offsetY = random(-2, 2);
//         this.color = color(random(255), random(255), random(255), 150);
//     }

//     update() {
//         // Move randomly
//         this.x += this.offsetX;
//         this.y += this.offsetY;

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.offsetX *= -1;
//         if (this.y < 0 || this.y > height) this.offsetY *= -1;
//     }

//     display() {
//         fill(this.color);
//         ellipse(this.x, this.y, this.size);
//     }

//     reactToEmotion(emotion) {
//         if (emotion === 'happy') {
//             this.color = color(...emotionColors.happy); // Bright yellow for happiness
//             this.size += 3; // Increase size
//             this.offsetX *= 2; // Move faster
//             this.offsetY *= 2; // Move faster
//         } else if (emotion === 'sad') {
//             this.color = color(...emotionColors.sad); // Blue for sadness
//             this.size = max(5, this.size - 10); // Decrease size, not below 10
//             this.offsetX *= 0.5; // Slow down movement
//             this.offsetY *= 0.5; // Slow down movement
//         } else if (emotion === 'excited') {
//             this.color = color(...emotionColors.excited); // Red for excitement
//             this.size += 3; // Increase size
//             this.offsetX = random(-5, 5); // Randomize movement direction and speed
//             this.offsetY = random(-5, 5);
//         }
//     }
// }

// // Shard class for kaleidoscope effect with mirror-like reflections
// class Shard {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.rotation = random(TWO_PI);
//         this.speed = random(0.1, 0.5);
//         this.image = random(natureImages); // Select a random nature image
//     }

//     update() {
//         // Rotate slightly
//         this.rotation += this.speed;

//         // Move randomly
//         this.x += random(-1, 1);
//         this.y += random(-1, 1);

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.x = constrain(this.x, 0, width);
//         if (this.y < 0 || this.y > height) this.y = constrain(this.y, 0, height);
//     }

//     display() {
//         push();
//         translate(this.x, this.y);
//         rotate(this.rotation);
//         imageMode(CENTER);
//         // Draw the nature image with mirror effect
//         for (let i = 0; i < 6; i++) {
//             let angle = TWO_PI / 6 * i; // Create 6 reflections
//             push();
//             rotate(angle);
//             image(this.image, 0, 0, this.size, this.size);
//             pop();
//         }
//         pop();
//     }
// }

// // Glitch effect function
// function glitchEffect(img, x, y) {
//     image(img, x - img.width / 4, y - img.height / 4, img.width / 2, img.height / 2);
//     loadPixels();
//     for (let i = 0; i < pixels.length; i += 4) {
//         if (random(100) < 1) {
//             pixels[i] = pixels[i + 1] = pixels[i + 2] = pixels[i + 3]; // Apply random glitch
//         }
//     }
//     updatePixels();
// }


// let blobs = [];
// let glitchImage;
// let natureImages = [];
// let shards = []; // Array to hold shards
// let currentEmotion = ''; // Variable to track the current emotion
// let dynamicTextInstances = []; // Array to hold instances of dynamic text

// // Emotion colors
// const emotionColors = {
//     happy: [255, 223, 0],  // Bright yellow for happiness
//     sad: [0, 0, 255],      // Blue for sadness
//     excited: [255, 0, 0]    // Red for excitement
// };

// function preload() {
//     // Load nature images (replace with paths to your own nature images)
//     for (let i = 1; i <= 5; i++) {
//         natureImages.push(loadImage(`brushed-metal-texture_1048-7624.avif`)); // Load your nature images
//     }
// }

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.style('display', 'block'); // Prevents a small gap around the canvas
//     noStroke();

//     // Generate blobs with random positions and sizes
//     for (let i = 0; i < 10; i++) {
//         blobs.push(new Blob(random(width), random(height), random(30, 100)));
//     }

//     // Load image for glitch effect
//     glitchImage = createCapture(VIDEO);
//     glitchImage.size(640, 480);
//     glitchImage.hide();

//     // Create shards for the kaleidoscope effect
//     for (let i = 0; i < 5; i++) {
//         shards.push(new Shard(random(width), random(height), random(50, 100)));
//     }
// }

// function draw() {
//     background(30);

//     // Display and move blobs
//     for (let blob of blobs) {
//         blob.update();
//         blob.display();
//     }

//     // Apply glitch effect on image
//     glitchEffect(glitchImage, width / 2, height / 2);

//     // Display shards with mirror effect
//     for (let shard of shards) {
//         shard.update();
//         shard.display();
//     }

//     displayDynamicText();
// }

// function displayDynamicText() {
//     textSize(50); // Smaller text size
//     textFont("Roboto"); // Use the Google Font

//     // Loop through all dynamic text instances and display them
//     for (let i = dynamicTextInstances.length - 1; i >= 0; i--) {
//         let instance = dynamicTextInstances[i];
//         fill(...instance.color); // Set text color based on emotion
//         text(instance.text, instance.x, instance.y);

//         // Check if it's time to remove the instance
//         if (millis() - instance.timestamp > 3000) { // 3000 ms = 3 seconds
//             dynamicTextInstances.splice(i, 1); // Remove the instance
//         }
//     }
// }

// // React to mouse clicks with different emotional responses
// function mousePressed() {
//     // Determine the emotion based on the mouse position
//     if (mouseX < width / 3) {
//         currentEmotion = 'happy'; // Set emotion to happy
//     } else if (mouseX > width * 2 / 3) {
//         currentEmotion = 'sad'; // Set emotion to sad
//     } else {
//         currentEmotion = 'excited'; // Set emotion to excited
//     }

//     // Add multiple instances of the dynamic text based on the current emotion
//     for (let i = 0; i < 8; i++) { // Create 8 instances for each click
//         dynamicTextInstances.push({
//             text: currentEmotion === 'happy' ? "Joy" :
//                   currentEmotion === 'sad' ? "Sorrow" : "Excitement",
//             x: random(width),
//             y: random(height),
//             color: emotionColors[currentEmotion], // Set the color based on emotion
//             timestamp: millis() // Store the current time
//         });
//     }

//     // Trigger blobs' reactions to the emotion
//     for (let blob of blobs) {
//         blob.reactToEmotion(currentEmotion);
//     }
// }

// // Blob class
// class Blob {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.offsetX = random(-2, 2);
//         this.offsetY = random(-2, 2);
//         this.color = color(random(255), random(255), random(255), 150);
//     }

//     update() {
//         // Move randomly
//         this.x += this.offsetX;
//         this.y += this.offsetY;

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.offsetX *= -1;
//         if (this.y < 0 || this.y > height) this.offsetY *= -1;
//     }

//     display() {
//         fill(this.color);
//         ellipse(this.x, this.y, this.size);
//     }

//     reactToEmotion(emotion) {
//         if (emotion === 'happy') {
//             this.color = color(...emotionColors.happy); // Bright yellow for happiness
//             this.size += 3; // Increase size
//             this.offsetX *= 2; // Move faster
//             this.offsetY *= 2; // Move faster
//         } else if (emotion === 'sad') {
//             this.color = color(...emotionColors.sad); // Blue for sadness
//             this.size = max(5, this.size - 10); // Decrease size, not below 10
//             this.offsetX *= 0.5; // Slow down movement
//             this.offsetY *= 0.5; // Slow down movement
//         } else if (emotion === 'excited') {
//             this.color = color(...emotionColors.excited); // Red for excitement
//             this.size += 3; // Increase size
//             this.offsetX = random(-5, 5); // Randomize movement direction and speed
//             this.offsetY = random(-5, 5);
//         }
//     }
// }

// // Shard class for kaleidoscope effect with mirror-like reflections
// class Shard {
//     constructor(x, y, size) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.rotation = random(TWO_PI);
//         this.speed = random(0.1, 0.5);
//         this.image = random(natureImages); // Select a random nature image
//     }

//     update() {
//         // Rotate slightly
//         this.rotation += this.speed;

//         // Move randomly
//         this.x += random(-1, 1);
//         this.y += random(-1, 1);

//         // Bounce off edges
//         if (this.x < 0 || this.x > width) this.x = constrain(this.x, 0, width);
//         if (this.y < 0 || this.y > height) this.y = constrain(this.y, 0, height);
//     }

//     display() {
//         push();
//         translate(this.x, this.y);
//         rotate(this.rotation);
//         imageMode(CENTER);
//         // Draw the nature image with mirror effect
//         for (let i = 0; i < 6; i++) {
//             let angle = TWO_PI / 6 * i; // Create 6 reflections
//             push();
//             rotate(angle);
//             image(this.image, 0, 0, this.size, this.size);
//             pop();
//         }
//         pop();
//     }
// }

// // Glitch effect function
// function glitchEffect(img, x, y) {
//     image(img, x - img.width / 4, y - img.height / 4, img.width / 2, img.height / 2);
//     loadPixels();
//     for (let i = 0; i < pixels.length; i += 4) {
//         if (random(100) < 1) {
//             pixels[i] = pixels[i + 1] = pixels[i + 2] = pixels[i + 3]; // Apply random glitch
//         }
//     }
//     updatePixels();
// }






// // Combined JavaScript code using p5.js and Three.js
// let blobs = [];
// let glitchImage;
// let natureImages = [];
// let shards = []; // Array to hold shards
// let currentEmotion = ''; // Variable to track the current emotion
// let dynamicTextInstances = [];
// let grainOverlayCanvas;
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// // Emotion colors
// const emotionColors = {
//     happy: [255, 223, 0],  // Bright yellow for happiness
//     sad: [0, 0, 255],      // Blue for sadness
//     excited: [255, 0, 0]   // Red for excitement
// };

// // Raycaster for detecting mouse hover


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 38;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x96CCC, 0.8); // Set the background color to green

// document.getElementById('container').appendChild(renderer.domElement);


// // class Blob {
// //   constructor(x, y, size) {
// //       this.x = x;
// //       this.y = y;
// //       this.size = size;
// //       this.offsetX = random(-2, 2);
// //       this.offsetY = random(-2, 2);
// //       this.color = color(random(255), random(255), random(255), 150);
// //   }

// //   update() {
// //       this.x += this.offsetX;
// //       this.y += this.offsetY;

// //       if (this.x < 0 || this.x > width) this.offsetX *= -1;
// //       if (this.y < 0 || this.y > height) this.offsetY *= -1;
// //   }

// //   display() {
// //       fill(this.color);
// //       ellipse(this.x, this.y, this.size);
// //   }

// //   reactToEmotion(emotion) {
// //       if (emotion === 'happy') {
// //           this.color = color(255, 223, 0, 200);
// //           this.size = random(50, 80);
// //       } else if (emotion === 'sad') {
// //           this.color = color(0, 0, 255, 150);
// //           this.size = random(20, 50);
// //       } else if (emotion === 'excited') {
// //           this.color = color(255, 0, 0, 200);
// //           this.size = random(60, 100);
// //       }
// //   }
// // }


// let glitchInterval = 1; // Adjust this number for slower/faster glitch effect
// let lastGlitchFrame = 0;
// let glitchEffectOpacity = 8;

// function glitchEffect(img) {

  

//   // console.log("Glitch Slice Opacity: ", glitchSliceOpacity);
//   // Only apply glitch effect every `glitchInterval` frames
//   if (frameCount - lastGlitchFrame >= glitchInterval) {
//     lastGlitchFrame = frameCount; // Update the last glitch frame

//     push();
//     imageMode(CENTER);

//     blendMode(BLEND); 

//     // Only create the glitch slices without a background image
//     for (let i = 0; i < 6; i++) {
//       let sx = floor(random(img.width * 0.3, img.width * 0.7));
//       let sy = floor(random(img.height * 0.3, img.height * 0.7));
//       let sw = 300; // Width of the glitch slice
//       let sh = 350; // Height of the glitch slice
//       let dx = floor(width / 2 + random(-185, 0));
//       let dy = floor(height / 2 + random(-215, 5))

//       // tint(45, glitchSliceOpacity)

//       tint(75, glitchEffectOpacity); // Set the opacity for the slice
//       copy(img, sx, sy, sw, sh, dx, dy, sw, sh);
//     }
    
    
//     pop();
//   }
// }

//   // Shard class for creating dynamic shards
//   // class Shard {
//   //     constructor(x, y, size) {
//   //         this.x = x;
//   //         this.y = y;
//   //         this.size = size;
//   //         this.angle = random(TWO_PI);
//   //         this.color = color(random(255), random(255), random(255), 180);
//   //     }
  
//   //     update() {
//   //         this.angle += 0.02;
//   //     }
  
//   //     display() {
//   //         push();
//   //         translate(this.x, this.y);
//   //         rotate(this.angle);
//   //         fill(this.color);
//   //         triangle(
//   //             -this.size / 2, this.size / 2,
//   //             this.size / 2, this.size / 2,
//   //             0, -this.size / 2
//   //         );
//   //         pop();
//   //     }
//   // }
  

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.style('display', 'block');
//     noStroke();

//     for (let i = 0; i < 0; i++) {
//         blobs.push(new Blob(random(width), random(height), random(30, 100)));
//     }

//     glitchImage = createCapture(VIDEO);
//     glitchImage.size(640, 480);
//     glitchImage.hide();

//     // for (let i = 0; i < 0; i++) {
//     //     shards.push(new Shard(random(width), random(height), random(50, 100)));

    
//     // }
//     grainOverlayCanvas = createGraphics(windowWidth, windowHeight);
//     grainOverlayCanvas.clear();
//     grainOverlayCanvas.noStroke();
// }

// function draw() {
//     background(20);
    

//     // for (let blob of blobs) {
//     //     blob.update();
//     //     blob.display();
//     // }

//     glitchEffect(glitchImage, width / 2, height / 2);

//     for (let shard of shards) {
//         shard.update();
//         shard.display();
//     }

//     displayDynamicText();
//     animate();

//     renderGrainOverlay();

    
// }

// function renderGrainOverlay() {
//   // Clear the previous grain frame
//   grainOverlayCanvas.clear();

//   // Draw white pixels with low opacity to simulate grain
//   for (let i = 0; i < width * height * 0.01; i++) {
//       let x = random(width);
//       let y = random(height);
//       let opacity = random(20, 60); // Random opacity for variation
//       grainOverlayCanvas.fill(255, opacity);
//       grainOverlayCanvas.rect(x, y, 1, 1); // Single pixel grain effect
//   }

//   // Draw the overlay on the main canvas
//   image(grainOverlayCanvas, 0, 0);
// }

// function displayDynamicText() {
//     textSize(40);
//     textFont("Roboto");

//     for (let i = dynamicTextInstances.length - 1; i >= 0; i--) {
//         let instance = dynamicTextInstances[i];
//         fill(...instance.color);
//         text(instance.text, instance.x, instance.y);

//         if (millis() - instance.timestamp > 3000) {
//             dynamicTextInstances.splice(i, 1);
//         }
//     }
// }

// function mousePressed() {
//     currentEmotion = mouseX < width / 3 ? 'happy' : mouseX > width * 2 / 3 ? 'sad' : 'excited';

//     for (let i = 0; i < 8; i++) {
//         dynamicTextInstances.push({
//             text: currentEmotion === 'happy' ? "Joy" : currentEmotion === 'sad' ? "Sorrow" : "Excitement",
//             x: random(width),
//             y: random(height),
//             color: emotionColors[currentEmotion],
//             timestamp: millis()
//         });
//     }

//     // for (let blob of blobs) {
//     //     blob.reactToEmotion(currentEmotion);
//     // }
// }

//     function animate() {
//         triangles.forEach(({ mesh, layer }) => {
//             mesh.rotation.x += 0.005 * (layer + 1);
//             mesh.rotation.y += 0.005 * (layer + 1);
//         });
//         renderer.render(scene, camera);
//         requestAnimationFrame(animate);
//     }
    
//     // Mouse movement detection for raycasting
//     function onMouseMove(event) {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//         raycaster.setFromCamera(mouse, camera);
    
//         const intersects = raycaster.intersectObjects(scene.children);
//         if (intersects.length > 0) {
//             const object = intersects[0].object;
//             object.material.color.setHex(Math.random() * 0x8fff); // Change color on hover
//         }
//     }
    
//     // Kaleidoscope pattern settings
// const layers = 7;
// const trianglesPerLayer = 10;
// const shapeRadius = 6;
// const layerSpacing = 7;

// const triangles = [];
// const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 2, 3);
// const mirrorMaterial = new THREE.MeshStandardMaterial({
//     // color: new THREE.Color(),
//     // metalness: 105,
//     // roughness: 4,
//     // transparent: true,
//     // opacity: 20,
// });

// for (let layer = 0; layer < layers; layer++) {
//     for (let i = 0; i < trianglesPerLayer; i++) {
//         const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 4, 3);
//         const material = new THREE.MeshStandardMaterial({
//             color: new THREE.Color(`hsl(${(i * 60) / trianglesPerLayer + layer * 1}, 30%, 50%)`),
//             emissive: new THREE.Color(`hsl(${(i * 60) / trianglesPerLayer + layer * 1}, 30%, 30%)`),
//             emissiveIntensity: 0.5,
//             wireframe: false,
//             side: THREE.DoubleSide,
//             transparent: true,
//             opacity: 0.4
//         });
//         const mesh = new THREE.Mesh(geometry, material);

//         const angle = (i / trianglesPerLayer) * Math.PI * 2;
//         const radius = layerSpacing * (layer + 1);
//         mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
//         mesh.rotation.z = angle + Math.PI / 2;

//         scene.add(mesh);
//         triangles.push({ mesh, layer });
//     }
// }

// // Lighting
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 1);
// pointLight.position.set(10, 10, 10);
// scene.add(pointLight);


// // function preload() {
// //     for (let i = 1; i <= 5; i++) {
// //         natureImages.push(loadImage(`brushed-metal-texture_1048-7624.avif`));
// //     }
// // }
//     window.addEventListener("mousemove", onMouseMove);
    
//     function windowResized() {
//         resizeCanvas(windowWidth, windowHeight);
//         grainOverlayCanvas.resizeCanvas(windowWidth, windowHeight);
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//     }
    



// Combined JavaScript code using p5.js and Three.js

// let glitchImage;
// let shards = []; // Array to hold shards
// let currentEmotion = ''; // Variable to track the current emotion
// let dynamicTextInstances = [];
// let grainOverlayCanvas;
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// // Emotion colors
// const emotionColors = {
//     happy: [255, 223, 0],  // Bright yellow for happiness
//     sad: [0, 0, 255],      // Blue for sadness
//     excited: [255, 0, 0]   // Red for excitement
// };

// // Raycaster for detecting mouse hover
// let previousImageData;
// let motionThreshold = 30;


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 38;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x96CCC, 0.8); // Set the background color to green

// document.getElementById('container').appendChild(renderer.domElement);

// let glitchInterval = 1; // Adjust this number for slower/faster glitch effect
// let lastGlitchFrame = 0;
// let glitchEffectOpacity = 8;

// function glitchEffect(img) {
//     if (!img || !img.width || !img.height) return;
//   if (frameCount - lastGlitchFrame >= glitchInterval) {
//     lastGlitchFrame = frameCount; // Update the last glitch frame

//     push();
//     imageMode(CENTER);
//     blendMode(BLEND); 

//     // Only create the glitch slices without a background image
//     for (let i = 0; i < 6; i++) {
//       let sx = floor(random(img.width * 0.3, img.width * 0.7));
//       let sy = floor(random(img.height * 0.3, img.height * 0.7));
//       let sw = 300; // Width of the glitch slice
//       let sh = 350; // Height of the glitch slice
//       let dx = floor(width / 2 + random(-185, 0));
//       let dy = floor(height / 2 + random(-215, 5))

//       tint(75, glitchEffectOpacity); // Set the opacity for the slice
//       copy(img, sx, sy, sw, sh, dx, dy, sw, sh);
//     }
    
    
//     pop();
//   }
// }

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.style('display', 'block');
//     noStroke();

//     glitchImage = createCapture(VIDEO);
//     glitchImage.size(640, 480);
//     glitchImage.hide();

//     grainOverlayCanvas = createGraphics(windowWidth, windowHeight);
//     grainOverlayCanvas.clear();
//     grainOverlayCanvas.noStroke();
// }

// function draw() {
//     background(20);
//     glitchEffect(glitchImage, width / 2, height / 2);
//     renderGrainOverlay();
//     displayDynamicText();
// }

// animate();
// // function draw() {
// //     background(20);
    

// //     glitchEffect(glitchImage, width / 2, height / 2);

// //     for (let shard of shards) {
// //         shard.update();
// //         shard.display();
// //     }

// //     displayDynamicText();
// //     animate();

// //     renderGrainOverlay();

    
// // }

// function renderGrainOverlay() {
//   // Clear the previous grain frame
//   grainOverlayCanvas.clear();

//   // Draw white pixels with low opacity to simulate grain
//   for (let i = 0; i < width * height * 0.01; i++) {
//       let x = random(width);
//       let y = random(height);
//       let opacity = random(20, 60); // Random opacity for variation
//       grainOverlayCanvas.fill(255, opacity);
//       grainOverlayCanvas.rect(x, y, 1, 1); // Single pixel grain effect
//   }

//   // Draw the overlay on the main canvas
//   image(grainOverlayCanvas, 0, 0);
// }

// function displayDynamicText() {
//     textSize(40);
//     textFont("Roboto");

//     for (let i = dynamicTextInstances.length - 1; i >= 0; i--) {
//         let instance = dynamicTextInstances[i];
//         fill(...instance.color);
//         text(instance.text, instance.x, instance.y);

//         if (millis() - instance.timestamp > 3000) {
//             dynamicTextInstances.splice(i, 1);
//         }
//     }
// }

// function mousePressed() {
//     currentEmotion = mouseX < width / 3 ? 'happy' : mouseX > width * 2 / 3 ? 'sad' : 'excited';

//     for (let i = 0; i < 8; i++) {
//         dynamicTextInstances.push({
//             text: currentEmotion === 'happy' ? "Joy" : currentEmotion === 'sad' ? "Sorrow" : "Excitement",
//             x: random(width),
//             y: random(height),
//             color: emotionColors[currentEmotion],
//             timestamp: millis()
//         });
//     }
// }

//     function animate() {
//         triangles.forEach(({ mesh, layer }) => {
//             mesh.rotation.x += 0.005 * (layer + 1);
//             mesh.rotation.y += 0.005 * (layer + 1);
//         });
//         renderer.render(scene, camera);
//         requestAnimationFrame(animate);
//     }
    
//     // Mouse movement detection for raycasting
//     function onMouseMove(event) {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//         raycaster.setFromCamera(mouse, camera);
    
//         const intersects = raycaster.intersectObjects(scene.children);
//         if (intersects.length > 0) {
//             const object = intersects[0].object;
//             object.material.color.setHex(Math.random() * 0x8fff); // Change color on hover
//         }
//     }
    
//     // Kaleidoscope pattern settings
// const layers = 7;
// const trianglesPerLayer = 10;
// const shapeRadius = 6;
// const layerSpacing = 7;

// const triangles = [];
// const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 2, 3);
// const mirrorMaterial = new THREE.MeshStandardMaterial({

// });

// for (let layer = 0; layer < layers; layer++) {
//     for (let i = 0; i < trianglesPerLayer; i++) {
//         const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 4, 3);
//         const material = new THREE.MeshStandardMaterial({
//             color: new THREE.Color(`hsl(${(i * 60) / trianglesPerLayer + layer * 1}, 30%, 50%)`),
//             emissive: new THREE.Color(`hsl(${(i * 60) / trianglesPerLayer + layer * 1}, 30%, 30%)`),
//             emissiveIntensity: 0.5,
//             wireframe: false,
//             side: THREE.DoubleSide,
//             transparent: true,
//             opacity: 0.4
//         });
//         const mesh = new THREE.Mesh(geometry, material);

//         const angle = (i / trianglesPerLayer) * Math.PI * 2;
//         const radius = layerSpacing * (layer + 1);
//         mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
//         mesh.rotation.z = angle + Math.PI / 2;

//         scene.add(mesh);
//         triangles.push({ mesh, layer });
//     }
// }
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 1);
// pointLight.position.set(10, 10, 10);
// scene.add(pointLight);

//     window.addEventListener("mousemove", onMouseMove, false);
    
//     function windowResized() {
//         resizeCanvas(windowWidth, windowHeight);
//         grainOverlayCanvas.resizeCanvas(windowWidth, windowHeight);
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//     }





// let glitchImage;
// let shards = [];
// let currentEmotion = '';
// let dynamicTextInstances = [];
// let grainOverlayCanvas;
// let fadeOut = false;
// let fadeOpacity = 255;
// let fadeDuration = 1000; // Time (in ms) before switching to a new canvas
// let newCanvasInitiated = false;
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// const emotionColors = {
//     happy: [255, 223, 0],
//     sad: [0, 0, 255],
//     excited: [255, 0, 0]
// };



// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 38;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x96CCC, 0.8);

// document.getElementById('container').appendChild(renderer.domElement);

// let glitchInterval = 1;
// let lastGlitchFrame = 0;
// let glitchEffectOpacity = 9;


// function glitchEffect(img) {
//     if (frameCount - lastGlitchFrame >= glitchInterval) {
//         lastGlitchFrame = frameCount;
//         push();
//         imageMode(CENTER);
//         blendMode(BLEND);
//         for (let i = 0; i < 6; i++) {
//             let sx = floor(random(img.width * 0.3, img.width * 0.7));
//             let sy = floor(random(img.height * 0.3, img.height * 0.7));
//             let sw = 300;
//             let sh = 350;
//             let dx = floor(width / 2 + random(-185, 0));
//             let dy = floor(height / 2 + random(-215, 5))
//             tint(5, glitchEffectOpacity);
//             copy(img, sx, sy, sw, sh, dx, dy, sw, sh);
//         }
//         pop();
//     }


// }

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.style('display', 'block');
//     noStroke();
//     glitchImage = createCapture(VIDEO);
//     glitchImage.size(640, 480);
//     glitchImage.hide();
//     grainOverlayCanvas = createGraphics(windowWidth, windowHeight);
//     grainOverlayCanvas.clear();
//     grainOverlayCanvas.noStroke();

//     setTimeout(() => {
//       fadeOut = true;
//   }, fadeDuration);


// }

// function draw() {
//   if (fadeOut) {
//     fadeOpacity -= 5; // Decrease opacity for fade effect
//     tint(255, fadeOpacity); 
//     if (fadeOpacity <= 0 && !newCanvasInitiated) {
//       initiateNewCanvas();
//     }// Apply the fade effect to the entire canvas
// }


//     background(20);
//     glitchEffect(glitchImage, width / 2, height / 2);
//     for (let shard of shards) {
//         shard.update();
//         shard.display();
//     }
//     displayDynamicText();
//     animate();
//     renderGrainOverlay();


// }
// function initiateNewCanvas() {
//     newCanvasInitiated = true;
//     let currentCanvas = document.querySelector('canvas');
//     if (currentCanvas) {
//       clear();  // Clear the old canvas before removing it
//       currentCanvas.remove(); // Now remove the old canvas
//   }
//     let newCanvas = createCanvas(windowWidth, windowHeight);
//     newCanvas.parent('container');
//     newCanvas.style('display', 'block');
//     // newCanvas.style('margin-middle', `${height}px`); // Position below the old canvas
//     fadeOpacity = 255;
//     fadeOut = false;
  
//     newCanvasInitiated = false;


//     // Reinitialize scene elements if needed
//     setupNewScene(); // Optional: reset or adjust the scene if required
// }

// function setupNewScene() {
//   // Reinitialize or adjust scene elements for the new canvas as needed
//   dynamicTextInstances = [];
//   shards = [];
//   // Any other scene-resetting logic
// }

// // Randomized grain effect with more wabi-sabi variation
// function renderGrainOverlay() {
//   grainOverlayCanvas.clear();
//   for (let i = 0; i < width * height * 0.01; i++) {
//       let x = random(width);
//       let y = random(height);
//       let opacity = random(10, 90);
//       grainOverlayCanvas.fill(255, opacity);
//       grainOverlayCanvas.rect(x, y, 1, 1);
//   }
//   image(grainOverlayCanvas, 0, 0);
// }

// function displayDynamicText() {
//     textSize(40);
//     textFont("Roboto");
//     for (let i = dynamicTextInstances.length - 1; i >= 0; i--) {
//         let instance = dynamicTextInstances[i];
//         fill(...instance.color, instance.opacity);
//         text(instance.text, instance.x, instance.y);
//         instance.y += sin(frameCount * 0.1 + i) * 2; // Organic movement
//         instance.opacity -= 2;  // Faster decay
//         if (instance.opacity <= 0) {
//             dynamicTextInstances.splice(i, 1); // Remove fully faded text
//         }
//     }
// }

// function mousePressed() {
//     currentEmotion = mouseX < width / 3 ? 'happy' : mouseX > width * 2 / 3 ? 'sad' : 'excited';
//     for (let i = 0; i < 8; i++) {
//         dynamicTextInstances.push({
//             text: currentEmotion === 'happy' ? "Joy" : currentEmotion === 'sad' ? "Sorrow" : "Excitement",
//             x: random(width),
//             y: random(height),
//             color: emotionColors[currentEmotion],
//             opacity: 255 // Full opacity at start
//         });
//     }
// }

// function animate() {
//     triangles.forEach(({ mesh, layer }) => {
//         mesh.rotation.x += 0.005 * (layer + 1);
//         mesh.rotation.y += 0.005 * (layer + 1);
//         mesh.material.opacity = sin(frameCount * 0.05) * 0.5 + 0.5; // Organic fading
//     });
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }

// function onMouseMove(event) {
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObjects(scene.children);
//     if (intersects.length > 0) {
//         const object = intersects[0].object;
//         object.material.color.setHex(Math.random() * 0x8fff);
//     }
// }

// const layers = 7;
// const trianglesPerLayer = 10;
// const shapeRadius = 6;
// const layerSpacing = 7;

// const triangles = [];
// const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 2, 3);
// const mirrorMaterial = new THREE.MeshStandardMaterial({});

// for (let layer = 0; layer < layers; layer++) {
//     for (let i = 0; i < trianglesPerLayer; i++) {
//         const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 4, 3);
//         const material = new THREE.MeshStandardMaterial({
//             color: new THREE.Color(`hsl(${(i * 60) / trianglesPerLayer + layer * 1}, 30%, 50%)`),
//             emissive: new THREE.Color(`hsl(${(i * 60) / trianglesPerLayer + layer * 1}, 30%, 30%)`),
//             emissiveIntensity: 0.5,
//             wireframe: false,
//             side: THREE.DoubleSide,
//             transparent: true,
//             opacity: 0.4
//         });
//         const mesh = new THREE.Mesh(geometry, material);
//         const angle = (i / trianglesPerLayer) * Math.PI * 2;
//         const radius = layerSpacing * (layer + 1);
//         mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
//         mesh.rotation.z = angle + Math.PI / 2;
//         scene.add(mesh);
//         triangles.push({ mesh, layer });
//     }
// }
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 1);
// pointLight.position.set(10, 10, 10);
// scene.add(pointLight);

// window.addEventListener("mousemove", onMouseMove, false);

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     grainOverlayCanvas.resizeCanvas(windowWidth, windowHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }


////THE ONE THAT DISAPPEARSsss

let glitchImage;
let shards = [];
let currentEmotion = '';
let dynamicTextInstances = [];
let grainOverlayCanvas;
let fadeOut = true;
let fadeOpacity = 535;
let fadeDuration = 150000; 
let newCanvasInitiated = true;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const emotionColors = {
    happy: [255,255, 255],
    sad: [0, 0, 255],
    excited: [255, 0, 0]
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 9000);
camera.position.z = 38;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x1f1f1f, 0 );

document.getElementById('container').appendChild(renderer.domElement);

let glitchInterval = 1;
let lastGlitchFrame = 0;
let glitchEffectOpacity = 9;

function glitchEffect(img) {
    if (frameCount - lastGlitchFrame >= glitchInterval) {
        lastGlitchFrame = frameCount;
        push();
        imageMode(CENTER);
        blendMode(BLEND);
        for (let i = 0; i < 6; i++) {
            let sx = floor(random(img.width * 0.3, img.width * 0.7));
            let sy = floor(random(img.height * 0.3, img.height * 0.7));
            let sw = 300;
            let sh = 350;
            let dx = floor(width / 2 + random(-185, 0));
            let dy = floor(height / 2 + random(-215, 5));
            tint(5, glitchEffectOpacity);
            copy(img, sx, sy, sw, sh, dx, dy, sw, sh);
        }
        pop();
    }
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    noStroke();
    glitchImage = createCapture(VIDEO);
    glitchImage.size(640, 480);
    glitchImage.hide();
    grainOverlayCanvas = createGraphics(windowWidth, windowHeight);
    grainOverlayCanvas.clear();
    grainOverlayCanvas.noStroke();

    setTimeout(() => {
      fadeOut = true;
  }, fadeDuration);
}

function draw() {
    if (fadeOut) {
        fadeOpacity -= 0;
        tint(255, fadeOpacity);
        if (fadeOpacity <= 0 && !newCanvasInitiated) {
            initiateNewCanvas();
        }
    }

    background(20);

    if (glitchImage) { 
        glitchEffect(glitchImage);
    }
    
    for (let shard of shards) {
        shard.update();
        shard.display();
    }
    displayDynamicText();
    animate();
    renderGrainOverlay();
}

// function initiateNewCanvas() {
//     newCanvasInitiated = true;
    
//     if (glitchImage) {
//         glitchImage.remove();  
//         glitchImage = null;    
//     }

//     let currentCanvas = document.querySelector('canvas');
//     if (currentCanvas) {
//         clear();  
//         currentCanvas.remove(); 
//     }
    
//     let newCanvas = createCanvas(windowWidth, windowHeight);
//     newCanvas.parent('container');
//     newCanvas.style('display', 'block');
//     fadeOpacity = 255;
//     fadeOut = false;
//     newCanvasInitiated = false;

//     setupNewScene(); 
// }

// function setupNewScene() {
//     dynamicTextInstances = [];
//     shards = [];
// }

function renderGrainOverlay() {
    grainOverlayCanvas.clear();
    for (let i = 0; i < width * height * 0.01; i++) {
        let x = random(width);
        let y = random(height);
        let opacity = random(10, 90);
        grainOverlayCanvas.fill(255, opacity);
        grainOverlayCanvas.rect(x, y, 1, 1);
    }
    image(grainOverlayCanvas, 0, 0);
}

function displayDynamicText() {
    textSize(30);
    textFont("Roboto");
    for (let i = dynamicTextInstances.length - 1; i >= 0; i--) {
        let instance = dynamicTextInstances[i];
        fill(...instance.color, instance.opacity);
        text(instance.text, instance.x, instance.y);
        instance.y += sin(frameCount * 0.1 + i) * 2;
        instance.opacity -= 2;
        if (instance.opacity <= 0) {
            dynamicTextInstances.splice(i, 1);
        }
    }
}

function mousePressed() {
    currentEmotion = mouseX < width / 3 ? 'happy' : mouseX > width * 2 / 3 ? 'sad' : 'excited';
    for (let i = 0; i < 8; i++) {
        dynamicTextInstances.push({
            text: currentEmotion === 'happy' ? "transience" : currentEmotion === 'sad' ? "impermanence" : "error",
            x: random(width),
            y: random(height),
            color: emotionColors[currentEmotion],
            opacity: 180
        });
    }
}

function animate() {
    triangles.forEach(({ mesh, layer }) => {
        mesh.rotation.x += 0.1 * (layer + 1);
        mesh.rotation.y += 0.1 * (layer + 1);
        mesh.material.opacity = sin(frameCount * 0.03) * 0.3 + 0.3;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        const object = intersects[0].object;
        object.material.color.setHex(Math.random() * 0xfff);
    }
}
const triangleGroup = new THREE.Group();

const layers = 5;
const trianglesPerLayer = 8;
const shapeRadius = 6;
const layerSpacing = 7;

const triangles = [];
const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 1, 2);
const mirrorMaterial = new THREE.MeshStandardMaterial({});


for (let layer = 0; layer < layers; layer++) {
    for (let i = 0; i < trianglesPerLayer; i++) {
        const geometry = new THREE.ConeGeometry(shapeRadius, shapeRadius * 4, 3);
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(`hsl(${(i * 20) / trianglesPerLayer + layer * 1}, 10%, 30%)`),
            emissive: new THREE.Color(`hsl(${(i * 10) / trianglesPerLayer + layer * 1}, 10%, 30%)`),
            emissiveIntensity: 5,
            wireframe: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.9
        });
        const mesh = new THREE.Mesh(geometry, material);
        const angle = (i / trianglesPerLayer) * Math.PI * 2;
        const radius = layerSpacing * (layer + 1);
        mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        mesh.rotation.z = angle + Math.PI / 2;
        scene.add(mesh);
        triangles.push({ mesh, layer });
    }
}
scene.add(triangleGroup);


triangleGroup.position.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 1);
scene.add(pointLight);


const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('production of error', {
        font: font,
        size: 4,
        height: 1,
        curveSegments: 12,
        bevelEnabled: false,
    });


    textGeometry.center();

   
    const textMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0, 
    });

    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(2, 0, -10); 
    scene.add(textMesh);

   
    let fadeInProgress = 0.4;
    let glitchAmount = 0.1; 

    function animateText() {

        if (fadeInProgress < 1) {
            fadeInProgress += 0.007; 
            textMaterial.opacity = fadeInProgress;
        }


        textMesh.position.x += (Math.random() - 0.5) * glitchAmount;
        textMesh.position.y += (Math.random() - 0.5) * glitchAmount;
        textMesh.position.z += (Math.random() - 0.5) * glitchAmount;


        textMaterial.opacity = fadeInProgress * (Math.random() * 0.5 + 0.5);

        requestAnimationFrame(animateText);
    }


    setTimeout(() => {
        fadeInProgress = 0;
        animateText();
    }, 2000); 
});


const paragraphs = document.querySelectorAll('p');
const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

paragraphs.forEach(paragraph => {
    observer.observe(paragraph);
});



window.addEventListener("mousemove", onMouseMove, false);


// document.addEventListener("DOMContentLoaded", () => {
//     const article = document.querySelector("#wabi-sabi-article");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 article.style.opacity = 1;
//                 article.style.transform = "translateY(0)";
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.1 });

//     observer.observe(article);
// });

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    if (grainOverlayCanvas) { 
        grainOverlayCanvas.resizeCanvas(windowWidth, windowHeight);
    }
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // grainOverlayCanvas.resizeCanvas(windowWidth, windowHeight);
    // camera.aspect = window.innerWidth / window.innerHeight;
    // camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight);
}

