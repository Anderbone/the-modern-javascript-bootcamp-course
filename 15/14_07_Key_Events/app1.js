const foodInput = document.querySelector("#addItem")
foodInput.addEventListener('keypress', addItem)

const btn = document.querySelector("#addButton")
btn.addEventListener('click', addItem)

function addItem(e) {
	console.log(e, e.keyCode)
	if (e.key === "Enter" || e.type === "click") {
		const li = document.createElement("li")
		const foodInput = document.querySelector("#addItem")
		// li.appendChild(document.createTextNode(foodInput.value))
		li.innerText = foodInput.value
		const ul = document.querySelector("#items")
		ul.appendChild(li)
		foodInput.value = ''
	}
}