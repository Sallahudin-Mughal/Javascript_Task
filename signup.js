// function Signup(e){
//     event.preventDefault();
//     let username = document.getElementById("rs-user").value;
//     let email = document.getElementById("rs-email").value;
//     let password = document.getElementById("rs-pass").value;

//     let user= {
//         username: username,
//         email:email,
//         password:password
//     }

//     let user1 = JSON.stringify(user);
//     localStorage.setItem(username, user1);
//     console.log("Add successfully")
//     // localStorage.setItem('pass1',password)
//     // localStorage.setItem('con_pass1',con_pass)
//     // alert("Your account created successfully")

// }
//  function Login(e){
//     event.preventDefault();

//     // these values is from login form
//     let username = document.getElementById("rs-user").value;
//     let password = document.getElementById("rs-pass").value;

//     // these values is from localstorage
//     let user1 = localStorage.getItem(username)

//     if(user1 == null){
//         console.log("username or password is null")

//     }
//     else{
//         let user_data = JSON.parse(user1)
//         if(username == user_data.username && password == user_data.password){
//             console.log("date ad ho gya e ")
//             window.location.href = "home.html";
//         }
//         else{
//             alert("username or password are incorrect")
//         }
//     }
//  }
class UserManager {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.Password = password;
  }
}
class Authentication {
  static Signup() {
    let username = document.getElementById("rs-user").value;
    let email = document.getElementById("rs-email").value;
    let password = document.getElementById("rs-pass").value;

    const newUser = new UserManager(username, email, password);

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    users.push(newUser);

    // Store the updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(newUser));

    // console.log("User added successfully");
    alert("User added successfully");

    window.location.href = "home.html";
  }
  Login(e) {
    e.preventDefault();
    // Get the username and password from the login form
    let username = document.getElementById("rs-user").value;
    let password = document.getElementById("rs-pass").value;

    // get
    // const existingUser = new UserManager(username,email,password)

    // Retrieve user data from localStorage
    let existingUser = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Retrieved users from localStorage:", existingUser);

    // Find the user with the given username
    let foundUser = existingUser.find((user) => user.username === username);
    
    console.log("Found user:", foundUser);

    if (foundUser) {
      // Check if the password matches
      if (password === foundUser.password) {
        // console.log("Login successful");
        swal("Good Job!", "Logged In Successfully", "success");
        window.location.href = "home.html";
      } else {
        alert("Incorrect password");
      }
    } else {
      swal("Sorry!", "Username or Password are incorrect", "warning");
      // alert("User not found");
    }
  }
}
