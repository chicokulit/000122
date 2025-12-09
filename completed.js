const checkboxes = document.querySelectorAll(".case-checkbox");
const viewBtn = document.getElementById("viewBtn");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

// Enable view button if any checkbox is selected
checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
        const anyChecked = Array.from(checkboxes).some(c => c.checked);
        viewBtn.disabled = !anyChecked;
    });
});

// Show image when view button clicked
viewBtn.addEventListener("click", () => {
    const selected = Array.from(checkboxes).find(c => c.checked);
    if(selected){
        // Example: use Marcus image, you can map checkbox to actual image
        viewerImg.src = "mgsv.png";
        viewer.classList.remove("hidden");
    }
});

// Close viewer
closeViewer.addEventListener("click", () => {
    viewer.classList.add("hidden");
});
