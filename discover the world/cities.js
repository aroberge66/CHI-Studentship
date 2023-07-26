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
	
	let inputX = document.querySelector("select[name=valueX]")
	let inputY = document.querySelector("select[name=valueY]")
	
	
	let valueX= inputX.value
	let valueY= inputY.value
	
	// max value from the data
	let maxValueX= d3.max(data, (d,i) =>{ return d[valueX]})
	let maxValueY= d3.max(data, (d,i) =>{ return d[valueY]})
	let maxValueR= d3.max(data, (d,i)=> { return d.population})
	
	const scaleX = d3.scaleLinear()
		.domain([0, maxValueX])
		.range ([100, 860])
	
	const scaleY = d3.scaleLinear()
		.domain([0, maxValueY])
		.range([620, 100])
	
	const scaleR = d3.scaleSqrt()
		.domain([0, maxValueR])
		.range([0,30])
	
	
	
	const cities =svg	
		.selectAll("g.city")
		.data(data)
		.enter()
		.append("g")
		.attr("class", "city")
		.attr("transform", (d, i) => {
			const x= scaleX(d[valueX])
			const y=scaleY(d[valueY])
			return `translate(${x},${y})`
		})
	
	cities
		.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", 0)
		.transition()
		.attr("r", (d,i) =>{return scaleR(d.population)})
	
	svg
		.selectAll("g.city")
		.transition()
		.duration(500)
		.attr("transform", (d, i) => {
			const x= scaleX(d[valueX])
			const y=scaleY(d[valueY])
			return `translate(${x},${y})`
		})
	
	
	
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

























