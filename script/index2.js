//Fetch JSON data
fetch("json/index2.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if (!localStorage.getItem("index2_data")) {
            localStorage.setItem("index2_data", JSON.stringify(data));
        }
    })
    .catch((error) => {
        console.error("Error fetching data", error);
    });

const index2_data = JSON.parse(localStorage.getItem("index2_data")); //convert JSON string into an object
console.log(index2_data);

//setting innerHTML to the elements taken by ID

//section two
document.getElementById("topic1").innerHTML = index2_data.two.topic1;

document.getElementById("SubTopic1").innerHTML = index2_data.two.SubTopic1;
document.getElementById("img1").innerHTML = `<img src=${index2_data.two.img1} alt="image">`;
document.getElementById("para1_1").innerHTML = index2_data.two.para1_1;
document.getElementById("para1_2").innerHTML = index2_data.two.para1_2;

document.getElementById("SubTopic2").innerHTML = index2_data.two.SubTopic2;
document.getElementById("img2").innerHTML = `<img src=${index2_data.two.img2} alt="image">`;
document.getElementById("para2_1").innerHTML = index2_data.two.para2_1;
document.getElementById("para2_2").innerHTML = index2_data.two.para2_2;

document.getElementById("SubTopic3").innerHTML = index2_data.two.SubTopic3;
document.getElementById("img3").innerHTML = `<img src=${index2_data.two.img3} alt="image">`;
document.getElementById("para3_1").innerHTML = index2_data.two.para3_1;
document.getElementById("para3_2").innerHTML = index2_data.two.para3_2;

document.getElementById("SubTopic4").innerHTML = index2_data.two.SubTopic4;
document.getElementById("img4").innerHTML = `<img src=${index2_data.two.img4} alt="image">`;
document.getElementById("para4_1").innerHTML = index2_data.two.para4_1;
document.getElementById("para4_2").innerHTML = index2_data.two.para4_2;

document.getElementById("SubTopic5").innerHTML = index2_data.two.SubTopic5;
document.getElementById("img5").innerHTML = `<img src=${index2_data.two.img5} alt="image">`;
document.getElementById("para5_1").innerHTML = index2_data.two.para5_1;

document.getElementById("SubTopic6").innerHTML = index2_data.two.SubTopic6;
document.getElementById("img6").innerHTML = `<img src=${index2_data.two.img6} alt="image">`;
document.getElementById("para6_1").innerHTML = index2_data.two.para6_1;
document.getElementById("para6_2").innerHTML = index2_data.two.para6_2;

//section three
document.getElementById("topic2").innerHTML = index2_data.three.topic2;


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