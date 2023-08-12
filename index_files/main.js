//底部下载框
$(window).scroll(function () {
  var scroH = $(this).scrollTop();
  var nBodyHight = parseInt($('body').height()) - 40;
  var nScroll = parseInt($(window).height()) + parseInt($(document).scrollTop());
  if ($('.fixed_btn_box').length > 0) {
    scroH >= 585 ? $('.fixed_btn_box').removeClass('none') : $('.fixed_btn_box').addClass('none');
  }
});
//懒加载图片
if ($(".lazy").length > 0) {
    $(".lazy").lazyload({
        effect: "show",
        placeholder: "https://www.win10com.com/skin/web/grey.gif",
        threshold: 200
    });
};
$(function(){
    //内容页访问量 +1
    if ( $("input[name='classid']").length > 0 && $("input[name='id']").length > 0 ) {
            var classid = $("input[name='classid']").val();
            var id = $("input[name='id']").val();
            var enews = 'donews';
            var url = '/e/public/onclick/api.php';
            $.post(url,{classid:classid,id:id,enews:enews});
    }
    //网盘下载
    $(".wangpan").on("click",function(){
       $(".fixed_bg").show(); 
    });
    $(".shut_tiquma").on("click",function(){
        $(".fixed_bg").hide(); 
    });
    //跳转本地下载
    $(".local_download").on("click",function(){
        var local_download_url = $(this).attr('data-href');
        var local_arr = new Array();
        var local_arr = local_download_url.split(':');
        if( $(this).attr("changePackage")== 1 ){
            window.open( local_download_url );
            return;
        }
        if(local_download_url ){
            if( local_arr[0] == 'https' ){
                window.open( local_download_url );
            }else{
                var newUrl = local_download_url.replace('http','https');
                window.open( newUrl );
            }
        }
    });
    //本地下载
    $('.J_download').on('click', function () {
         var dlOffset = $('#download').offset().top - 500; //580
         $("html,body").animate({ scrollTop: dlOffset }, 300);
     });
     //导航高亮
    var urls = window.location.pathname;
    $(".navbar .nav-item").each(function () {
        var aUrl = $(this).children("a").attr("href");
        if ( aUrl !== "/"){
            if (urls.indexOf(aUrl) !== -1){
                $(this).addClass("cur").siblings().removeClass("cur");
                return false;
            }else if (urls.indexOf("/win10jiaocheng/") !== -1){
                $(".navbar .nav-item").eq(6).addClass("cur").siblings().removeClass("cur");
                return false;
            }
        }else{
            $(".navbar .nav-item").eq(0).addClass("cur").siblings().removeClass("cur");
        }
    });
    //专题导航高亮
    $(".m-zt-tab .tab-item").each(function(){
        var aUrl = $(this).attr("href");
        if (urls.indexOf(aUrl) !== -1){
                $(this).addClass("cur").siblings().removeClass("cur");
                $(".m-zt-tab .tag .text").text($(this).text());
            }
    });
    //搜索
    $(".J_selectSearch").on("click", function() {
        $(".J_selectToggle").show();
    });
    $('html,body').click(function(e){
        var $tar = $(e.target);
        if(!$tar.is(".J_selectSearch")){
            $(".J_selectToggle").hide();
        }
    });
    function changeInput(){
        var tbname = $("#J_selectSearch").attr("rel");
        $("#searchform input[name='tbname']").val(tbname);
        if (tbname == "download"){
            $("#searchform input[name='tempid']").val(5);
        }else if(tbname == "news"){
            $("#searchform input[name='tempid']").val(1);
        }else if(tbname == "soft"){
            $("#searchform input[name='tempid']").val(4);
        }else if (tbname == "mobile"){
            $("#searchform input[name='tempid']").val(6);
        }
    }
    $('#searchform').submit(function() {
        var searchText = $('#searchText').val();
        if(searchText === ''){
            alert("请输入要搜素的内容");
            return false;
        }
    });
    $("#searchButton").click(function(){
        changeInput();
        $("#searchform").submit();
    });
    $("#searchText").keypress(function (e) {
        if (e.which == 13) {
            changeInput();
            $("#searchButton").submit();
        }
    });
    $(".J_cate_item").on("click", function() {
        $(".J_selectSearch").html($(this).text());
        $(".J_selectSearch").attr('rel',$(this).attr('rel'));
    });
    //go-top
    $(window).scroll(function(){
        var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        
        if (top > 300) {
            $(".top-btn").fadeIn("slow");
        }else{
            $(".top-btn").fadeOut("slow");
        }
    });
    $(".top-btn .go-top").click(function () {
        $("html,body").animate({ scrollTop:0 }, 300);
    });
    // 鼠标经过切换选项
    mouseoverTabs($('.J_g_mouseover_tab'), '.J_tab', '.J_tab_cont');
    mouseoverTabs($('.J_mouseover_inner_tab'), '.J_inner_tab', '.J_inner_tab_cont');
    mouseoverTabs($('.home-pcsoft'), '.J_tab', '.J_tab_cont');
    // 鼠标经过Tab
    function mouseoverTabs(el, tabStr, contStr) {
        el.each(function () {
            var tabItem = $(this).find(tabStr).children(),
                tabCont = $(this).find(contStr).children(),
                extendCont = $(this).find('.J_extend_cont');
            tabItem.on('mouseover', function () {
                tabItem.removeClass("cur");
                $(this).addClass("cur");
                tabCont.hide().eq($(this).index()).show();
                if (extendCont.size() !== 0) {
                    extendCont.children().hide().eq($(this).index()).show();
                }
            });
        })
    }
    //系统详情页切换
    $(".J_soft_art_tab .tab-item.J_tab").on("click",function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        if($(this).index() == 0){
            $(this).parent().parent().siblings(".J_tab_cont").show();
        }else{
            $(this).parent().parent().siblings(".J_tab_cont").hide().eq($(this).index()).show().nextAll().show();
        }
    });
    //软件排行
    $(".rank-item.soft_side_toggle").on("mouseover",function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
    //首页软件排行
    $(".home-pcsoft .rank-item").on("mouseover",function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
    //首页安卓排行榜
    $(".idx-rjbb .rank-item").on("mouseover",function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
    //安卓首页推荐排行
    $(".J_g_mouseover_tab .rank-item").on("mouseover",function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
    //安卓首页最近更新排行
    $(".az-zjgx .rank-item").on("mouseover",function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
     //首页轮播
    if($(".banner").length > 0){
        //首页轮播
        $(".banner").slide({
            mainCell:".bd ul",
            titCell:".hd li",
            effect:"left",
            autoPlay:true,
        	delayTime: 600
        });
    }
    //首页主题切换
    if( $('.J_slide_theme').length > 0 ){
            $('.J_slide_theme').slide({
                mainCell:".J_slide_inner",
                prevCell:".J_prev",
                nextCell:".J_next",
                effect:"left",
                easing:"swing",
                autoPlay:true,
                switchLoad:"data-original",
                delayTime:1000
            });
    }
     // 通用轮播 包含控制按钮和指示器
     if( $(".J_g_slide").length > 0 ){
         $(".J_g_slide").slide({
            mainCell:".J_slide_inner",
            titCell:".J_slide_tmb",
            prevCell:".J_prev",
            nextCell:".J_next",
            effect:"left",
            autoPlay:true,
    		delayTime: 600
        });
     }
    //首页焦点图
    if( $(".J_slide_idx").length > 0 ){
        $(".J_slide_idx").slide({
            mainCell:".bd",
            titCell:".J_slide_tmb",
            effect:"fold",
            easing:"swing",
            autoPlay:true,
            delayTime:1000
        });
    }
    // 安卓首页轮播
    if( $(".J_slide_soft").length > 0 ){
        $(".J_slide_soft").slide({
            mainCell:".J_slide_inner",
            titCell:".J_slide_tmb",
            effect:"left",
            autoPlay:true,
    		delayTime: 600
        });
    }
    if( $(".J_slide_soft").length > 0 ){
        $(".J_slide_soft").slide({
            mainCell:".J_slide_inner",
            titCell:".J_slide_tmb",
            effect:"left",
            autoPlay:true,
        	delayTime: 600
        });
    }
    //安卓首页专题切换
    if( $(".J_slide_mini").length > 0 ){
        $(".J_slide_mini").slide({
            mainCell:".J_slide_inner",
            prevCell:".J_prev",
            nextCell:".J_next",
            effect:"left",
            autoPlay:false,
    		delayTime: 600
        });
    }
    //移动端 S
    // 移动端内容页 换一换
    $('.J_change_soft').on('click', '.J_change_btn', function () {
        $(this).parents('.J_change_soft').find('.J_change_cont').children().toggle();
    });
    //安卓内容页 内容高度控制
    $('.J_toggle_az_cont').on('click', function () {
        $(this).prev().toggleClass('show-all');
        $(this).html() == '+查看更多' ? $(this).html('-收起介绍') : $(this).html('+查看更多');
    })
    //移动端内容页 内容高度控制 修改
    $('.J_ctrl_az_cont').on('click', function () {
        if ($(this).prev().height() > 740) {
            $(this).html('展开全部<i></i>')
            $(this).find('i').toggleClass('toggle')
            $(this).toggleClass('toggle').prev().toggleClass('summary');
        }else{
            $(this).html('收起<i></i>')
            $(this).find('i').removeClass('toggle')
            $(this).removeClass('toggle').prev().removeClass('summary');
        }
    });
    var length = $('.J_az_art_tab .J_click_tab li').length;
    var tabObj = $('.J_az_art_tab>.J_tab_cont');
    $('.J_az_art_tab .J_click_tab li').on('click', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        var index = $(this).index()
        switch(index){
            case 0:
                tabObj.show();
                break;
            case 1:
                tabObj.show();
                tabObj.eq(0).hide();
                break;
            case 2:
                tabObj.show();
                for(var i=0;i<2;i++){
                    tabObj.eq(i).hide();
                }
            break;
            case 3:
                tabObj.show();
                for(var i=0;i<3;i++){
                    tabObj.eq(i).hide();
                }
                break;
            default:
                break;
        }

    });
    $('.J_download_a').click(function(){
        $('.J_az_art_tab .J_click_tab li').removeClass('cur');
        $('.J_az_art_tab .J_click_tab li').eq(3).addClass('cur');
        tabObj.show();
        for(var i=0;i<2;i++){
            tabObj.eq(i).hide();
        }
    });
    //移动端 E
});
//preview softimg
function jQueryReady($){
    $(function(){
        var $preview = $('<div id="image-preview" class="image-preview"></div>').appendTo('body').hide(),
            imgLoaded = {}, // 储存图片地址
            last = '', //用于鼠标移除后取消图片显示事件
            mouse, // 储存最后的鼠标事件对象
            showImg = function(img){
                position(img);
                $preview.empty().append(img.elem).show();
            },
            // 计算和定位
            position = function(img){
                // 显示区域应该用 winWidth 和 clinetX 来计算而不是 pageX，窗口宽度可能小于 网页宽度
                var e = mouse,
                    $img = $(img.elem),
                    imgWidth = img.w,
                    imgHeight = img.h,
                    imgRate = imgWidth/imgHeight,

                    winWidth = $(window).width(),
                    winHeight = $(window).height(),
                    spaceX = 20,
                    spaceY = 17,
                    padding = 7, // 补正
                    clientX = e.clientX,
                    clientY = e.clientY,
                    pageX = e.pageX,
                    pageY = e.pageY,

                    MINWIDTH = 300,
                    // 判断窗口可显示区域的最大值，用于缩放
                    maxWidth = Math.max(clientX -spaceX - padding*2, winWidth-clientX-spaceX - padding*2),

                    // 缩放后的尺寸
                    zoomWidth = imgWidth,
                    zoomHeight = imgHeight;

                maxWidth = Math.min(maxWidth,600);

                // 缩放图片
                if(imgWidth > maxWidth || imgHeight > winHeight){
                    if( imgRate > maxWidth / winHeight) {
                        zoomWidth = maxWidth;
                        zoomHeight = zoomWidth / imgRate;
                    } else {
                        zoomHeight = winHeight;
                        zoomWidth = zoomHeight * imgRate;
                    }

                }

                // 缩放后小于最小宽度则重新调整
                if(imgWidth > MINWIDTH  && zoomWidth < MINWIDTH){
                    zoomWidth = MINWIDTH;
                    zoomHeight = zoomWidth / imgRate;
                }
                //@return 返回最终坐标
                //@do 先计算各宽度间的关系，赋予状态值。再根据状态转换显示位置。
                var pos = function(){
                    // 为了显示上的统一性，只划分左右显示区域
                    var xMode = clientX > winWidth / 2 ?  "left" : "right",
                        yMode;
                    if(winHeight - clientY - spaceY > zoomHeight ) yMode = "base"; //显示在鼠标下方
                    else if ( winHeight >= zoomHeight ) yMode = "bottom"; // 对齐窗口底部
                    else yMode = "top" // 对齐窗口顶部

                    var x = {
                        right : pageX + spaceX ,
                        left: pageX - spaceX - zoomWidth - padding
                    }, y = {
                        base : pageY+ spaceY,
                        top : 0 ,
                        bottom : pageY - clientY + winHeight - zoomHeight - padding - 7
                    };
                    return {
                        x : x[xMode],
                        y : y[yMode],
                        w : zoomWidth,
                        h : zoomHeight
                    }
                }();
                // 应用样式
                $img.css({
                    width : pos.w,
                    height: pos.h
                });
                $preview.css({
                    left : pos.x,
                    top : pos.y
                });
            };
        $.fn.bigShow = function(rel){
            rel = rel || "preview"; // 保存大图地址的属性
            this.hover(function(e){
                var $this = $(this),
                    src = $this.attr(rel),
                    img = imgLoaded[src];

                mouse = e;
                last = src;

                if(img){
                    showImg(img);
                } else {
                    $("<img>").load(function(){

                        imgLoaded[src] = { elem : this , w: this.width, h : this.height };
                        if(last == src ) showImg(imgLoaded[src]);
                    }).attr("src",src);
                }

            }, function(){
                last = "";
                $preview.hide();
            }).mousemove(function(e){
                mouse = e;
                var $this = $(this),
                    src = $this.attr(rel),
                    img = imgLoaded[src];

                img && position(img);
            });
        };
        // 注册显示大图事件
        $("a[preview]").bigShow();
    }); // end
}
//列表页输入页码跳转
function gotoPage(){
    var gotopage = $('#gotopage').val();
    var urlRule = $('#urlrule').val();
    var totalpage = $('#totalpage').val();
    if(!isNaN(gotopage)){
        gotopage = Math.ceil(gotopage);
        totalpage = parseInt(totalpage);
        if(gotopage>0 && gotopage<=totalpage){
            var targetUrl = urlRule.replace('{page}',gotopage);
            window.location.href = targetUrl;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
//动态列表页（标签列表页）输入页码跳转
function gotoPageDM(){
    var gotopage = $('#gotopage').val();
    var urlRule = $('#urlrule').val();
    var totalpage = $('#totalpage').val();
    if(!isNaN(gotopage)){
        gotopage = Math.ceil(gotopage);
        totalpage = parseInt(totalpage);

        if(gotopage>0 && gotopage<=totalpage){

            var targetUrl = urlRule+'/'+gotopage;
            window.location.href = targetUrl;

        }else{
            return false;
        }
    }else{
        return false;
    }
}
//slide
$(function() { 
    (function($) {
        $.fn.Slide = function(options) {
            var defaults = {
                item: "slide-item",
                nav: "slide-nav",
                nowClass: "on",
                loading: "slide-loading"
            },
            options = options || {};
            options = $.extend(defaults, options);
            var cont = $(this),
            item = cont.find("." + options.item),
            nav = cont.find("." + options.nav),
            curr = options.nowClass,
            len = item.length,
            width = item.width(),
            html = "",
            index = order = 0,
            timer = null,
            lw = "-" + width + "px",
            rw = width + "px",
            newtimer,
            ld = cont.find("." + options.loading);
            item.each(function(i) {
                $(this).css({
                    left: i === index ? 0 : (i > index ? width + 'px': '-' + width + 'px')
                });
                html += '<i>' + (i + 1) + '</i>';
            });
            nav.html(html);
            var navitem = nav.find("i");
            navitem.eq(index).addClass(curr);
            function anim(index, dir) {
                loading();
                if (order === len - 1 && dir === 'next') {
                    item.eq(order).stop(true, false).animate({
                        left: lw
                    });
                    item.eq(index).css({
                        left: rw
                    }).stop(true, false).animate({
                        left: 0
                    });
                } else if (order === 0 && dir === 'prev') {
                    item.eq(0).stop(true, false).animate({
                        left: rw
                    });
                    item.eq(index).css({
                        left: lw
                    }).stop(true, false).animate({
                        left: 0
                    });
                } else {
                    item.eq(order).stop(true, false).animate({
                        left: index > order ? lw: rw
                    });
                    item.eq(index).stop(true, false).css({
                        left: index > order ? rw: lw
                    }).animate({
                        left: 0
                    });
                }
                order = index;
                navitem.removeClass(curr).eq(index).addClass(curr);
            }
            function next() {
                index = order >= len - 1 ? 0 : order + 1;
                _stop();
                ld.stop(true, true).animate({
                    "width": 0
                },
                0);
                anim(index, 'next');
                timer = setInterval(next, 5000);
            }
            function prev() {
                index = order <= 0 ? len - 1 : order - 1;
                _stop();
                ld.stop(true, true).animate({
                    "width": 0
                },
                0);
                anim(index, 'prev');
                timer = setInterval(next, 5000);
            }
            function auto() {
                loading();
                timer = setInterval(next, 5000);
            }
            function _stop() {
                clearInterval(timer);
            }
            function loading() {
                ld.css({
                    "height": "0",
                    "height": "5px",
                    "position": "absolute",
                    "left": "0",
                    "bottom": "0",
                    "background": "#ffe825",
                    "z-index": "10"
                });
                ld.animate({
                    "width": "100%"
                },
                5000).animate({
                    "width": 0
                },
                0);
            }
            return this.each(function() {
                auto();
                navitem.hover(function() {
                    _stop();
                    var i = navitem.index(this);
                    if (/on/.test($(this).attr('class'))) {
                        return false;
                    }
                    if (newtimer) clearTimeout(newtimer);
                    newtimer = setTimeout(function() {
                        _stop();
                        ld.stop(true, true).animate({
                            "width": 0
                        },
                        0);
                        anim(i, this);
                    },
                    250);
                },
                auto);
            });
        };
    })(jQuery);
    $("#slide").Slide();
});
//右侧悬浮
window.onload = function(){
    if ($('.J_fixed2').length > 0){
        var uLeft =  $('.J_fixed').offset().left;
        var uTop =  $('.J_fixed').offset().top - 40;
        var uRHeight =  $('.J_fixed').outerHeight();  //右边固定栏高度
        var uHHeight =  0;  //头部通栏高度 
        var uFHeight =  315;  //底部通栏高度
        var dHeight  = $(window).height();  //可视区窗口高度
        var computeHeight = dHeight - uRHeight - uHHeight - uFHeight; 
        var maxScrollHeight= $(document.body).outerHeight(true) - dHeight + computeHeight;   //文档总高度-可视区高度-底部通栏高度
        $(window).on('scroll',function(e){
            if($(window).scrollTop() < uTop ){
                $('.J_fixed').css("position","static");
            }
            if( $(window).scrollTop() >= uTop ){
                uLeft = uLeft + 'px'
                $('.J_fixed').css({
                    "position":"fixed",
                    "left":uLeft,
                    "top":"40px",
                    "z-index":"1",
                    "width":"360px"
                });
                var s = (maxScrollHeight-$(window).scrollTop()) + 40;
                var top = s+'px';
                //console.log(s,top,maxScrollHeight,computeHeight)
                if(computeHeight<0){
                    if( $(window).scrollTop() > maxScrollHeight){
                        $('.J_fixed').css("top",top);
                    };
                };
                
            };
        }); 
    };
};