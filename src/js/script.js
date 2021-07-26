let numbers = document.querySelector('#numbers'),
	upper = document.querySelector('#upper'),
	lower = document.querySelector('#lower'),
	symbols = document.querySelector('#symbols'),
	range = document.querySelector('#range'),
	rangeSpan = document.querySelector('.label-range span'),
	result = document.querySelector('.result span')


rangeSpan.innerText = range.value;
range.addEventListener("input", function() {
	rangeSpan.innerText = range.value;
});

// если все чекбоксы отключены, ставить два

let numbersChars = '1234567890'
	upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	lowerChars = 'abcdefghijklmnopqrstuvwxyz'
	symbols = '!"#$%&()*+,-./:;<=>?'

function charsetGeneration() {

}


function generate(length, charset) {
	let password = '';
	for(let i = 0; i < length; ++i){
		 password += charset[
				 Math.floor(
						 Math.random() * charset.length
				)
		];
	}
	result.innerText = password;
	return password;
}



generate(6, 'abcd123456');


//https://v3c.ru/javascript/generator-parolej
//https://htmler.ru/2014/02/13/generatsiya-parolya-javascript/
//https://snipp.ru/jquery/generate-password-js
//https://www.npmjs.com/package/password-generator