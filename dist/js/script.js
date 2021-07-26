let numbers = document.querySelector('#numbers'),
	upper = document.querySelector('#upper'),
	lower = document.querySelector('#lower'),
	symbols = document.querySelector('#symbols'),
	range = document.querySelector('#range'),
	rangeSpan = document.querySelector('.label-range span'),
	result = document.querySelector('.result span'),

	btnGen = document.querySelector('form div'),
	btnCopy = document.querySelector('.result button')


rangeSpan.innerText = range.value;
range.addEventListener("input", function() {
	rangeSpan.innerText = range.value;
});


let numbersChars = ['1','2','3','4','5','6','7','8','9','0']
	upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	symbolsChars = ['!', '@', '#', '$', '%', '?'];


function generatePass() {
	let passArr = [],
		finalPass = ''

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

	if (document.querySelectorAll('input[type="checkbox"]:not(:checked)').length == 4) {
		console.log ('bla')
	}

	const srotFunc = () => Math.random() - 0.5;
	const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

	passArr.sort(srotFunc);
	console.log(passArr)

	for (let i = 0; i < range.value; i++) {
        finalPass += passArr[randomInteger(0, passArr.length - 1)];
    }

	console.log(finalPass)
}

btnGen.addEventListener('click', generatePass);


