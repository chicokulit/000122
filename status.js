// Mini database of records
const statusData = {
    "jessa formentera oliveros": {
        owner: "Jessa Formentera Oliveros",
        type: "Birth Certificate",
        issue: "Late Registration",
        oldEntry: "N/A",
        newEntry: "Jessa Formentera Oliveros",
        submittedOn: "December 9, 2025",
        rep: "Danica Mae Cruz",
        repID: "9099845"
    },

    // ADD MORE PEOPLE HERE BELOW
    // "juan dela cruz": { ... }
};


// Main search function
function searchStatus() {
    const name = document.getElementById("searchName").value.trim().toLowerCase();
    const resultBox = document.getElementById("result");

    if (!name) {
        resultBox.innerHTML = `<p class="not-found">Please enter a name.</p>`;
        resultBox.classList.remove("hidden");
        return;
    }

    const data = statusData[name];

    if (!data) {
        resultBox.innerHTML = `<p class="not-found">No record found for: <strong>${name}</strong></p>`;
        resultBox.classList.remove("hidden");
        return;
    }

    // If record exists, generate PSA-style card
    resultBox.innerHTML = `
        <div class="card">
            <h3>The following details has been submitted to Cebu City Local Civil Registry.</h3>

            <p><strong>Document Owner:</strong> ${data.owner}</p>
            <p><strong>Type of document:</strong> ${data.type}</p>
            <p><strong>Issue:</strong> ${data.issue}</p>
            <p><strong>Old entry in system:</strong> ${data.oldEntry}</p>
            <p><strong>New entry in system:</strong> ${data.newEntry}</p>
            <p><strong>Changes submitted on:</strong> ${data.submittedOn}</p>
            <p><strong>Authorized Representative:</strong> ${data.rep}, Employee ID: ${data.repID}</p>

            <p class="note">Once approved, this information will be submitted to the Philippine Statistics Authority.</p>

            <div class="disclaimer">
                <strong>Disclaimer:</strong>
                This document is issued for informational purposes only. All details contained herein are 
                based on the official records provided by the Philippine Statistics Authority. Unauthorized use, 
                reproduction, or distribution is strictly prohibited.
            </div>
        </div>
    `;

    resultBox.classList.remove("hidden");
}
