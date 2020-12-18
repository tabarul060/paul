

function openMenu(){
	document.getElementById('menu-nav').style.width="100%";
}
function closeMenu(){
	document.getElementById('menu-nav').style.width="0%";
}
var mixer = mixitup('.work-grid');
$(function(){
    $('.menu-item a, .next-section a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
        return false
    });
});

 new WOW().init();
        


