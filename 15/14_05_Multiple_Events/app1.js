const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];


const container = document.querySelector('#boxes');

for(let color of colors){
	const box = document.createElement('div');
	box.classList.add('box');
	box.style.backgroundColor = color;
	container.appendChild(box);
	box.addEventListener('click', changeColor)

	// box.addEventListener('click', () =>{
	// 	h1 = document.querySelector('h1');
	// 	h1.style.color = color;
	// });
}



function changeColor(){
	console.log(this) // <div class="box" style="background-color: blue;"></div>
	h1 = document.querySelector('h1')
	h1.style.color = this.style.backgroundColor;
}