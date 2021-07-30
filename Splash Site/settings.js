function switchBack(){
    // alert("SWITCHING"); // DEBUG SWITCH 
    var isChecked = document.getElementById("switchValue").checked;
    if (isChecked){
        document.body.style.backgroundColor = "deepskyblue";
    }
    else {
        document.body.style.backgroundColor = "white";
    }
}

function switchBack2(){
    //alert("SWITCHING"); // DEBUG SWITCH 
    var isChecked = document.getElementById("switchValue2").checked;
    if (isChecked){
        document.body.style.backgroundColor = "grey";
    }
    else {
        document.body.style.backgroundColor = "white";
    }
}

/*
function zoomin() {
    var GFG = document.getElementById("img");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth + 100) + "px";
}
  
function zoomout() {
    var GFG = document.getElementById("img");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 100) + "px";
}
*/