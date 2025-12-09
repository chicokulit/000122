// Completed cases database
const completedCases = [
    {
        name: "Marcus Gaile Sorbito Villarma",
        type: "Birth Certificate",
        issue: "First Name Correction",
        date: "December 9, 2025",
        image: "mgsv.png"
    }
    // Add more cases here
];

// Build the list
const caseList = document.getElementById("caseList");

completedCases.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "case-item";

    div.innerHTML = `
        <input type="radio" name="caseSelect" value="${index}">
        <div>
            <strong>${c.name}</strong><br>
            ${c.type} | ${c.issue}<br>
            <em>${c.date}</em>
        </div>
    `;

    caseList.appendChild(div);
});

// Handle view button
const viewBtn = document.getElementById("viewBtn");

document.addEventListener("change", () => {
    const selected = document.querySelector("input[name='caseSelect']:checked");

    if (selected) {
        viewBtn.classList.add("enabled");
    } else {
        viewBtn.classList.remove("enabled");
    }
});

// Viewer logic
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

viewBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='caseSelect']:checked");
    if (!selected) return;

    const record = completedCases[selected.value];

    viewerImg.src = record.image;
    viewer.classList.remove("hidden");
});

// Close viewer
closeViewer.addEventListener("click", () => {
    viewer.classList.add("hidden");
    viewerImg.src = "";
});
