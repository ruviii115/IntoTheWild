//Fetch JSON data
fetch("json/index3.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if(!localStorage.getItem("index3_data")){
            localStorage.setItem("index3_data", JSON.stringify(data));
        }
    })
    .catch((error) => {
        console.error("Error fetching data", error);
    });

const index3_data = JSON.parse(localStorage.getItem("index3_data")); //convert JSON string into an object
console.log(index3_data);

//setting innerHTML to the elements taken by ID

//section two
document.getElementById("topic1").innerHTML = index3_data.two.topic1;
document.getElementById("para1").innerHTML = index3_data.two.para1;
document.getElementById("para2").innerHTML = index3_data.two.para2;
document.getElementById("para3").innerHTML = index3_data.two.para3;

//section three
document.getElementById("topic2").innerHTML = index3_data.three.topic2;
document.getElementById("para4").innerHTML = index3_data.three.para4;



//news letter subscription
document.addEventListener("DOMContentLoaded", loadcontent)

function loadcontent() {
    const nlForm = document.getElementById("nlForm");
    nlForm.addEventListener("submit", subscribe);
};

function subscribe(event) {
    event.preventDefault(); // Prevent form submission    
    const email = document.getElementById("email").value;

    // Save email to localStorage
    saveEmail(email);

    // Clear input field
    document.getElementById("email").value = "";
    alert("Thank you for subscribing!");
};

function saveEmail(email) {
    let subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
    subscriptions.push(email);
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));

    console.log(subscriptions);
}


//hide the content editor and dashboard buttons if its a site user
const currentUser = JSON.parse(localStorage.getItem("currentUser"))

if (currentUser !== "admin") {
    var btn2 = document.getElementById("btn2");
    btn2.style.visibility = "hidden";

    var btn3 = document.getElementById("btn3");
    btn3.style.visibility = "hidden";
}

//changing between login and logout buttons
const loginBtn = document.getElementById('loginbtn')

if(currentUser){
    loginBtn.innerHTML = `<a><button type="button" id="logout" class="button1">Logout</button></a>`
}else{
    loginBtn.innerHTML = `<a href='login.html'><button type="button" class="button1">Login</button></a>`
}

//logout button
function logout(){
    localStorage.removeItem('currentUser')
    location.reload()  
}
document.getElementById('logout').addEventListener("click", logout  )


//go to popup window
function goToPopup() {
    window.open("edit_popup.html", "", "width= 780px, height= 600px");
}

const btntopopup = document.getElementById("btn2")
btntopopup.addEventListener("click", goToPopup)