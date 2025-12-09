// Completed cases data
const completedCases = [
    {
        name: "Marcus Gaile Sorbito Villarma",
        type: "Birth Certificate",
        issue: "First Name Correction",
        completionDate: "December 9, 2025",
        img: "mgsv.png"
    }
];

// Render cases
const caseList = document.getElementById("caseList");
const viewBtn = document.getElementById("viewBtn");
let selectedCase = null;

function renderCases() {
    caseList.innerHTML = "";
    completedCases.forEach((c, index) => {
        const div = document.createElement("div");
        div.classList.add("case-item");
        div.innerHTML = `
            <label>
                <input type="checkbox" data-index="${index}">
                <strong>${c.name}</strong> | ${c.type} | ${c.issue} | ${c.completionDate}
            </label>
        `;
        caseList.appendChild(div);
    });

    // Checkbox click
    const checkboxes = document.querySelectorAll(".case-item input[type='checkbox']");
    checkboxes.forEach(cb => {
        cb.addEventListener("change", function() {
            // uncheck others
            checkboxes.forEach(other => {
                if(other !== cb) other.checked = false;
            });
            selectedCase = cb.checked ? completedCases[cb.dataset.index] : null;
            viewBtn.disabled = !selectedCase;
        });
    });
}

renderCases();

// View button
viewBtn.addEventListener("click", () => {
    if(selectedCase){
        document.getElementById("viewerImg").src = selectedCase.img;
        document.getElementById("viewer").classList.remove("hidden");
    }
});

// Close overlay
document.getElementById("closeViewer").addEventListener("click", () => {
    document.getElementById("viewer").classList.add("hidden");
    document.getElementById("viewerImg").src = "";
});

