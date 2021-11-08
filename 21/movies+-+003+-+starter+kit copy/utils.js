
const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() =>{
			// func(arg1, arg2, arg3)
			func.apply(null, args);
		}, delay);
	};
}
