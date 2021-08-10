$('.main-slider').owlCarousel({
    items:1,
	loop: true,
})

$('body').on('click','.faq__accordion__item__head', function(e){
	e.preventDefault();
	if ($(this).hasClass("active")) {
		$(this).next().slideUp(500);
		$(this).removeClass("active");
	} else {
		$(this).addClass("active");
		$(this).next().slideDown(500);
	}

	$(".faq__accordion__item__head").not(this).removeClass("active");
	$(".faq__accordion__item__head").not(this).next().slideUp(500);
});


// lazy load

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src')); 
	img.onload = function() { 
		img.removeAttribute('data-src'); 
	}; 
}); 

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');	
});

$('.tabs__content__pagination').on('click', 'li:not(.active)', function(){
	$(this).addClass('active').siblings().removeClass('active');
	$(this).closest('.tabs__content').find('.tabs__content__page').removeClass('active').eq($(this).index()).addClass('active');	
})