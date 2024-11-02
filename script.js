document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("photoGrid");
    const photoFolder = 'path/to/'; // Your original photo folder
    const maxPhotos = 100; 
    const formats = ['jpeg', 'jpg', 'png']; 

    for (let i = 1; i <= maxPhotos; i++) {
        formats.forEach(format => {
            const img = document.createElement('img');
            img.src = `${photoFolder}photo (${i}).${format}`; 
            img.alt = `Photo ${i}`;
            img.onerror = function() {
                this.style.display = 'none';
            };
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.appendChild(img);
            grid.appendChild(gridItem);
        });
    }

    const photos = Array.from(grid.children);
    for (let i = photos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [photos[i], photos[j]] = [photos[j], photos[i]];
    }

    photos.forEach(photo => grid.appendChild(photo));


// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

grid.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        modal.style.display = "flex";
        modalImg.src = event.target.src;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
});