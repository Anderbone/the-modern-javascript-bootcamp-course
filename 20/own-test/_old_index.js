const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
		console.log('Time started');
	},
	onTick() {
		console.log('time ticked down');
	},
	onComplete() {
		console.log('time completed');
	}
});
