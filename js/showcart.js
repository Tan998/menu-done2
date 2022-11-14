/*document.getElementById("showcart").style.display= "block"

function showcart() {
    var x = document.getElementById("showcart");
    if(x.style.display == "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
    var z = document.querySelectorAll(".x-button");
    z.addEventListener("click",function(event){
        var cartDelete = event.target
        var cartItemDelete = cartDelete.parentElement
        cartItemDelete.style.display = "none"
    })

}*/

document.getElementById("shownaruto").style.display= "block"

function shownaruto() {
    var z = document.querySelector(".x-button");
    z.addEventListener("click",function(event){
        var cartDelete = event.target
        var cartItemDelete = cartDelete.parentElement.parentElement
        cartItemDelete.style.display = "none"
    })

}