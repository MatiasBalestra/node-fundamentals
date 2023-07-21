const sharp = require('sharp');

sharp('original_219068e1-0543-480f-9f1b-e0844c5e06d2.webp').resize(80).grayscale().toFile('resized.jpg');