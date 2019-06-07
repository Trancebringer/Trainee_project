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