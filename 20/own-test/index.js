const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const duration = document.querySelector('#duration');

const mytimer = new Timer(duration, startButton, pauseButton, {
	onStart() {
		console.log("timer started");

	},
	onTick() {
		console.log("timer ticked")
		
	},
	onComplete() {
		console.log("timer completed")
	}
});

// startButton.addEventListener('click', mytimer.clickStart());

startButton.addEventListener('click', mytimer.start);
pauseButton.addEventListener('click', mytimer.pause)