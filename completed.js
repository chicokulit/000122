const checkboxes = document.querySelectorAll('.case-checkbox');
const viewBtn = document.getElementById('viewBtn');
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewerImg');
const closeViewer = document.getElementById('closeViewer');

function updateViewButton() {
    const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
    viewBtn.disabled = !anyChecked;
}

checkboxes.forEach(cb => cb.addEventListener('change', updateViewButton));

viewBtn.addEventListener('click', () => {
    const selectedRow = Array.from(checkboxes).find(cb => cb.checked).closest('tr');
    const name = selectedRow.cells[1].textContent;

    // Map name to image filename
    let imgFile = '';
    if(name === 'Marcus Gaile Sorbito Villarma') imgFile = 'mgsv.png';
    // add more mappings here

    if(imgFile) {
        viewerImg.src = imgFile;
        viewer.classList.remove('hidden');
    }
});

closeViewer.addEventListener('click', () => {
    viewer.classList.add('hidden');
});
