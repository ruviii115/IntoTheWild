//to show newsletter subscriptions
function list_generator(array) {
    let code = ``;
    let array_size = array.length;
    for (let i = 0; i < array_size; i++) {
        code += `<li>${array[i]}</li>`;
    }
    return code;
}

function showSubscriptions() {
    let subscriptions = JSON.parse(localStorage.getItem("subscriptions"))|| [];
    if (subscriptions=="") {
        document.getElementById("subscript_list").innerHTML = "There are no subscriptions yet"
    } else {
        document.getElementById("subscript_list").innerHTML = list_generator(subscriptions);
    }
}

const btn = document.getElementById("subscript_btn")
btn.addEventListener("click", showSubscriptions)

