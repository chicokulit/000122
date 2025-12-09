// Greeting & Clock
document.getElementById('portalGreeting').textContent = "Hi, Danica Cruz!";

function updateDateTime() {
    const now = new Date();
    const options = { weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit' };
    // optional: can display in a small corner or certificate box
}
setInterval(updateDateTime,1000);

// Logout
document.getElementById('logoutBtn').addEventListener('click', ()=> {
    alert('Logging out...');
});
