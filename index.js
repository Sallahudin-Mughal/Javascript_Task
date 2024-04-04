const container = document.querySelector(".container");
const loginForm = document.querySelector(".login-form");
const RegisterForm = document.querySelector(".Register-form");
const RegiBtn = document.querySelector(".RegiBtn");
const LoginBtn = document.querySelector(".LoginBtn");
RegiBtn.addEventListener("click", () => {
  RegisterForm.classList.add("active");
  loginForm.classList.add("active");
});

LoginBtn.addEventListener("click", () => {
  RegisterForm.classList.remove("active");
  loginForm.classList.remove("active");
});

let Username = document.getElementById("Log-user").value;
let password = document.getElementById("Log-pass").value;
let login = document.getElementById("login-btn");
login.addEventListener("click", () => {
  console.log(Username);
  console.log(password);
});

// make class for get data from user when new user is going to register the constructor is called from this class
class UserManager {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.Password = password;
  }
}

// Authentication class is hold Signup and login method
class Authentication {
  static Signup() {
    // event.preventDefault();
    let username = document.getElementById("rs-user").value;
    let email = document.getElementById("rs-email").value;
    let password = document.getElementById("rs-pass").value;

    const newUser = new UserManager(username, email, password);

    // Add the new user to the array
    console.log(newUser);
    // users.push(newUser);

    // Store the updated array back to localStorage
    const JsonData = JSON.stringify(newUser);
    localStorage.setItem(username, JsonData);

    // console.log("User added successfully");
    window.location.href = "home.html";
    alert("User added successfully");
  }

  static Login() {
    // event.preventDefault();
    // Get the username and password from the login form

    let username = document.getElementById("Log-user").value;
    let password = document.getElementById("Log-pass").value;

    console.log(username);
    console.log(password);

    // get data from localStorage
    let User = localStorage.getItem(username);

    if (User == null) {
      // if user is nul then alert
      swal("Sorry!", "User is null", "warning");
    } else {
      // if user find then parse the data
      const UserData = JSON.parse(User);

      if (UserData.username === username && UserData.Password === password) {
        swal("Good Job!", "Logged In Successfully", "success");
        window.location.href = "home.html";
      } else {
        alert("no hoya");
        // swal("Sorry", "Next window not found", "sorry");
      }
    }
  }
}
