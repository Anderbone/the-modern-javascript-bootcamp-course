class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks
	) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		if(callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			// this.onPause = callbacks.onPause;
			this.onComplete = callbacks.onComplete;
		}
	}

	start = () => {
		// this.tick(); // will start within 1 second
		if (this.onStart){
			this.onStart(this.timeRemaining);
		}
		this.interval = setInterval(this.tick, 50);

	}

	pause = () => {
		clearInterval(this.interval);
	}

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if(this.onComplete){
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.05;
			if(this.onTick){
				this.onTick(this.timeRemaining);
			}
		}
	}

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(timeRemaining) {
		this.durationInput.value = timeRemaining.toFixed(2);
	}


}