document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("photoGrid");
    const photoFolder = 'path/to/'; // Update this path to your photos folder
    const maxPhotos = 100; // Set a reasonable upper limit for the number of photos
    const formats = ['jpeg', 'jpg', 'png']; // Supported formats

    // Dynamically create image elements
    for (let i = 1; i <= maxPhotos; i++) {
        formats.forEach(format => {
            const img = document.createElement('img');
            img.src = `${photoFolder}photo (${i}).${format}`; // Assuming your photos are named photo (1).jpeg, photo (2).png, etc.
            img.alt = `Photo ${i}`;
            img.onerror = function() {
                this.style.display = 'none'; // Hide the image if it doesn't exist
            };
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.appendChild(img);
            grid.appendChild(gridItem);
        });
    }

    // Shuffle photos
    const photos = Array.from(grid.children);
    for (let i = photos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [photos[i], photos[j]] = [photos[j], photos[i]];
    }

    // Append shuffled photos back to the grid
    photos.forEach(photo => grid.appendChild(photo));
});
