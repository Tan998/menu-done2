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
