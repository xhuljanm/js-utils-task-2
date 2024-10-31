const typeMap = {
	number: Number,
	string: String,
	boolean: Boolean,
    symbol: Symbol,
    bigint: BigInt,
}

const checkIfInstanceOf = (value, classType) => {
	if (value === null || value === undefined) return false; // null and undefined can't be instances

	switch(true) {
		case typeof value === 'object':
		case typeof value === 'function':
			return value instanceof classType; // For objects and functions we use instanceof
		default:
			return typeMap[typeof value] === classType;
	}
};


class Website {}

class Frontend extends  Website {} //For example 2


// Example 1
const func = () => checkIfInstanceOf(new Date(), Date);
console.log(func()); // Output: true


// Example 2
const func2 = () => checkIfInstanceOf(new Frontend(), Website);
console.log(func2()); // Output: true


// Example 3
const func3 = () => checkIfInstanceOf(Date, Date);
console.log(func3()); // Output: false


// Example 4
const func4 = () => checkIfInstanceOf(5, Number);
console.log(func4()); // Output: true


// Example 5
const func5 = () => checkIfInstanceOf(123n, BigInt);
console.log(func5()); // Output: true


// Example 6
const func6 = () => checkIfInstanceOf(false, Boolean);
console.log(func6()); // Output: true


// Example 7
const func7 = () => checkIfInstanceOf('random string', String);
console.log(func7()); // Output: true


// Example 8
const func8 = () => checkIfInstanceOf(Symbol('test'), Symbol);
console.log(func8()); // Output: true