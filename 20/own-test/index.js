const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');

const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)

let duration;
const mytimer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset',
			perimeter * timeRemaining / duration - perimeter
		);
	},
	onComplete() {
		console.log("timer completed")
	}
});

// startButton.addEventListener('click', mytimer.clickStart());

startButton.addEventListener('click', mytimer.start);
pauseButton.addEventListener('click', mytimer.pause);