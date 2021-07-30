window.addEventListener("load", function(){
    var name = localStorage.getItem("uname");
    //alert(name);
    if (name){
        window.location.href = "home.html";
    }
})

var login_screen = document.getElementById('login_id');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login_screen) {
        modal.style.display = "none";
    }
}

function func(){
    let n = document.getElementById("uname").value;
    localStorage.setItem("uname", n);
    let m = document.getElementById("email").value;
    localStorage.setItem("email", m);
    let p = document.getElementById("pswd").value;
    localStorage.setItem("pswd", p);
    // Before production, FS can write data up to 100MB without crashing
    /*
    fs.readFile('names.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push({id: 2, square:3}); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
    }});
    */
    if (n = "John Smith" && m == "email@example.com" && p == "admin"){
        window.location.href = "home.html";
    }
    else {
        window.location.href = "install.html";
    }

    //document.getElementById("output").innerHTML = n;
}
//formData.get('username'); 

function setFavicon() {
    var link = $('link[type="image/x-icon"]').remove().attr("href");
    $('<link href="'+ link +'" rel="shortcut icon" type="image/x-icon" />').appendTo('head');
}