// const swiper = new Swiper('.swiper', {
// 	direction: 'vertical',
// 	loop: true,

// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });

class Model {

	constructor(title, priceEpicentr, priceRealiz) {
		this.title = title;
		this.priceEpicentr = priceEpicentr;
		this.priceRealiz = priceRealiz;
		this.count = 0;
		this.checked = false;
	}

	toggleChecked() {
		this.checked = !this.checked;
		this.checked ? this.count = 1 : this.count = 0;

		changeDataInHtml()
	}

	chengeCount(target) {
		if (target.closest('.door__value-btn--minus') && this.count > 0) {
			this.count -= 1;
		};

		if (target.closest('.door__value-btn--plus')) {
			this.count += 1;
		};
	}
}

const doors = {
	'etalon': {
		'et-01-pvh': new Model('Полотно, модель ЕТ-01, МДФ, гладке, покриття - плівка ПВХ (Крайка ПВХ)', 4566, 5937),
		'et-01-al': new Model('Полотно, модель ЕТ-01, МДФ, гладке, покриття - плівка ПВХ (Крайка Алюміній)', 6330, 8229),
		'et-02-17-pvh': new Model('Полотно, модель ЕТ-02 -…… - ЕТ-17, МДФ, з фрезеруванням, покриття - плівка ПВХ (Крайка ПВХ)', 5226, 6795),
		'et-02-17-al': new Model('Полотно, модель ЕТ-02 -…… - ЕТ-17, МДФ, з фрезеруванням, покриття - плівка ПВХ (Крайка Алюміній)', 6930, 9009),
	},

	'standart': {
		'st-1': new Model('Полотно, модель СТ-1, МДФ, покриття ПВХ', 4173, 6126),
		'st-2': new Model('Полотно, модель СТ-2, МДФ, покриття ПВХ', 6051, 7866),
		'st-3': new Model('Полотно, модель СТ-3, МДФ, покриття ПВХ', 4785, 6219),
	},

	'denomination': {
		'nl-1': new Model('Полотно, модель NL-01, МДФ, глухе, гладке, покриття - плівка ПВХ (34мм)', 3249, 4224),
		'nl-2-5': new Model('Полотно, модель NL-02 -.- NL-05, МДФ, глухе, гладке, покриття - плівка ПВХ чорна(34мм)', 4146, 5392),
		'boxTel-80': new Model('Короб телескопічний 80мм, сосна+МДФ, покриття - ПВХ (номінал)', 1401, 1821),
		'boxTel-100': new Model('Короб телескопічний 100мм, сосна+МДФ, покриття - ПВХ (номінал)', 1626, 2115),
		'boxTel-120': new Model('Короб телескопічний 120мм, сосна+МДФ, покриття - ПВХ (номінал)', 1776, 2310),
		'welt-80': new Model('Лиштва телескопічна 80мм, МДФ, покриття - ПВХ (номінал)', 561, 729),
		'welt-80-40': new Model('Лиштва телескопічна 80мм, МДФ, покриття - ПВХ (номінал, крило 40 мм)', 630, 819),
		'dob-100': new Model('Добір телескопічний 100 мм (номінал)', 597, 776),
		'dob-150': new Model('Добір телескопічний 150 мм (номінал)', 825, 1071),
		'dob-200': new Model('Добір телескопічний 200 мм (номінал)', 1044, 1356),
	},

	'paint': {
		'boardPrimedPaint-pr': new Model('Полотно МДФ грунтоване під фарбування (крайка грунт)', 5997, 7797),
		'boardPrimedPaint-al': new Model('Полотно МДФ грунтоване під фарбування (крайка алюміній)', 8283, 10767),
		'boardPrimedPaintInside-pr': new Model('Полотно МДФ грунтоване під фарбування Inside (крайка грунт)', 6300, 8190),
		'boardPrimedPaintInside-al': new Model('Полотно МДФ грунтоване під фарбування Inside (крайка алюміній)', 9423, 12251),
		'boardPaint': new Model('Полотно МДФ під фарбування (плівка)', 5979, 7773),
		'boardPaintInside': new Model('Полотно МДФ під фарбування (плівка) Inside', 6915, 8991),
		'concBox': new Model('Коробка прихованого монтажу', 5502, 7152),
		'concBoxInside': new Model('Коробка прихованого монтажу Inside', 6801, 8841),
	},

	'other': {
		'boxTel-80': new Model('Короб телескопічний 80мм, сосна+МДФ, покриття - ПВХ', 1596, 2076),
		'boxTel-100': new Model('Короб телескопічний 100мм, сосна+МДФ, покриття - ПВХ', 1827, 2376),
		'boxTel-120': new Model('Короб телескопічний 120мм, сосна+МДФ, покриття - ПВХ', 1989, 2583),
		'weltTel-80': new Model('Лиштва телескопічна 80мм, МДФ, покриття - ПВХ', 684, 888),
		'weltTel-80-40': new Model('Лиштва телескопічна 80мм, МДФ, покриття - ПВХ (крило 40 мм)', 933, 1212),
		'boxComp-80': new Model('Короб компланарний 80мм, сосна+МДФ, покриття - ПВХ', 2169, 2820),
		'weltComp-80': new Model('Лиштва компланарна 80мм, МДФ, покриття - ПВХ', 1168, 1518),
		'dobTel-100': new Model('Добір телескопічний 100 мм.', 717, 933),
		'dobTel-150': new Model('Добір телескопічний 150 мм.', 1017, 1323),
		'dobTel-200': new Model('Добір телескопічний 200 мм.', 1332, 1731),
		'fitIns-pvh': new Model('Врізка фурнітури ПВХ', 462, 600),
		'fitIns-al': new Model('Врізка фурнітури Алюміній', 516, 672),
		'paintAl': new Model('Фарбування алюмінієвої крайки', 504, 654),
		'alProf-40': new Model('Система алюмінієвих профілів для торцювання 40 мм', 1947, 2532),
		'alProf-56': new Model('Система алюмінієвих профілів для торцювання 56 мм (Inside)', 2568, 3339),
	},
};

