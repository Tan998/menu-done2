document.getElementById("showcart").style.display= "none"

function showcart() {
    var x = document.getElementById("showcart");
    if(x.style.display == "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
    var z = document.querySelector(".x-button");
    z.addEventListener("click",function(event){
        var cartDelete = event.target
        var cartItemDelete = cartDelete.parentElement.parentElement
        cartItemDelete.style.display = "none"
    })

}
