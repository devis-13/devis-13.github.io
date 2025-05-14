const doors = {
	'etalon': {
		'et-01-pvh': {
			title: 'Полотно, модель ЕТ-01, МДФ, гладке, покриття - плівка ПВХ (Крайка ПВХ)',
			priceEpicentr: 4566,
			priceRealiz: 5937,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'et-01-al': {
			title: 'Полотно, модель ЕТ-01, МДФ, гладке, покриття - плівка ПВХ (Крайка Алюміній)',
			priceEpicentr: 6330,
			priceRealiz: 8229,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'et-02-17-pvh': {
			title: 'Полотно, модель ЕТ-02 -…… - ЕТ-17, МДФ, з фрезеруванням, покриття - плівка ПВХ (Крайка ПВХ)',
			priceEpicentr: 5226,
			priceRealiz: 6795,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'et-02-17-al': {
			title: 'Полотно, модель ЕТ-02 -…… - ЕТ-17, МДФ, з фрезеруванням, покриття - плівка ПВХ (Крайка Алюміній)',
			priceEpicentr: 6930,
			priceRealiz: 9009,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
	},

	'standart': {
		'st-1': {
			title: 'Полотно, модель СТ-1, МДФ, покриття ПВХ',
			priceEpicentr: 4173,
			priceRealiz: 6126,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'st-2': {
			title: 'Полотно, модель СТ-2, МДФ, покриття ПВХ',
			priceEpicentr: 6051,
			priceRealiz: 7866,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'st-3': {
			title: 'Полотно, модель СТ-3, МДФ, покриття ПВХ',
			priceEpicentr: 4785,
			priceRealiz: 6219,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
	},

	'denomination': {
		'nl-1': {
			title: 'Полотно, модель NL-01, МДФ, глухе, гладке, покриття - плівка ПВХ (34мм)',
			priceEpicentr: 3249,
			priceRealiz: 4224,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'nl-2-5': {
			title: 'Полотно, модель NL-02 -.- NL-05, МДФ, глухе, гладке, покриття - плівка ПВХ чорна(34мм)',
			priceEpicentr: 4146,
			priceRealiz: 5392,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boxTel-80': {
			title: 'Короб телескопічний 80мм, сосна+МДФ, покриття - ПВХ (номінал)',
			priceEpicentr: 1401,
			priceRealiz: 1821,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boxTel-100': {
			title: 'Короб телескопічний 100мм, сосна+МДФ, покриття - ПВХ (номінал)',
			priceEpicentr: 1626,
			priceRealiz: 2115,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boxTel-120': {
			title: 'Короб телескопічний 120мм, сосна+МДФ, покриття - ПВХ (номінал)',
			priceEpicentr: 1776,
			priceRealiz: 2310,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'welt-80': {
			title: 'Лиштва телескопічна 80мм, МДФ, покриття - ПВХ (номінал)',
			priceEpicentr: 561,
			priceRealiz: 729,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'welt-80-40': {
			title: 'Лиштва телескопічна 80мм, МДФ, покриття - ПВХ (номінал, крило 40 мм)',
			priceEpicentr: 630,
			priceRealiz: 819,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'dob-100': {
			title: 'Добір телескопічний 100 мм (номінал)',
			priceEpicentr: 597,
			priceRealiz: 776,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'dob-150': {
			title: 'Добір телескопічний 150 мм (номінал)',
			priceEpicentr: 825,
			priceRealiz: 1071,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'dob-200': {
			title: 'Добір телескопічний 200 мм (номінал)',
			priceEpicentr: 1044,
			priceRealiz: 1356,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},


	},

	'paint': {
		'boardPrimedPaint-pr': {
			title: 'Полотно МДФ грунтоване під фарбування (крайка грунт)',
			priceEpicentr: 5997,
			priceRealiz: 7797,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boardPrimedPaint-al': {
			title: 'Полотно МДФ грунтоване під фарбування (крайка алюміній)',
			priceEpicentr: 8283,
			priceRealiz: 10767,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boardPrimedPaintInside-pr': {
			title: 'Полотно МДФ грунтоване під фарбування Inside (крайка грунт)',
			priceEpicentr: 6300,
			priceRealiz: 8190,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boardPrimedPaintInside-al': {
			title: 'Полотно МДФ грунтоване під фарбування Inside (крайка алюміній)',
			priceEpicentr: 9423,
			priceRealiz: 12251,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boardPaint': {
			title: 'Полотно МДФ під фарбування (плівка)',
			priceEpicentr: 5979,
			priceRealiz: 7773,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boardPaintInside': {
			title: 'Полотно МДФ під фарбування (плівка) Inside',
			priceEpicentr: 6915,
			priceRealiz: 8991,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'concBox': {
			title: 'Коробка прихованого монтажу',
			priceEpicentr: 5502,
			priceRealiz: 7152,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'concBoxInside': {
			title: 'Коробка прихованого монтажу Inside',
			priceEpicentr: 6801,
			priceRealiz: 8841,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
	},

	'other': {
		'boxTel-80': {
			title: 'Короб телескопічний 80мм, сосна+МДФ, покриття - ПВХ',
			priceEpicentr: 1596,
			priceRealiz: 2076,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boxTel-100': {
			title: 'Короб телескопічний 100мм, сосна+МДФ, покриття - ПВХ',
			priceEpicentr: 1827,
			priceRealiz: 2376,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boxTel-120': {
			title: 'Короб телескопічний 120мм, сосна+МДФ, покриття - ПВХ',
			priceEpicentr: 1989,
			priceRealiz: 2583,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'weltTel-80': {
			title: 'Лиштва телескопічна 80мм, МДФ, покриття - ПВХ',
			priceEpicentr: 684,
			priceRealiz: 888,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'weltTel-80-40': {
			title: 'Лиштва телескопічна 80мм, МДФ, покриття - ПВХ (крило 40 мм)',
			priceEpicentr: 933,
			priceRealiz: 1212,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'boxComp-80': {
			title: 'Короб компланарний 80мм, сосна+МДФ, покриття - ПВХ',
			priceEpicentr: 2169,
			priceRealiz: 2820,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'weltComp-80': {
			title: 'Лиштва компланарна 80мм, МДФ, покриття - ПВХ',
			priceEpicentr: 1168,
			priceRealiz: 1518,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'dobTel-100': {
			title: 'Добір телескопічний 100 мм.',
			priceEpicentr: 717,
			priceRealiz: 933,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'dobTel-150': {
			title: 'Добір телескопічний 150 мм.',
			priceEpicentr: 1017,
			priceRealiz: 1323,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'dobTel-200': {
			title: 'Добір телескопічний 200 мм.',
			priceEpicentr: 1332,
			priceRealiz: 1731,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'fitIns-pvh': {
			title: 'Врізка фурнітури ПВХ',
			priceEpicentr: 462,
			priceRealiz: 600,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'fitIns-al': {
			title: 'Врізка фурнітури Алюміній',
			priceEpicentr: 516,
			priceRealiz: 672,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'paintAl': {
			title: 'Фарбування алюмінієвої крайки',
			priceEpicentr: 504,
			priceRealiz: 654,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},

		'alProf-40': {
			title: 'Система алюмінієвих профілів для торцювання 40 мм',
			priceEpicentr: 1947,
			priceRealiz: 2532,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},
		'alProf-56': {
			title: 'Система алюмінієвих профілів для торцювання 56 мм (Inside)',
			priceEpicentr: 2568,
			priceRealiz: 3339,
			count: 0,
			checked: false,
			toggleChecked() {
				const calculateAmountEvent = new CustomEvent('calculateAmount', {
					detail: {},
				});
				const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
					detail: {},
				});

				this.checked = !this.checked;
				this.checked ? this.count = 1 : this.count = 0;

				document.dispatchEvent(calculateAmountEvent);
				document.dispatchEvent(customEventWriteSelectedItems);
			},
			chengeCount(target) {
				if (target.closest('.door__value-btn--minus') && this.count > 0) {
					this.count -= 1;
				};

				if (target.closest('.door__value-btn--plus')) {
					this.count += 1;
				};
			},
		},


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
		console.log(event.target);
		console.log(event.target.parentElement);
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

document.addEventListener('toggleCheckbox', (obj) => {
	console.log(1);
	const elem = obj.detail.elem;
	const doorsItem = obj.detail.doorsItem;

	doorsItem.toggleChecked();

	const allDoorItem = document.querySelectorAll('.door__item');

	allDoorItem.forEach((item) => {
		if (item.dataset.name == elem.dataset.name) {
			console.log(2);
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

	const calculateAmountEvent = new CustomEvent('calculateAmount', {
		detail: {},
	});
	const customEventWriteSelectedItems = new CustomEvent('writeSelectedItems', {
		detail: {},
	});

	doorsItem.chengeCount(target);

	const allDoorItem = document.querySelectorAll('.door__item');

	allDoorItem.forEach((item) => {
		if (item.dataset.name == elem.dataset.name) {
			item.querySelector('.door__count').value = doorsItem.count;
		}
	})

	document.dispatchEvent(calculateAmountEvent);
	document.dispatchEvent(customEventWriteSelectedItems);
});

document.addEventListener('calculateAmount', () => {
	const amountEpicentr = document.querySelector('.door__amount-res--epicentr > span');
	const amountRealiz = document.querySelector('.door__amount-res--realiz > span');

	countRealiz = 0;
	countEpicentr = 0;

	createSelectedItemsList();

	for (key in selectedItemsList) {
		let item = selectedItemsList[key];
		let model = item.model;
		let name = item.name;

		countRealiz += doors[model][name].priceRealiz * +item.count;
		countEpicentr += doors[model][name].priceEpicentr * +item.count;
	};

	amountEpicentr.innerHTML = countEpicentr;
	amountRealiz.innerHTML = countRealiz;

	function createSelectedItemsList() {

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
	};

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

switchModelBlock();
writePrice();
writeLable();


function switchModelBlock() {
	const titleList = document.querySelectorAll('.door__header');

	titleList.forEach(item => {
		item.addEventListener('click', () => {
			item.parentElement.classList.toggle('active');
		});
	});
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