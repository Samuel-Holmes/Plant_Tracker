
document.addEventListener("DOMContentLoaded", function () {
    const roller = document.querySelector("#roller"); // Select the image container
    const images = roller.querySelectorAll("img"); // Select all images inside #roller
    let index = 0;

    function fadeImages() {
        images[index].classList.remove("active"); // Hide current image
        index = (index + 1) % images.length; // Move to next image
        images[index].classList.add("active"); // Show next image
    }

    setInterval(fadeImages, 4500); // Change image every 3 seconds
});
