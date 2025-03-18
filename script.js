const doors = {
	'etalon': {
		'et-01-pvh': {
			priceEpicentr: 4566,
			priceRealiz: 5937,
		},
		'et-01-al': {
			priceEpicentr: 6330,
			priceRealiz: 8229,
		},
		'et-02-17-pvh': {
			priceEpicentr: 5226,
			priceRealiz: 6795,
		},
		'et-02-17-al': {
			priceEpicentr: 6930,
			priceRealiz: 9009,
		},
	},

	'standart': {
		'st-1': {
			priceEpicentr: 4173,
			priceRealiz: 6126,
		},
		'st-2': {
			priceEpicentr: 6051,
			priceRealiz: 7866,
		},
		'st-3': {
			priceEpicentr: 4785,
			priceRealiz: 6219,
		},
	},

	'denomination': {
		'nl-1': {
			priceEpicentr: 3249,
			priceRealiz: 4224,
		},
		'nl-2-5': {
			priceEpicentr: 4146,
			priceRealiz: 5392,
		},
		'boxTel-80': {
			priceEpicentr: 1401,
			priceRealiz: 1821,
		},
		'boxTel-100': {
			priceEpicentr: 1626,
			priceRealiz: 2115,
		},
		'boxTel-120': {
			priceEpicentr: 1776,
			priceRealiz: 2310,
		},
		'welt-80': {
			priceEpicentr: 561,
			priceRealiz: 729,
		},
		'welt-80-40': {
			priceEpicentr: 630,
			priceRealiz: 819,
		},
		'dob-100': {
			priceEpicentr: 597,
			priceRealiz: 776,
		},
		'dob-150': {
			priceEpicentr: 825,
			priceRealiz: 1071,
		},
		'dob-200': {
			priceEpicentr: 1044,
			priceRealiz: 1356,
		},


	},

	'paint': {
		'boardPrimedPaint-pr': {
			priceEpicentr: 5997,
			priceRealiz: 7797,
		},
		'boardPrimedPaint-al': {
			priceEpicentr: 8283,
			priceRealiz: 10767,
		},
		'boardPrimedPaintInside-pr': {
			priceEpicentr: 6300,
			priceRealiz: 8190,
		},
		'boardPrimedPaintInside-al': {
			priceEpicentr: 9423,
			priceRealiz: 12251,
		},
		'boardPaint': {
			priceEpicentr: 5979,
			priceRealiz: 7773,
		},
		'boardPaintInside': {
			priceEpicentr: 6915,
			priceRealiz: 8991,
		},
	},

	'other': {
		'boxTel-80': {
			priceEpicentr: 1596,
			priceRealiz: 2076,
		},
		'boxTel-100': {
			priceEpicentr: 1827,
			priceRealiz: 2376,
		},
		'boxTel-120': {
			priceEpicentr: 1989,
			priceRealiz: 2583,
		},
		'weltTel-80': {
			priceEpicentr: 684,
			priceRealiz: 888,
		},
		'weltTel-80-40': {
			priceEpicentr: 933,
			priceRealiz: 1212,
		},
		'boxComp-80': {
			priceEpicentr: 2169,
			priceRealiz: 2820,
		},
		'weltComp-80': {
			priceEpicentr: 1168,
			priceRealiz: 1518,
		},
		'dobTel-100': {
			priceEpicentr: 717,
			priceRealiz: 933,
		},
		'dobTel-150': {
			priceEpicentr: 1017,
			priceRealiz: 1323,
		},
		'dobTel-200': {
			priceEpicentr: 1332,
			priceRealiz: 1731,
		},
		'fitIns-pvh': {
			priceEpicentr: 462,
			priceRealiz: 600,
		},
		'fitIns-al': {
			priceEpicentr: 516,
			priceRealiz: 672,
		},
		'paintAl': {
			priceEpicentr: 504,
			priceRealiz: 654,
		},
		'concBox': {
			priceEpicentr: 5502,
			priceRealiz: 7152,
		},
		'concBoxInside': {
			priceEpicentr: 6801,
			priceRealiz: 8841,
		},
		'alProf-40': {
			priceEpicentr: 1947,
			priceRealiz: 2532,
		},
		'alProf-56': {
			priceEpicentr: 2568,
			priceRealiz: 3339,
		},


	},

	'furniture': {
		'loop': {
			priceEpicentr: 0,
			priceRealiz: 590,
		},
		'lock': {
			priceEpicentr: 0,
			priceRealiz: 930,
		},
	}
};

switchDescription();
calculateAmount(doors);
changeAmount();


function switchDescription() {
	const block = document.querySelectorAll('.door__header');

	block.forEach(elem => {
		elem.addEventListener('click', () => {
			let processListItemClasses = elem.parentElement.classList;
			processListItemClasses.toggle('active');
		});
	});

	// block.addEventListener('click', function (event) {
	// 	if (event.target.closest('.door__header')) {
	// 		console.log(event.target);
	// 		toggleActive(event.target);
	// 	}
	// });

	// function toggleActive(event) {
	// 	let processListItemClasses = event.parentElement.classList;
	// 	processListItemClasses.toggle('active');
	// }
};



function calculateAmount(modelsList) {

	const calculateBtn = document.querySelector('.door__sum-btn');
	const amountEpicentr = document.querySelector('.door__amount-epicentr');
	const amountRealiz = document.querySelector('.door__amount-realiz');
	let selectModels;
	let count = 0;
	let countZac = 0;

	calculateBtn.addEventListener('click', function (event) {
		selectModels = selectCheckedModels();
		console.log(selectModels);

		selectModels.forEach(function (item) {
			let model = item.model;
			console.log(model);
			let name = item.name;
			console.log(modelsList[model][name]);
			count += modelsList[model][name].priceRealiz * +item.amount;
			countZac += modelsList[model][name].priceEpicentr * +item.amount;
		});

		console.log(count);
		console.log(countZac);

		amountEpicentr.innerHTML = `Сумма закупки = ${countZac}`;
		amountRealiz.innerHTML = `Сумма реалізації = ${count}`;

		count = 0;
		countZac = 0;
	});





	function selectCheckedModels() {
		const doorsBlock = document.querySelectorAll('.door__item:has(input[type="checkbox"]:checked)');
		let selectModels = [];

		doorsBlock.forEach(item => {
			let doorsModel = {
				model: item.parentElement.parentElement.id,
				name: item.id,
				amount: item.querySelector('input[type="number"]').value,
			};

			selectModels.push(doorsModel);
		});

		return selectModels;
	};

};

function changeAmount() {
	const block = document.querySelector('.door');

	block.addEventListener('click', function (event) {
		let elem = event.target;
		let count;
		if (elem.closest('.door__minus-btn')) {
			count = +elem.parentElement.querySelector('.door__amount').value;
			elem.parentElement.querySelector('.door__amount').value = count - 1;
		}

		if (elem.closest('.door__plus-btn')) {
			count = +elem.parentElement.querySelector('.door__amount').value;
			elem.parentElement.querySelector('.door__amount').value = count + 1;
		}
	});

}
