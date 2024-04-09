//get the content to be edited
const selectPageBtn = document.getElementById("selectPage");
selectPageBtn.addEventListener("click",getContent)

function getContent(){
    const selectedPage = document.getElementById("page").value;
    let textarea = document.getElementById("textarea");

    if (selectedPage == "home") {
        textarea.value = localStorage.getItem("index_data");
    }
    if (selectedPage == "wildlife") {
        textarea.value = localStorage.getItem("index2_data");
    }
    if (selectedPage == "department") {
        textarea.value = localStorage.getItem("index3_data");
    }
    if (selectedPage == "leopard") {
        textarea.value = localStorage.getItem("index4_data");
    }
    if (selectedPage == "animal") {
        textarea.value = localStorage.getItem("index5_data");
    }
    if (selectedPage == "yala") {
        textarea.value = localStorage.getItem("index6_data");
    }
    if (selectedPage == "wilpattu") {
        textarea.value = localStorage.getItem("index7_data");
    }
}

//confirm edited content
const editPageBtn = document.getElementById("editPage");
editPageBtn.addEventListener("click",editContent)

function editContent(){
    const selectedPage = document.getElementById("page").value;
    let textarea = document.getElementById("textarea").value;

    if (selectedPage == "home") {
        localStorage.setItem("index_data",textarea);
    }
    if (selectedPage == "wildlife") {
        localStorage.setItem("index2_data",textarea);
    }
    if (selectedPage == "department") {
        localStorage.setItem("index3_data",textarea);
    }
    if (selectedPage == "leopard") {
        localStorage.setItem("index4_data",textarea);
    }
    if (selectedPage == "animal") {
        localStorage.setItem("index5_data",textarea);
    }
    if (selectedPage == "yala") {
        localStorage.setItem("index6_data",textarea);
    }
    if (selectedPage == "wilpattu") {
        localStorage.setItem("index7_data",textarea);
    }

    alert("Content edited successfully! Refresh the page.");
}