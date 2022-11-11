const btn = document.querySelectorAll(".btn-buy-now")

btn.forEach(function(button,index){

    //console.log(button,index)
    button.addEventListener('click',function(event){
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h5").innerText
        var productPrice = product.querySelector(".amount").innerText
        //console.log(productName,productImg,productPrice)
        addCart(productName,productImg,productPrice)
    })

})

function addCart(productName,productImg,productPrice) {
    var addtr = document.createElement("tr")
    var i;
    var cartItem = document.querySelectorAll("tbody tr")
        for(i = 0;i<cartItem.length;i++){
            var productItemName = document.querySelectorAll(".itemTitle")
            
            if(productItemName[i].innerHTML == productName){
                alert("san pham cua ban da co trong gio hang")
                return
            }
            
        }
    
    var trContent = '<tr><td style="display: flex; align-items: center;"><img style="width:70px;height: auto;" src="'+productImg+'" alt=""><span class="itemTitle">'+productName+'</span></td><td style="align-items: center;"><p style="margin:0"><span class="amount">'+productPrice+'</span>￥/1本</p></td><td><input style="width:40px; outline:none;" type="number" value="1" min="1" max="5"></td><td class="delete-btn" style="cursor: pointer;">削除</td></tr>'
    addtr.innerHTML = trContent

    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    imgfly();
    cartTotal()
    inputchange()
    deleteCart()
}
//------ delete---------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    
    for(var i = 0;i<cartItem.length;i++){
        var productDelete = document.querySelectorAll(".delete-btn")
        productDelete[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement
            cartItemDelete.remove()
            cartTotal()
            
        })
        
    }
    
}


//------ Total price---------

function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var productTotal = 0
    //console.log(cartItem.length)
    for(var i = 0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".amount").innerText
        //console.log(productPrice)
        var totalA = inputValue*productPrice
        //console.log(totalA)

        productTotal += totalA
        

    }
    //console.log("tong " +productTotal)

    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = productTotal
}

//------ input change ---------

function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function(){
            cartTotal();
        })
    }

}
function imgfly(){
    $(document).on('click','.btn-buy-now',function(e){
        e.preventDefault();

        if($(this).hasClass('disable') ){
            return false;
        }
        $(document).find('.btn-buy-now').addClass('disable');

        var parent = $(this).parents('.row-parent');

        var cart = $(document).find('#cart-shop');

        var src = parent.find('img').attr('src');

        var partop = parent.offset().top;
        var parleft = parent.offset().left;
        $('<img />', {
            class:'img-product-fly',
            src : src
        }).appendTo('body').css({
            'top' : partop,
            'left' : parseInt(parleft)  + parseInt(parent.width()) -20
        });
        
        setTimeout(function(){
            $(document).find('.img-product-fly').css({
                'top' : cart.offset().top,
                'left' : cart.offset().left+20
            });
            setTimeout(function(){
                $(document).find('.img-product-fly').remove();
                //var citem = parseInt(cart.find('#count-item').data('count'))+1;
                //cart.find('#count-item').text(citem + ' Item').data('count', citem);
                $(document).find('.btn-buy-now').removeClass('disable');
            }, 450);

        },500)
    });
}