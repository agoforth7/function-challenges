// 1. Write a function pickRandom(x) that returns a random value from input array x.

function pickRandom (x) {
	var random = x[Math.floor(Math.random() * x.length)];
	return random;
}

console.log(pickRandom([8, 21, 76, 5, 43, 97, 82, 11, 13, 80]));



// 2. Palindromes are words that are the same going forwards and backwards. Write a function isPalindrome(x) that returns true if x is a palindrome, otherwise false.

function isPalindrome (x) {
	var reverse = '';
	var reverseString = function (x) {
		for (var i = x.length - 1; i >= 0; i--) {
			reverse += x[i];
		}
		return reverse;
	}
	if (reverseString(x) === reverse) {
		return true;
	} else {
		return false;
	}
}

console.assert(isPalindrome('tacocat') === true);



// 3. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Write a function isIsogram(x) that determines whether x contains only letters and is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram (x) {
	var obj = letterCount(x);
	// console.log(obj);

	for (var prop in obj) {
		if (isNaN(prop) && obj[prop] === 1) {
			return true;
		} else {
			return false;
		}
	}
}

console.assert(isIsogram('ambidextrously') === true);
console.assert(isIsogram('parallelogram5') === false);



// 4. Write a function letterCount(x) that takes a string x and returns an object with the count of each letter that is in the string.

function letterCount (x) {
	x = x.toLowerCase();
	var object = {};
	var char;
	
	for (var i = 0; i < x.length; i++) {
		char = x[i];
		// As long as the character isn't a space
		if (char !== ' ') {
			// If we have encountered the character before
			if (object[char]) {
				// increment it
				object[char]++;
			} else {
				// set the property equal to 1
				object[char] = 1;
			}
		}
	}

	return object;
}

var orcas = letterCount('Orcas are good people');

console.log(orcas);




// 5. Write a function primes(n) which returns an array of the first n primes, where n is provided to the function as a parameter. Remember that the % operator (modulo) is your friend.

// function primes (n) {
// 	var i = 3;
// 	var newArray = [];
// 	while (newArray.length < n) {
// 		if (isPrime(i)) {
// 			newArray.push(i);
// 		}
// 		i++;
// 	}
// 	return newArray;
// }

// function isPrime(value) {
//     for(var i = 2; i < value; i++) {
//         if(value % i === 0) {
//             return false;
//         }
//     }
//     return value > 1;
// }

var primes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

// var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
var res = primes(15);

console.assert(res[0] === 2);
console.assert(res[1] === 3);
console.assert(res[2] === 5);
console.assert(res[3] === 7);
console.assert(res[4] === 11);

console.time('primes-test');

var x = primes(10000000);

console.timeEnd('primes-test');

// var range = [];

// for (var i = 0; i < 10; i++) {
// 	range[i] = i + 1;
// }

// console.log(range);