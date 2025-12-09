// Sample data
const completedCases = [
    {
        name: "Marcus Gaile Sorbito Villarma",
        type: "Birth Certificate",
        issue: "First Name Correction",
        completionDate: "December 9, 2025",
        image: "mgsv.png"
    },
    {
        name: "Rizza Malon Cueme",
        type: "Birth Certificate",
        issue: "Father Acknowledgement",
        completionDate: "December 9, 2025",
        image: "rmcu.png"
    }
];

// DOM elements
const caseList = document.getElementById("caseList");
const viewBtn = document.getElementById("viewBtn");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

let selectedCase = null;

// Generate case list
completedCases.forEach((c, index) => {
    const div = document.createElement("div");
    div.classList.add("case-item");

    div.innerHTML = `
        <label>
            <input type="radio" name="selectedCase" value="${index}">
            <strong>${c.name}</strong> | ${c.type} | ${c.issue} | ${c.completionDate}
        </label>
    `;
    caseList.appendChild(div);
});

// Listen for selection
caseList.addEventListener("change", (e) => {
    if(e.target.name === "selectedCase") {
        selectedCase = completedCases[e.target.value];
        viewBtn.disabled = false;
    }
});

// View Selected button
viewBtn.addEventListener("click", () => {
    if(selectedCase){
        viewerImg.src = selectedCase.image;
        viewer.classList.add("visible");
    }
});

// Close viewer
closeViewer.addEventListener("click", () => {
    viewer.classList.remove("visible");
    viewerImg.src = "";
    // Deselect radio
    document.querySelector('input[name="selectedCase"]:checked').checked = false;
    selectedCase = null;
    viewBtn.disabled = true;
});
