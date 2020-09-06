class Timer {
	constructor(durationInput, startButton, pauseButton) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		this.startButton.addEventListener('click', this.start);
	}

	start() {
		console.log('Time to start the timer!');
	}
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

// these two are identical
console.log(this);
const printThis = function() {
	console.log(this);
};
printThis.bind({ color: 'red' });

const colors = {
	printColor() {
		console.log(this); // color obj itself
	}
};
const randomObj = { a: 1 };

randomObj.printColor = colors.printColor;
colors.printColor();
randomObj.printColor();
