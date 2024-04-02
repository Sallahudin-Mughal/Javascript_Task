const container=document.querySelector(".container") ;
    const loginForm=document.querySelector('.login-form')
    const RegisterForm=document.querySelector('.Register-form');
    const RegiBtn=document.querySelector('.RegiBtn');
    const LoginBtn=document.querySelector('.LoginBtn');
    RegiBtn.addEventListener('click',()=>{
        RegisterForm.classList.add('active');
        loginForm.classList.add('active')
    })
    LoginBtn.addEventListener('click',()=>{
        RegisterForm.classList.remove('active');
        loginForm.classList.remove('active')
    })


// function Validate(){
//     if(document.Login-Form-fill.Username.value == ""){
//         document.getElementById("error-msg").innerHTML = "Enter Username*"
//     }

// }

let Username = document.getElementById("username").value;
let password = document.getElementById("Password").value;
let login = document.getElementById("login-btn");
login.addEventListener("click",()=>{
    console.log(Username)
    console.log(password)
})


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

function Signup(e){
    event.preventDefault();
    let username = document.getElementById("rs-user").value;
    let email = document.getElementById("rs-email").value;
    let password = document.getElementById("rs-pass").value;

    let newUser = {
        username: username,
        email: email,
        password: password
    };
    
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    users.push(newUser);

    // Store the updated array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // console.log("User added successfully");
    alert("User added successfully");

    window.location.href = "home.html"
}

function Login(e){
    event.preventDefault();

    // Get the username and password from the login form
    let username = document.getElementById("rs-user").value;
    let password = document.getElementById("rs-pass").value;

    // Retrieve user data from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the given username
    let foundUser = users.find(user => user.username === username);

    if(foundUser) {
        // Check if the password matches
        if(password === foundUser.password) {
            console.log("Login successful");
            window.location.href = "home.html";
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("User not found");
    }
}
