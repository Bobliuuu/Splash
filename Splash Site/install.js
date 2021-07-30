window.addEventListener("load", function(){
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("hidden2").style.display = "none";
})

function connect(){
    document.getElementById("hidden1").style.display = "block";
    document.getElementById("hidden2").style.display = "block";
    document.getElementById("hidden2").style.margin = "auto";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function home(){
    window.location.href = "home.html";
}