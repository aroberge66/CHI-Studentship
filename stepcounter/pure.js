//alert("hi")// JavaScript Document

//change text box to say hello{someone}
//pcik the text box
//const headerTag = document.querySelector("h1")

//then change the text
//headerTag.innerHTML = "Hello someone"

//then change the html tag to a background of red

//headerTag.style.backgroundColor = "var(--primary-orange)"

//font size bigger

//headerTag.style.fontSize = "64px"

// pick all of h1 tags
const headerTags = document.querySelectorAll("h1")


//make forEach loop
//headerTags.forEach(h1 => {
	//const hue = 360 * Math.random()
	//h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)"
//})

//pick each tag and label it with each tag's number, the index

headerTags.forEach((h1, index) => {
	h1.innerHTML = "This is tag number " + index
})

//select all of the rect tags and change their width

const rectTags = document.querySelectorAll("rect")
const data = [8, 12, 16, 88, 14, 108, 109, 44, 56, 2, 77, 85, 45, 24, 109, 3, 4, 88, 67, 89, 94, 13, 44, 66]


//rectTags.forEach((tag, i) => {
	// //tag.style.fill = "red"
	//const width = data[i]
	//tag.setAttribute("width", width +"px")
//})
const todaySvg = document.querySelector("svg")



data.forEach((d, i) => {
	//add a rect tag to todaySvg
	const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect")
	rectTag.setAttribute("x", i * 36)
	rectTag.setAttribute("y", 112-d)
	rectTag.setAttribute("width", "24")
	rectTag.setAttribute("height", d)
	
	todaySvg.append(rectTag)
})












