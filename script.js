const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

const accounts = [
  { id: "9099845", password: "sunflowershits" },
  { id: "9199223", password: "roseshits" }
];

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const employeeId = document.getElementById("employeeId").value;
  const password = document.getElementById("password").value;

  const valid = accounts.some(acc => acc.id === employeeId && acc.password === password);

  if(valid){
    // redirect to portal page
    window.location.href = "portal.html";
  } else {
    loginError.style.display = "block";
  }
});
