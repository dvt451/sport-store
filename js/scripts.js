
/*========================================================================================================================================================*/
// Menu Burger
menuBurger()

/*========================================================================================================================================================*/
function menuBurger() {
	const burger = document.querySelector('.burger')
	const burgerMenu = document.querySelector('.burger-menu')
	const logo = document.querySelector('.top-header__logo');
	let act = true;
	const bar1 = document.querySelector('.burger-bar1');
	const bar2 = document.querySelector('.burger-bar2');
	const bar3 = document.querySelector('.burger-bar3');

	burger.onclick = burgering => {
		if (act == true) {
			act = false
			burger.style = 'justify-content: center'
			burgerMenu.style = 'bottom: -90px'
			bar2.style = 'width: 0'
			bar1.style = 'transform: translateY(100%) rotate(45deg)'
			bar3.style = 'transform: translateY(-100%) rotate(-45deg)'
			document.body.style = 'overflow: hidden;'
			logo.style.top = '0px'
		} else {
			act = true
			bar2.style = 'width: 100%'
			burger.style = 'justify-content: space-between'
			bar1.style = 'transform: rotate(0)'
			bar3.style = 'transform: rotate(0)'
			burgerMenu.style = 'bottom: -100%'
			document.body.style = 'overflow: auto;'
			logo.style.top = ''
		}
	}
}

//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
/*========================================================================================================================================================*/



/*========================================================================================================================================================*/

let media = window.innerWidth

let tablet = 991.98
let mobile = 767.98
let mobileSmall = 479.98

let md2 = tablet
let md3 = mobile
let md4 = mobileSmall

let asideContent = document.querySelector('.aside__content');
const pageContent = document.querySelector('.page__content');

const asideFilter = document.querySelector('.aside__filter');
const products__header = document.querySelector('.products__header');

if(window.innerWidth >= tablet){
	// Changing menu opening type
	const parrent = document.querySelectorAll('.cataloge__parrent');
	for(i = 0; i < parrent.length; i++){
		const menuParrent = parrent[i]
		menuParrent.onmouseenter = () =>{
			menuParrent.classList.add('_active')
		}
		menuParrent.onmouseleave = () =>{
			menuParrent.classList.remove('_active')
		}
	}

}else{
	// Changing menu opening type
	const parrents = document.querySelectorAll('.cataloge__parrent>a');
	for(let i = 0; i < parrents.length; i++){
		let parrent = parrents[i]
		parrent.addEventListener("click",function (e){
			parrent.parentElement.classList.toggle('_active')
			e.preventDefault()
		});
	}
	// transfering news and reviews
	if(asideContent){
		pageContent.append(asideContent)
	}
	if(asideFilter){
		products__header.append(asideFilter)
	}
}
/*========================================================================================================================================================*/
// product count
try{
const productDetailsArrowPrev = document.querySelector('.product-details-info__arrow-prev');
const productDetailsArrowNext = document.querySelector('.product-details-info__arrow-next');
const productDetailsInput = document.querySelector('.product-details-info__input');
let productCount = 1;
productDetailsInput.value = productCount

productDetailsArrowNext.onclick = () =>{
	productCount++
	productDetailsInput.value = productCount
}
productDetailsArrowPrev.onclick = () =>{
	if(productCount == 1){
		productCount = 1
		productDetailsInput.value = productCount
	}else{
		productCount--
		productDetailsInput.value = productCount
	}
}}catch{
	
}
/*========================================================================================================================================================*/
// tabs
if(document.querySelector('[data-tabs]')){
	const tabTitles = document.querySelectorAll('[data-tabs-title]');
	const tabContents = document.querySelectorAll('[data-tabs-body]');

for (let i = 0; i < tabTitles.length; i++) {
	const tabTitle = tabTitles[i];
	tabContents[i].style.display = 'none'
	if(tabTitle.classList.contains('_tab-active')){
		tabContents[i].style.display = 'block'
	}
	tabTitle.onclick = () =>{
		for (let ind = 0; ind < tabContents.length; ind++) {
			const tabContent = tabContents[ind];
			tabTitles[ind].classList.remove('_tab-active')
			tabContent.style.display = 'none'
		}
		tabTitle.classList.add('_tab-active')
		tabContents[i].style.display = 'block'
	}
}
}
/*========================================================================================================================================================*/
const catalogeBurger = document.querySelector('.cataloge__burger');
const line1 = document.querySelector('.cataloge__line1');
const line2 = document.querySelector('.cataloge__line2');
const line3 = document.querySelector('.cataloge__line3');
let act = true;
const catalogeBody = document.querySelector('.cataloge__body');


catalogeBurger.onclick = () =>{
	if (act === true) {
		act = false
		_slideDown(catalogeBody,300)
		line2.style = 'width: 0'
		line1.style = 'transform: translateY(350%) rotate(45deg)'
		line3.style = 'transform: translateY(-350%) rotate(-45deg)'
	} else {
		act = true
		_slideUp(catalogeBody,300)
		line2.style = 'width: 100%'
		line1.style = 'transform: rotate(0)'
		line3.style = 'transform: rotate(0)'
	}
} 

