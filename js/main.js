$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});

$(".rwd-humburger-box").click(function(){
    $(".rwdmenu").addClass("nav-mobile-slide");
    $(".rwdmenu-bg").css("z-index","999; opacity: 1;");
    $(".rwdmenu-bg").fadeIn();
    $(".rwdtopbar-iconbox").fadeOut();
});

$(" ul.rwdmenubox li a , .navbar-close-btn").click(function(){
    $(".rwdmenu").removeClass("nav-mobile-slide");
    $(".rwdmenu-bg").css("z-index","1; opacity: 0;");
    $(".rwdmenu-bg").fadeOut();
    $(".rwdtopbar-iconbox").fadeIn();
});

// tabbox
$(function(){
    var _showTab = 0;
    $('.tabarea').each(function(){
        var $tab = $(this);
        var $defaultLi = $('ul.tab-title li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        $('ul.tab-title li', $tab).click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        })
    });
    });

// slick
$('.one-time').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
});