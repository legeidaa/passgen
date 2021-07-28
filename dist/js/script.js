let numbers = document.querySelector('#numbers'),
	upper = document.querySelector('#upper'),
	lower = document.querySelector('#lower'),
	symbols = document.querySelector('#symbols'),
	range = document.querySelector('#range'),
	rangeSpan = document.querySelector('.label-range span'),
	result = document.querySelector('.result input'),
	btnGen = document.querySelector('form div'),
	btnCopy = document.querySelector('.result button');

let numbersChars = ['1','2','3','4','5','6','7','8','9','0'],
	upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	symbolsChars = ['!', '@', '#', '$', '%', '?'];



rangeSpan.innerText = range.value;
range.addEventListener("input", function() {
	rangeSpan.innerText = range.value;
});

function generatePass() {
	let passArr = [],
		finalPass = '';

	//если ни один из чекбоксов не отмечен, отмечаем номера
	if (document.querySelectorAll('input[type="checkbox"]:not(:checked)').length == 4) {
		numbers.checked = true;
	}
	if (numbers.checked){
		passArr = passArr.concat(numbersChars);
	}
	if (upper.checked){
		passArr = passArr.concat(upperChars);
	}
	if (lower.checked){
		passArr = passArr.concat(lowerChars);
	}
	if (symbols.checked){
		passArr = passArr.concat(symbolsChars);
	}

	const sortFunc = () => Math.random() - 0.5;
	const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
	passArr.sort(sortFunc);

	function finalSorting(){
		for (let i = 0; i < range.value; i++) {
			finalPass += passArr[randomInteger(0, passArr.length - 1)];
		}
	}
	finalSorting();

	//проверяем каждый элемент строки на содержание хотя бы одного элемента массива
	const include = function(arr, string) {
		let stringArr = string.split('');
	
		return !arr.some(i => stringArr.includes(i) > 0);
	};

	//если в конечный результат не попадает хотя бы один символ из всех выбранных массивов, перезапускаем функцию
	if (symbols.checked  && include(symbolsChars, finalPass)) {
		while (include(symbolsChars, finalPass)) {
			finalPass = '';
			finalSorting();
		}
	}
	else if (numbers.checked  && include(numbersChars, finalPass)) {
		while (include(numbersChars, finalPass)) {
			finalPass = '';
			finalSorting();
		}
	}
	else if (upper.checked  && include(upperChars, finalPass)) {
		while (include(upperChars, finalPass)) {
			finalPass = '';
			finalSorting();
		}
	}
	else if (lower.checked  && include(lowerChars, finalPass)) {
		while (include(lowerChars, finalPass)) {
			finalPass = '';
			finalSorting();
		}
	}
	//хз как сделать проверку на все чекбоксы сразу

	result.value = finalPass;
}

generatePass();

btnGen.addEventListener('click', generatePass);

btnCopy.addEventListener('click', () => {
	result.select();
	document.execCommand('copy');
});

