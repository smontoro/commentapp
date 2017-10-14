function postComment() {

	//gets the date of the post
	var date = new Date()
	//stores the date in the text node
	dateText = document.createTextNode(date)
	//creates a new h4 element
	var pDate = document.createElement("p")
	//puts the date text in the element
	pDate.appendChild(dateText)
	//adds the date to the .commentList div
	document.getElementById('commentList').appendChild(pDate)

	//stores the input comment in the "comment" var
	var comment = document.getElementById('commentInput').value
	//stores the input that's stored in the "comment" var in the "text" var
	var text = document.createTextNode(comment)
	//creates a new p element to store the text in
	var articleTitle = document.createElement("h2")
	//stores the text in the p element
	articleTitle.appendChild(text)
	//adds the new p element with its text to the .commentList div
	document.getElementById('commentList').appendChild(articleTitle)


	//stores the input link in the "link" var
	var link = document.getElementById("linkInput").value
	//creates a link element
	var a = document.createElement("a")
	//adds the inputed link to the link element
	a.setAttribute("href", link)



	//stores the input URL in the "image" var
	var image = document.getElementById("imgInput").value
	//creates a new img element
	var newImg = document.createElement("img")
	//attached the var image input URL to the new img tag
	newImg.setAttribute("src", image)
	//adds style to the image
	newImg.className= "input-image"
	//adds the img tag inside of the link tag
	a.appendChild(newImg)
	//adds the new linked image to the comment div
	document.getElementById("commentList").appendChild(a)

}

















