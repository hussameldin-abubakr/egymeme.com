let currentImageIndex = 0;
const images = [
    "images/1.jpg", 
    "images/2.jpg",
    "images/3.jpg"
    // Add more images as needed
];


function showImage(index) {
    const imgElement = document.getElementById('memeImage');
    imgElement.src = images[index];
    imgElement.alt = `Meme Image ${index + 1}`;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function downloadImage() {
    const imgElement = document.getElementById('memeImage');
    const imageUrl = imgElement.src;
    const imageName = imageUrl.split('/').pop(); // يأخذ اسم الملف من الرابط
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialize the first image
window.onload = () => showImage(currentImageIndex);

