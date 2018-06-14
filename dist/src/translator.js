'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = jstranslator;
function jstranslator(str) {
	var translation = str;

	//si la palabra termina en ar se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	//si la palabra inicia con Z, se le aumenta pe al final
	if (str.toUpperCase().startsWith('Z')) {
		translation += 'pe';
	}

	//si la palabra tiene 10 o mas letras se debe partir a la mitad y unir con - en el medio
	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + ' - ' + secondHalf;
	}

	//si la palabra origiinal es un palindromo, ninguna regla anterior cuenta y se devuelve
	//la misma palabra intercalando mayusculas y minusculas
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return translation;
}