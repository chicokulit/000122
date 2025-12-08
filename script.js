const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

const accounts = [
  { id: "9099845", password: "sunflowershits", name: "Danica Cruz" },
  { id: "9199223", password: "roseshits", name: "Jane De Asis" }
];

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const employeeId = document.getElementById("employeeId").value;
  const password = document.getElementById("password").value;

  const user = accounts.find(acc => acc.id === employeeId && acc.password === password);

  if(user){
    localStorage.setItem("loggedInUser", user.name);
    window.location.href = "portal.html";
  } else {
    loginError.style.display = "block";
  }
});
