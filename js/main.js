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

function postComment() {
	var item = document.getElementById('commentInput').value
	var text = document.createTextNode(item)
	var image = document.getElementById('imageInput')
	var newItem = document.createElement("p")
	newItem.appendChild(text)
	document.getElementById('commentList').appendChild(newItem)
}