const selectedItemsList = {};

const allDoorsItems = document.querySelectorAll('.door__item');
let countRealiz = 0;
let countEpicentr = 0;

allDoorsItems.forEach(elem => {
	const elemModel = elem.dataset.model;
	const elemName = elem.dataset.name;
	const doorsItem = doors[elemModel][elemName];

	elem.addEventListener('click', (event) => {
		if (!event.target.closest('.door__value-btn') && !event.target.closest('.door__count')) {
			if (event.target.closest('.door__item') || event.target.parentElement.closest('.door__item')) {
				const toggleCheckboxEvent = new CustomEvent('toggleCheckbox', {
					detail: {
						elem: elem,
						doorsItem: doorsItem,
					}
				});

				document.dispatchEvent(toggleCheckboxEvent);
			}
		};

		if (event.target.closest('.door__value-btn')) {
			const changeAmountEvent = new CustomEvent('changeCount', {
				detail: {
					elem: elem,
					target: event.target,
					doorsItem: doorsItem,
				},
			});

			document.dispatchEvent(changeAmountEvent);
		};
	});
});

eventInitialization()
switchModelBlock();
switchSwiperBlock();
writePrice();
writeLable();

function switchModelBlock() {
	const titleList = document.querySelectorAll('.door__header');

	titleList.forEach(item => {
		item.addEventListener('click', (event) => {
			console.log(event.target)
			item.parentElement.classList.toggle('active');
		});
	});
};

function switchSwiperBlock() {

	let swiper;

	openSwiperBlock();
	closeSwiperBlock();

	function openSwiperBlock() {
		const modelList = document.querySelectorAll('.model-block__image');

		modelList.forEach(item => {
			item.addEventListener('click', (event) => {
				if (item.parentElement.parentElement.nextElementSibling.classList.contains('swiper')) {

					swiper = new Swiper('.swiper', {
						direction: 'vertical',
						loop: true,
						loopedSlidesLimit: null,

						pagination: {
							el: '.swiper-pagination',
							// clickable: true,
							type: 'fraction',
							renderCustom: function (swiper, current, total) {
								return current + ' of ' + total;
							},
						},

						initialSlide: +item.dataset.slide - 1,
					});

					item.parentElement.parentElement.nextElementSibling.classList.add('swiper--active');
				};
			});
		});
	};

	function closeSwiperBlock() {
		const modelList = document.querySelectorAll('.swiper__close');
		// const paginationList = document.querySelectorAll('.swiper-pagination');

		modelList.forEach(item => {
			item.addEventListener('click', (event) => {
				if (item.parentElement.classList.contains('swiper')) {
					item.parentElement.classList.remove('swiper--active');
					// paginationList.forEach(elem => {
					// 	console.log(1);
					// 	elem.innerHTML = null;
					// });
				};
			});
		});
	};
};





function writePrice() {
	const models = document.querySelectorAll('.door__item');

	models.forEach(item => {

		const blockName = item.parentElement.parentElement.id;
		const modelName = item.id;
		const modelPrice = item.querySelector('.door__price > span');

		modelPrice.innerHTML = doors[blockName][modelName].priceRealiz;
	});

}

function writeLable() {
	const models = document.querySelectorAll('.door__item');

	models.forEach(item => {
		const blockName = item.parentElement.parentElement.id;
		const modelName = item.id;
		const doorName = item.querySelector('label');

		doorName.innerHTML = doors[blockName][modelName].title;
	});
};

