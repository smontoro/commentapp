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
	//stores the input comment in the "comment" var
	var comment = document.getElementById('commentInput').value
	//stores the input that's stored in the "comment" var in the "text" var
	var text = document.createTextNode(comment)
	//creates a new p element to store the text in
	var newP = document.createElement("p")
	//stores the text in the p element
	newP.appendChild(text)
	//adds the new p element with its text to the .commentList div
	document.getElementById('commentList').appendChild(newP)


	//stores the input URL in the "image" var
	var image = document.getElementById("imgInput").value
	//creates a new img element
	var newImg = document.createElement("img")
	//attached the var image input URL to the new img tag
	newImg.setAttribute("src", image)
	//adds the new image to the comment div
	document.getElementById("commentList").appendChild(newImg)
}