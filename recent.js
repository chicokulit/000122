// Database of completed cases
const completedCases = [
    {
        name: "Marcus Gaile Sorbito Villarma",
        type: "Birth Certificate",
        issue: "First Name Correction",
        date: "December 9, 2025",
        image: "mgsv.png"
    }
];

// Load table
window.onload = function() {
    const tbody = document.getElementById("caseList");

    completedCases.forEach((c, i) => {
        tbody.innerHTML += `
            <tr>
                <td><input type="checkbox" class="caseCheck" data-index="${i}" onclick="checkSelect()"></td>
                <td>${c.name}</td>
                <td>${c.type}</td>
                <td>${c.issue}</td>
                <td>${c.date}</td>
            </tr>
        `;
    });
};

// Enable view button only when checked
function checkSelect() {
    const checks = document.querySelectorAll(".caseCheck:checked");
    document.getElementById("viewBtn").disabled = checks.length !== 1;
}

// View selected record
function viewRecord() {
    const selected = document.querySelector(".caseCheck:checked");
    if (!selected) return;

    const index = selected.getAttribute("data-index");
    const record = completedCases[index];

    document.getElementById("caseImage").src = record.image;

    document.getElementById("imageViewer").classList.remove("hidden");
    document.getElementById("closeBtn").classList.remove("hidden");
}

// Close viewer
function closeViewer() {
    document.getElementById("imageViewer").classList.add("hidden");
    document.getElementById("closeBtn").classList.add("hidden");

    // Also uncheck selection
    document.querySelectorAll(".caseCheck").forEach(ch => ch.checked = false);
    document.getElementById("viewBtn").disabled = true;
}