const searchTitle = document.querySelector('.search-page__title');
const categoriesSearch = document.querySelector('.categories-search');
if(searchTitle){
	searchTitle.addEventListener("click",function (e){
		searchTitle.classList.toggle('_active')
		_slideToggle(categoriesSearch)
	});
}


let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener("change",function (e){
		checkboxCategory.classList.toggle('_active');

		const checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

		if(checkboxActiveCategories.length > 0){
			searchTitle.classList.add('_categories')
			let searchQuantity = document.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + checkboxActiveCategories.length
		}else{
			searchTitle.classList.remove('_categories')
		}
		
	});
}

/*========================================================================================================================================================*/
// All sliders

// main-page slider
if (document.querySelector('.main__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
		let mainSlider = new Swiper('.main__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		loop: true,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,

		/*
		// Эффекты
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Пагинация
		pagination: {
			el: '.mainslider__dotts',
			clickable: true,
			// dynamicBullets: true,
			// renderBullet: function (index,className){
			// 	return '<span class="' + className + '">'+ (index + 1) +'</span>'
			// },
		},

		// Скроллбар
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		*/

		// Кнопки "влево/вправо"
		// navigation: {
		// 	prevEl: '.swiper-button-prev',
		// 	nextEl: '.swiper-button-next',
		// },

		// Брейкпоинты
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		// События
		on: {

		}
	});

	const mainslides =document.querySelectorAll('.mainslider__image');
	const mainSlideDotts =document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');

	for (let i = 0; i < mainslides.length; i++) {
		const mainslide = mainslides[i].querySelector('.img').src;
		const mainslideDott = mainSlideDotts[i]
		mainslideDott.style.backgroundImage = "url('"+ mainslide + "')"
		let numbers = document.createElement('span')
		numbers.setAttribute('class','mainslider__num')
		mainslideDott.append(numbers)
		numbers.innerText = i + 1
	}
}
// products__slider page__cataloge-products

