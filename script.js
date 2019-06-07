// слайд-шоу в images + переключение слайдов через нажатие на точки
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
	var show = document.querySelector('.show');
	show.className = 'slide';
	var active = document.querySelector('.active')
	active.className = 'dot'
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide show';
	dots[currentSlide].className = 'dot active';
}

function setSlide(){
	nextSlide();
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide,3000);
}

dots[0].addEventListener('click', function(){
	currentSlide = -1
	setSlide();
});
dots[1].addEventListener('click', function(){
	currentSlide = 0
	setSlide();
});
dots[2].addEventListener('click', function(){
	currentSlide = 1
	setSlide();
});
dots[3].addEventListener('click', function(){
	currentSlide = 2
	setSlide();
});
dots[4].addEventListener('click', function(){
	currentSlide = 3
	setSlide();
});

// отображение выпадающих менюшек
var hiddenMenus = document.querySelectorAll('.hiddenMenu');
var hiddenMenusShower = document.querySelectorAll('.hidMenShow');
var countries = document.querySelectorAll('.onBottom p');

hiddenMenusShower[0].addEventListener('click', function(){
	hiddenMenus[0].classList.toggle("shownMenu");
	hiddenMenus[0].addEventListener('mouseleave', function(){
		hiddenMenus[0].className = 'hiddenMenu';
	});
});
hiddenMenusShower[1].addEventListener('click', function(){
	hiddenMenus[1].classList.toggle("shownMenu");
	hiddenMenus[1].addEventListener('mouseleave', function(){
		hiddenMenus[1].className = 'hiddenMenu';
	});
});
hiddenMenusShower[2].addEventListener('click', function(){
	hiddenMenus[2].classList.toggle("shownMenu");
	countries.forEach(function(item, i, arr){
		countries[i].addEventListener('click', function(){
			hiddenMenusShower[2].innerText = event.target.innerText + ' ';
			hiddenMenus[2].className = 'hiddenMenu onBottom';
			var i = document.createElement('i');
			i.className = "fas fa-chevron-down";
			hiddenMenusShower[2].appendChild(i);
	});
	});
});