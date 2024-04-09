//Fetch JSON data
fetch("json/login.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        localStorage.setItem("login_data", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error fetching data", error);
    });

const login_data = JSON.parse(localStorage.getItem("login_data")); //convert JSON string into an object
console.log(login_data);


document.getElementById("loginForm").addEventListener("submit", validate)

function validate(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username==login_data.users[0].username && password==login_data.users[0].password) {
        localStorage.setItem("currentUser", JSON.stringify(login_data.users[0].role));
        window.location.href = "dashboard.html"
    }else if (username==login_data.users[1].username && password==login_data.users[1].password) {
        localStorage.setItem("currentUser", JSON.stringify(login_data.users[1].role));
        window.location.href = "index.html"
    }else{
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
}