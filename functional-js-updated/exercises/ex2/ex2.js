
var output = console.log.bind(console)
var printIf = when(output)

function when(fn) {
	return function(predicate) {
		return function(...args) {
			if (predicate(...args)) {
				return fn(...args);
			}
		}
	}
}

function not(predicate) {
	return function negated(...args) {
		return !predicate(...args)
	}
}

function isShortEnough(str) {
	return str.length <= 5;
}


var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(not(isShortEnough))(msg1);
printIf(not(isShortEnough))(msg2);		// Hello World
