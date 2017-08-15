$(function(){
    // 顶部导航栏切换
    var nIndex=0;
    $('.mb_menu>li').click(function(){
        $(".mb_menu .hover").removeClass('hover');
        $(this).addClass('hover');
        $('.mb_left>div.hover').removeClass('hover');
        nIndex=$('.mb_menu>li').index($(this))
        $('.mb_left>div').eq(nIndex).addClass('hover')
    });
    // 个人信息的显示与隐藏
    $('.mb_display').click(function(){
        var mb_modify=$(this).parent().next();
        console.log(this.className);
        if(this.className.indexOf('hover')==-1){
            $(this).addClass('hover');
            mb_modify.css('display',"block")
        }else{
            $(this).removeClass('hover');
            mb_modify.css('display',"none")
        }
    });
    $('.mb_scroll li').click(function(){
        if(!$(this).is('.hover')){
        var oZhe=$(this);
        var oZheFu=oZhe.parent();
        var y=oZheFu.children().index(oZhe);
        if(!oZheFu.children().is('.hover')){
            var oZheYe=oZheFu.parent();
            var x=oZheYe.parent().children().index(oZheYe);
            $('.mb_notice .hover').removeClass('hover');
            $('.mb_notice.hover').removeClass('hover');
            $('.mb_notice').eq(nIndex).addClass('hover').children().eq(x).children().eq(y).addClass('hover')
        }else{
            $('.mb_notice .hover').removeClass('hover').parent().children().eq(y).addClass('hover')
        }
        $('#mb_all').css('display','none');
        $('.mb_modify .hover').removeClass('hover');
        oZhe.addClass('hover');
        }
    });
    $('#mb_open').click(function(){
        $('.mb_left').toggleClass("hover");
        $(this).toggleClass("hover");
    })
});

