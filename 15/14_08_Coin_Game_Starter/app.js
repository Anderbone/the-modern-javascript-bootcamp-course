function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const player = document.querySelector('#player');
const coin = document.querySelector('#coin')

function randomCoin(){
	coin.style.left = Math.random() * window.innerWidth + 'px';
	coin.style.top = Math.random() * window.innerHeight + 'px';
}

window.addEventListener('keyup', function(e) {
	if (e.key === 'ArrowDown') {
		player.style.top = extractPos(player.style.top) + 50 + 'px'
	}
	else if (e.key === 'ArrowUp') {
		player.style.top = extractPos(player.style.top) - 50 + 'px'
	}
	else if (e.key === 'ArrowLeft') {
		player.style.left = extractPos(player.style.left) - 50 + 'px'
	}
	else if (e.key === 'ArrowRight') {
		console.log(player.style.right)
		player.style.left = extractPos(player.style.left) + 50 + 'px'
	}

	if (isTouching(coin, player)){
		console.log("touched?")
		randomCoin();
	}
})

const extractPos = (pos) => {
	if (!pos) {return 0}
	return parseInt(pos.slice(0, -2))
}