if (document.querySelector('.page__products')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	let productsSlider = new Swiper('.products__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		// loop: true,
		//touchRatio: 0,
		simulateTouch: false,
		//loop: true,
		// preloadImages: false,
		//lazy: true,


		/*
		// Эффекты
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Пагинация
		pagination: {
				el: '.fractions',
				type: 'fraction',
			// clickable: true,
			// dynamicBullets: true,
			// renderBullet: function (index,className){
			// 	return '<span class="' + className + '">'+ (index + 1) +'</span>'
			// }
			},

		// Скроллбар
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.button-prev',
			nextEl: '.button-next',
		},

		// Брейкпоинты
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		// События
		// on: {

		// }
	})
}
// brand slider
if (document.querySelector('.brands__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
		let brands__slider = new Swiper('.brands__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 50,
		// autoHeight: true,
		speed: 800,
		loop: true,
		//touchRatio: 0,
		simulateTouch: true,
		//preloadImages: false,
		//lazy: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.brands-button-prev',
			nextEl: '.brands-button-next',
		},
				// Брейкпоинты
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			660: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
		},

	});

}
// product-details slider

if (document.querySelector('.product-details__sliders')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	let productDetailsSub = new Swiper('.product-details-sub__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 12,
		grabCursor: true,

		// autoHeight: true,
		speed: 800,
		// loop: true,
		//touchRatio: 0,
		simulateTouch: true,
		//preloadImages: false,
		//lazy: true,
	});
		let productDetails = new Swiper('.product-details__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 50,
		// autoHeight: true,
		speed: 800,
		grabCursor: true,
		// loop: true,
		//touchRatio: 0,
		simulateTouch: true,
		//preloadImages: false,
		//lazy: true,
		thumbs: {
			swiper: productDetailsSub,
		},

		// Кнопки "влево/вправо"
		// navigation: {
		// 	prevEl: '.brands-button-prev',
		// 	nextEl: '.brands-button-next',
		// },
				// Брейкпоинты
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 	},
		// 	480: {
		// 		slidesPerView: 2,
		// 	},
		// 	660: {
		// 		slidesPerView: 3,
		// 	},
		// 	768: {
		// 		slidesPerView: 4,
		// 	},
		// 	992: {
		// 		slidesPerView: 5,
		// 	},
		// },

	});
}

/*========================================================================================================================================================*/
// opening and closing filter areas

const filterBbtn = document.querySelectorAll('.flt-slide');
const filterBbtnImges =document.querySelectorAll('.flt-slide .filter-bbtn__icon');
const filterSectionContent = document.querySelectorAll('.filter-section__content');
 
let fltbutton = false;

for (let index = 0; index < filterBbtn.length; index++) {
	const fltbbtn = filterBbtn[index];
	const fltSectionContent = filterSectionContent[index];
	const filterBbtnImg = filterBbtnImges[index]
	fltbbtn.onclick = (e)=>{
		e.preventDefault()
	_slideToggle(fltSectionContent,200);
		filterBbtnImg.classList.toggle('_active')
	}
}

/*========================================================================================================================================================*/

// adding attribute for and id for inputs and labels
const filterCheckboies = document.querySelectorAll('.filter-section__content input');
const filterLabels = document.querySelectorAll('.filter-section__content label');

for (let ind = 0; ind < filterCheckboies.length; ind++) {
	const fltCheckbox = filterCheckboies[ind];
	fltCheckbox.setAttribute('id', ind);
	filterLabels[ind].setAttribute('for', ind)
}

/*========================================================================================================================================================*/
	
let products = [
	{
		name: 'BH 111',
		category: 'Беговая дорожка',
		type: 'Электрическая',
		manufacturer: 'Clear-fit',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 5000,
		img: `./img/products/running/itm1.png`,
	},
	{
		name: 'Велосипед',
		category: 'Велотренажеры',
		type: 'Электрическая',
		manufacturer: 'Mercedec',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 3000,
		img: `./img/products/running/itm2.png`,
	},
	{
		name: 'BH 222',
		category: 'Беговая дорожка',
		type: 'Электрическая',
		manufacturer: 'BMW',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 6000,
		img: `./img/products/running/itm3.png`,
	},
	{
		name: 'Стол 333',
		category: 'Тенисные столы',
		type: 'Электрическая',
		manufacturer: 'Nissan',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 64990,
		img: `./img/products/running/itm4.png`,

	},
	{
		name: 'Стол 333',
		category: 'Тенисные столы',
		type: 'Электрическая',
		manufacturer: 'Nissan',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 64990,
		img: `./img/products/running/itm5.png`,

	},
	{
		name: 'BH 111',
		category: 'Беговая дорожка',
		type: 'Электрическая',
		manufacturer: 'Clear-fit',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 5000,
		img: `./img/products/running/itm6.png`,
	},
	{
		name: 'Велосипед',
		category: 'Велотренажеры',
		type: 'Электрическая',
		manufacturer: 'Mercedec',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 3000,
		img: `./img/products/running/itm7.png`,
	},
	{
		name: 'BH 222',
		category: 'Беговая дорожка',
		type: 'Электрическая',
		manufacturer: 'BMW',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 6000,
		img: `./img/products/running/itm8.png`,
	},
	{
		name: 'Стол 333',
		category: 'Тенисные столы',
		type: 'Электрическая',
		manufacturer: 'Nissan',
		power: 12,
		size: 'большой',
		maxUserWeight: 150,
		speed: 22,
		angle: 'электронная',
		oldPrice: 69000,
		newPrice: 64990,
		img: `./img/products/running/itm9.png`,

	},
]

const productsContainer = document.querySelectorAll('.cataloge-products__itm-product');
const checkboxText =document.querySelectorAll('.fillter');
const filterCheckbox =document.querySelectorAll('.flt-checkbox input');
const checkboxArea = document.querySelectorAll('.filter-checkboxies');


let productItems;
let productItem;
let page = 0;

try{for (let i = 0; i < products.length; i++) {
	const product = products[i];

		productItem = `<div class="products__column" data-type="${product.manufacturer}"><div class="products__item"><div class="products__picture -ibg"><img class="img" src="${product.img}" alt=""></div><a href="product.html" class="products__body"><div class="products__name">${product.name}</div><div class="products__pre-name">${product.category}</div></a><div class="products__footer"><button class="products__cart"><i class="icon fa fa-shopping-basket"></i></button><div class="products__prices"><div class="products__old-price rub">${product.oldPrice}</div><div class="products__new-price rub">${product.newPrice}</div></div></div><div class="products__item-hover item-hover"><a href="product.html" class="item-hover__title">${product.name}<span>${product.category}</span></a><div class="item-hover__options"><div class="item-hover__option"><div class="item-hover__label">Тип беговой дорожки:</div><div class="item-hover__value">${product.type}</div></div><div class="item-hover__option"><div class="item-hover__label">Скорость движения (км/ч):</div><div class="item-hover__value">${product.speed}</div></div><div class="item-hover__option"><div class="item-hover__label">Складывание:</div><div class="item-hover__value">Есть</div></div><button class="item-hover__compare">Сравнить</button></div><div class="item-hover__cart"></div><div class="item-hover__footer"><button class="icon fa fa-shopping-basket"></button><div class="item-hover__price"><div class="item-hover__old-price rub">${product.oldPrice}</div><div class="item-hover__new-price rub">${product.newPrice}</div></div></div></div></div></div>`
		productsContainer[0].innerHTML += productItem

}}
catch{

}



/*========================================================================================================================================================*/
var priceSlider = document.getElementById('slider');
const priceStart = document.getElementById('price-start');
const priceEnd = document.getElementById('price-end');



if (priceSlider) {
	noUiSlider.create(priceSlider, {
		start: [25000, 170000],
		connect: true,
		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});


	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
	let StartValue;
	let EndValue;


	function setValue(){
		priceStart.placeholder = this
	}

}


/*========================================================================================================================================================*/
/*========================================================================================================================================================*/
// Select

let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');
	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}