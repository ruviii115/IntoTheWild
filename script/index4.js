//Fetch JSON data
fetch("json/index4.json")
    .then((response) => response.json())
    .then((data) => {
        // Store JSON data in localStorage
        if(!localStorage.getItem("index4_data")){
            localStorage.setItem("index4_data", JSON.stringify(data));
        }
    })
    .catch((error) => {
        console.error("Error fetching data", error);
    });

const index4_data = JSON.parse(localStorage.getItem("index4_data")); //convert JSON string into an object
console.log(index4_data);

//setting innerHTML to the elements taken by ID

//section two
document.getElementById("topic1").innerHTML = index4_data.two.topic1;
document.getElementById("para1").innerHTML = index4_data.two.para1;
document.getElementById("para2").innerHTML = index4_data.two.para2;

//section three
document.getElementById("topic2").innerHTML = index4_data.three.topic2;

document.getElementById("img1").innerHTML = `<img src=${index4_data.three.img1} alt="image">`;
document.getElementById("SubTopic1").innerHTML = index4_data.three.SubTopic1;
document.getElementById("SubPara1").innerHTML = index4_data.three.SubPara1;

document.getElementById("img2").innerHTML = `<img src=${index4_data.three.img2} alt="image">`;
document.getElementById("SubTopic2").innerHTML = index4_data.three.SubTopic2;
document.getElementById("SubPara2").innerHTML = index4_data.three.SubPara2;

document.getElementById("img3").innerHTML = `<img src=${index4_data.three.img3} alt="image">`;
document.getElementById("SubTopic3").innerHTML = index4_data.three.SubTopic3;
document.getElementById("SubPara3").innerHTML = index4_data.three.SubPara3;

//section four
document.getElementById("topic3").innerHTML = index4_data.four.topic3;

//threat one
// document.getElementById("img4").innerHTML = `<img src=${index4_data.four.img4} alt="image">`;

document.getElementById("SubTopic4").innerHTML = index4_data.four.SubTopic4;
document.getElementById("para4_1").innerHTML = index4_data.four.para4_1;

document.getElementById("para4_2").innerHTML = index4_data.four.para4_2;
document.getElementById("threat1_List1").innerHTML = index4_data.four.threat1_List1.map((listItems) => `<li>${listItems}</li>`).join("");

document.getElementById("para4_3").innerHTML = index4_data.four.para4_3;
document.getElementById("threat1_List2").innerHTML = index4_data.four.threat1_List2.map((listItems) => `<li>${listItems}</li>`).join("");

//threat two
document.getElementById("SubTopic5").innerHTML = index4_data.four.SubTopic5;
document.getElementById("para5_1").innerHTML = index4_data.four.para5_1;

document.getElementById("para5_2").innerHTML = index4_data.four.para5_2;
document.getElementById("threat2_List1").innerHTML = index4_data.four.threat2_List1.map((listItems) => `<li>${listItems}</li>`).join("");

document.getElementById("para5_3").innerHTML = index4_data.four.para5_3;
document.getElementById("threat2_List2").innerHTML = index4_data.four.threat2_List2.map((listItems) => `<li>${listItems}</li>`).join("");

// document.getElementById("img5").innerHTML = `<img src=${index4_data.four.img5} alt="image">`;



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