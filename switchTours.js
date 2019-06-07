// переключение содержимого tours через нажатие на текст, карусель с генерацией контента
var typeOfTours = document.querySelector('.typeOfTours');
var burningTours = document.querySelectorAll('.burn');
var popularTours = document.querySelectorAll('.popular');
var switchingWritings = document.querySelectorAll('.typeOfTours h3');
var arrows = document.querySelectorAll('.arrow');
var area = document.querySelector('.area');
var shiftWidth = area.getBoundingClientRect().right - area.getBoundingClientRect().left;
var burningToursSwows = true

typeOfTours.addEventListener('click', function(){
	if(burningToursSwows == true){
		burningToursSwows = false;
		switchingWritings[0].className = '';
		switchingWritings[1].className = 'clicked';
		position -= shiftWidth/50;
		list.style.marginLeft = position + 'px';
		burningTours.forEach(function(item, i, arr){
			item.className = "burn contentBlock update";
		});
		for(var i = 0; i < 6; i++){
			popularTours[i].className = "popular contentBlock";
		}
	}
	else {
		burningToursSwows = true;
		switchingWritings[0].className = 'clicked';
		position += shiftWidth/50;
		list.style.marginLeft = position + 'px';
		switchingWritings[1].className = '';
		popularTours.forEach(function(item, i, arr){
			item.className = "popular contentBlock update";
		});
		for(var i = 0; i < 6; i++){
			burningTours[i].className = "burn contentBlock";
		}
	}
})

var list = area.querySelector('ul');
var contentArea = document.querySelector('.contentArea')
var count = 3;
var position = 0; // текущий сдвиг влево

contentArea.querySelector('.prev').onclick = function() {
	if(count > 3){
		count -= 3;
		position += shiftWidth;
			position += shiftWidth/50;
		list.style.marginLeft = position + 'px';
	}
};

contentArea.querySelector('.next').onclick = function() {
	if(count < burningTours.length){
		count +=3;
		position -= shiftWidth;
			position -= shiftWidth/50;
		list.style.marginLeft = position + 'px';
	}
};
var inputs = document.getElementsByTagName("input");
var val = inputs.value;
var buttons = document.querySelectorAll('.btn');
var regExp = [/^[А-Яа-яЁё]+$/, /.+@.+\..+/i, /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/];

window.smoothScroll = function(target) {
	var scrollContainer = target;
	do { //find scroll container
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer) return;
		scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do { //find the top of target relatively to the container
		if (target == scrollContainer) break;
		targetY += target.offsetTop;
	} while (target = target.offsetParent);

	scroll = function(c, a, b, i) {
		i++; if (i > 30) return;
		c.scrollTop = a + (b - a) / 30 * i;
		setTimeout(function(){ scroll(c, a, b, i); }, 20);
	}
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

buttons[0].addEventListener('click', function(){
	window.smoothScroll(buttons[1]);
});

buttons[1].addEventListener('click', function(){
	var str;
	for(var i = 0; i < inputs.length; i++){
		if (!inputs[i].value.match(regExp[i])){
			inputs[i].classList.add('invalid');
		}
		else {
			inputs[i].classList.remove('invalid');
		}
	}
	
})
var footer = document.querySelector("footer");
var wantSec = document.querySelector('#want');

window.addEventListener("resize", stickFooter);
window.addEventListener("load", stickFooter);

function stickFooter(){
	var footer_height = footer.getBoundingClientRect().height;
	var window_height = window.innerHeight;
	var wantBottomPoint = wantSec.getBoundingClientRect().bottom;
	if(wantBottomPoint >= (window_height - footer_height)){
		footer.style.position = 'absolute';
		footer.style.top = '102vw';
	}
	else{
		
		footer.style.position = 'fixed';
		footer.style.top = window_height - footer_height + 'px';
	}
}

var scrollingContainer = document.querySelector('.container');
var scrolledContainer = document.querySelector('.container p');
var line = document.querySelector('.line');
var scrollingDot = document.querySelector('.scrollingDot');
var scrollPosition = 0;
scrollingContainer.addEventListener('wheel', scrollDiv);

scrollingContainer.addEventListener('mouseenter', function(){
	line.classList.add('activeLine');
	scrollingDot.classList.add('activeDot');
})
scrollingContainer.addEventListener('mouseleave', function(){
	line.classList.remove('activeLine');
	scrollingDot.classList.remove('activeDot');
})

function scrollDiv (){
	var lineTop = line.getBoundingClientRect().top;
	var coef = line.getBoundingClientRect().height / (scrolledContainer.getBoundingClientRect().height - scrollingContainer.getBoundingClientRect().height);
	event.preventDefault();
	var y = event.deltaY;
	var dYBot = scrolledContainer.getBoundingClientRect().bottom - scrollingContainer.getBoundingClientRect().bottom;
	var dYTop = scrolledContainer.getBoundingClientRect().top - scrollingContainer.getBoundingClientRect().top;
	if (y > 0 && dYBot > 0) {
		if (dYBot < 20) {
			scrollPosition += dYBot;
		}
		else{
			scrollPosition += 20;
		}
	}
	else if(y < 0 && dYTop < 0){
		if(dYTop > -20){
			scrollPosition += dYTop;
		}
		else{
			scrollPosition -= 20;
		}
	}
	scrollingDot.style.marginTop = coef * scrollPosition + 'px';
	scrolledContainer.style.marginTop = -scrollPosition + 'px';
}