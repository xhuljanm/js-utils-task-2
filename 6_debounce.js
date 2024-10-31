const debounce = (fn,  delay) => {
	let time = null;
	return (...args) => {
		clearTimeout(time);

		time = setTimeout(() => {
			fn(...args);
		}, delay);
	};
};

const start = Date.now();
const log = (...inputs) => console.log([Date.now() - start, inputs]);


//Example 1
const debouncedLog = debounce(log, 50);
const calls = [
	{ "t": 50, inputs: [1] },
	{ "t": 75, inputs: [2] },
];

calls.forEach(call => {
	setTimeout(() => {
		debouncedLog(call.inputs);
	}, call.t);
});

//Example 2
const debouncedLog2 = debounce(log, 20);
const calls2 = [
	{ "t": 50, inputs: [1] },
	{ "t": 100, inputs: [2] },
];

calls2.forEach(call => {
	setTimeout(() => {
		debouncedLog2(call.inputs);
	}, call.t);
});

//Example 3
const debouncedLog3 = debounce(log, 150);
const calls3 = [
	{ "t": 50, inputs: [1, 2] },
	{ "t": 300, inputs: [3, 4] },
	{ "t": 300, inputs: [5, 6] },
];

calls3.forEach(call => {
	setTimeout(() => {
		debouncedLog3(call.inputs);
	}, call.t);
});