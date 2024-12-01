document.addEventListener("DOMContentLoaded", () => {
    // Modal functionality for "Read Poem" button
    const readPoemButton = document.getElementById("read-poem");
    const poemModal = document.getElementById("poem-modal");
    const closeModalButton = document.querySelector(".modal .close");

    // Open modal
    if (readPoemButton && poemModal) {
        readPoemButton.addEventListener("click", () => {
            poemModal.style.display = "flex";
        });
    }

    // Close modal when "X" is clicked
    if (closeModalButton) {
        closeModalButton.addEventListener("click", () => {
            poemModal.style.display = "none";
        });
    }

    // Close modal when clicking outside the modal content
    if (poemModal) {
        window.addEventListener("click", (event) => {
            if (event.target === poemModal) {
                poemModal.style.display = "none";
            }
        });
    }

    // Lightbox functionality for Distant Reading images
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");

    if (lightbox && lightboxImage && closeLightbox) {
        document.querySelectorAll(".card-images img").forEach((image) => {
            image.addEventListener("click", () => {
                const fullImage = image.getAttribute("data-full"); // Get the "data-full" attribute for large image
                
                // Debugging logs
                console.log("Clicked image:", image); // Logs the clicked image element
                console.log("Full-size image path:", fullImage); // Logs the path to the full-size image
                
                if (fullImage) {
                    lightboxImage.src = fullImage; // Set the full-size image in the lightbox
                    lightbox.style.display = "flex"; // Display the lightbox
                } else {
                    console.error("Error: 'data-full' attribute is missing for the clicked image:", image);
                }
            });
        });
       

        closeLightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");

    document.querySelectorAll(".gallery-item img").forEach((image) => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImage.src = image.src;
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");

    document.querySelectorAll(".card-images img").forEach((image) => {
        image.addEventListener("click", () => {
            const fullImage = image.getAttribute("data-full"); // Get the "data-full" attribute for large image
            if (fullImage) {
                lightboxImage.src = fullImage; // Set the full-size image in the lightbox
                lightbox.style.display = "flex"; // Display the lightbox
            } else {
                console.error("Error: 'data-full' attribute is missing for the clicked image:", image);
            }
        });
    });
    

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
