// JavaScript Document
//data vis on:
//1. load
//2. on change to first box
//3. on change to second box
//all will run the same code

const svg=d3.select("svg")
//this is setup functions
svg
	.attr("width", 960)
	.attr("height", 720)

const placeCities= function () {
	//this is upadated funtions
	console.log("hi there")
}


//on load
placeCities()

//select all delect boxes

const selectTags=document.querySelectorAll ("select")

selectTags.forEach((selectTag) => {
	selectTag.addEventListener("change", function () {
		placeCities()
	})
})











