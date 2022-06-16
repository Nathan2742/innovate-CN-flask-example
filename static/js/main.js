function funcExample() {
    console.log("Hello Worl");
};

let my_name = "Nathan" // VARIABLLE DECLARATION FOR  A MUTABLE VARIABLE

const My_list_name = "nathans list" // variable declartion for an inmitable variable 

if (my_name === "Nathan"){
    console.log(`Hello, ${my_name}!`)
}else {
    console.log("You're not Nathan!")
}

function reallyGoodFunction(num1, num2){
    let result = num1 + num2;
    return result;
};

function taskHider(){
    let element = document.getElementById("task-box")
    element.classList.toggle("hidden")
}


function darkMode(){
    let element = document.getElementById("base-body")
    element.classList.toggle("dark-mode")
}

stateCheck()
function stateCheck() {
    // console.log(`Page loading ${state}!!`)
    let element = document.body;
    let button = document.getElementsByTagName("button");
    let title = document.getElementsByTagName("h1");
    let state = localStorage.getItem("state")
    if (state !== 'dark') {
        element.className = "light-mode";
        title.className = "light-mode";
        button.className = "light-mode";
        console.log(state)
    } else if (state === "dark") {
        element.className = "dark-mode";
        title.className = "dark-mode";
        button.className = "dark-mode";
        console.log(state)
    }
}


function darkMode() {
    let state = localStorage.getItem("state")
    let element = document.body;
    let button = document.getElementsByTagName("button");
    let title = document.getElementsByTagName("h1");
    if (state !== 'dark') {
        element.className = "dark-mode";
        title.className = "dark-mode";
        button.className = "dark-mode";
        localStorage.setItem("state", "dark")
        console.log(state)
    } else if (state === 'dark') {
        element.className = "light-mode";
        title.className = "light-mode";
        button.className = "light-mode";
        localStorage.setItem("state", "light")
        console.log(state)
    }
}

function displayDate(){
    document.getElementById("date").innerHTML = Date();
}