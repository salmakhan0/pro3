function handleMouseOver(){
   document.querySelector("h1").style.color = "green";
}
function handleMouseOut(){
   document.querySelector("h1").style.color = "red";
}

function handleButtonClick(){
    console.log("button is clicked")
}

function handleChange(){
    var name = document.getElementById("name");
    console.log(name.value)