//Exersize: Create a new div elemnent when the page is created

/*var newDiv = document.createElement('div')
var textHere = document.createTextNode('write our text here')
newDiv.appendChild(textHere)
var addHere = document.getElementById('addHere')
addHere.appendChild(newDiv)*/

/*var newh1 = document.createElement('h1')
var newImg = document.createElement('img')
newh1.className ='addedClass' 
var textHere= document.createTextNode('wazzzzzupppp')
newh1.appendChild(textHere)
newImg.setAttribute('src', 'https://c1.staticflickr.com/9/8115/8673546462_73b2df8cb3_b.jpg')
var addHere = document.getElementById('addHere')
addHere.appendChild(newh1)
addHere.appendChild(newImg)*/

function todoList() {
	var item = document.getElementById('todoInput').value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById('todoList').appendChild(newItem)

}