function changeDataInHtml() {
	const calculateAmountEvent = new Event('calculateAmount');
	const customEventWriteSelectedItems = new Event('writeSelectedItems');
	const customEventCreateSelectedItemsList = new Event('createSelectedItemsList');

	document.dispatchEvent(customEventCreateSelectedItemsList);
	document.dispatchEvent(calculateAmountEvent);
	document.dispatchEvent(customEventWriteSelectedItems);
};

function eventInitialization() {
	document.addEventListener('createSelectedItemsList', (obj) => {
		for (key in selectedItemsList) {
			delete selectedItemsList[key];
		};

		for (model in doors) {
			for (item in doors[model]) {
				if (doors[model][item].checked) {
					selectedItemsList[item] = {
						model: model,
						name: item,
						count: doors[model][item].count,
						checked: doors[model][item].checked,
					};
				}
			}
		};
	});

	document.addEventListener('toggleCheckbox', (obj) => {
		const elem = obj.detail.elem;
		const doorsItem = obj.detail.doorsItem;

		doorsItem.toggleChecked();

		const allDoorItem = document.querySelectorAll('.door__item');

		allDoorItem.forEach((item) => {
			if (item.dataset.name == elem.dataset.name) {
				const inputCheck = item.querySelector('input[type="checkbox"]');

				inputCheck.checked = doorsItem.checked;
				item.querySelector('.door__count').value = doorsItem.count;
			}
		})
	});

	document.addEventListener('changeCount', (obj) => {
		const elem = obj.detail.elem;
		const target = obj.detail.target;
		const doorsItem = obj.detail.doorsItem;

		doorsItem.chengeCount(target);

		const allDoorItem = document.querySelectorAll('.door__item');

		allDoorItem.forEach((item) => {
			if (item.dataset.name == elem.dataset.name) {
				item.querySelector('.door__count').value = doorsItem.count;
			}
		})

		changeDataInHtml()
	});

	document.addEventListener('calculateAmount', () => {
		const amountEpicentr = document.querySelector('.door__amount-res--epicentr > span');
		const amountRealiz = document.querySelector('.door__amount-res--realiz > span');

		countRealiz = 0;
		countEpicentr = 0;

		for (key in selectedItemsList) {
			let item = selectedItemsList[key];
			let model = item.model;
			let name = item.name;

			countRealiz += doors[model][name].priceRealiz * +item.count;
			countEpicentr += doors[model][name].priceEpicentr * +item.count;
		};

		amountEpicentr.innerHTML = countEpicentr;
		amountRealiz.innerHTML = countRealiz;
	});

	document.addEventListener('writeSelectedItems', () => {
		let selectedBlock = document.querySelector('.seleted-block__inner');
		let selectedItemsHtmlList = {};
		selectedBlock.innerHTML = null;

		for (key in selectedItemsList) {
			let item = selectedItemsList[key];
			let model = item.model;
			let name = item.name;

			let innerText = `<div class="door__item door__item--selected" data-selectedElem="true" data-model="${model}" data-name="${name}" id="${name}_selected">
										<input type="checkbox" class="door__checkbox visually-hidden" name="${name}" id="${name}_lb_selected" checked>
										<label class="door__checkbox-label" for="${name}_lb_selected">
										${doors[model][name].title}
										</label>
										<p class="door__price">Ціна: ${doors[model][name].priceRealiz}<span></span></p>
										<div class="door__btn-block">
												<button class="door__value-btn door__value-btn--minus">-</button>
												<input type="number" class="door__count" value="${doors[model][name].count}">
										<button class="door__value-btn door__value-btn--plus">+</button>
										</div>
									</div>`

			selectedItemsHtmlList[name] = innerText;
		};

		for (key in selectedItemsHtmlList) {
			let item = selectedItemsHtmlList[key];

			selectedBlock.innerHTML += item;
		};

		const selectedAllDoorsItems = document.querySelectorAll('.door__item--selected');

		selectedAllDoorsItems.forEach(elem => {
			const elemModel = elem.dataset.model;
			const elemName = elem.dataset.name;
			const doorsItem = doors[elemModel][elemName];

			elem.addEventListener('click', (event) => {
				if (!event.target.closest('.door__value-btn') && !event.target.closest('.door__count')) {
					if (event.target.closest('.door__item') || event.target.parentElement.closest('.door__item')) {
						console.log(1);
						const toggleCheckboxEvent = new CustomEvent('toggleCheckbox', {
							detail: {
								elem: elem,
								doorsItem: doorsItem,
							}
						});

						document.dispatchEvent(toggleCheckboxEvent);
					}
				};

				if (event.target.closest('.door__value-btn')) {
					const changeAmountEvent = new CustomEvent('changeCount', {
						detail: {
							elem: elem,
							target: event.target,
							doorsItem: doorsItem,
						},
					});

					document.dispatchEvent(changeAmountEvent);
				};
			});
		});
	});
};