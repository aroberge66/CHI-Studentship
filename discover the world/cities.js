// JavaScript Document
//data vis on:
//1. load
//2. on change to first box
//3. on change to second box
//all will run the same code

const svg=d3.select("svg")
//this is setup functions
svg
	.attr("viewBox", "0 0 960 720")
	


const axisXGroup= svg
	.append("g")
	.attr("class", "x-axis")
	.attr("transform", "translate(0, 622)")

const axisXText= svg
	.append("text")
	.attr("class", "x-axis")
	.attr("transform", "translate(480,690)")
	.text("axis")

const axisYGroup= svg
	.append("g")
	.attr("class", "y-axis")
.attr("transform", "translate(100, 2)")
	
const axisYText= svg
	.append("text")
	.attr("class", "y-axis")
	.attr("transform", "translate(12,360) rotate(-90)")
	.text("axis")





const placeCities= function () {
	//this is upadated funtions
	
	let inputX = document.querySelector("select[name=valueX]")
	let inputY = document.querySelector("select[name=valueY]")
	
	
	let valueX= inputX.value
	let valueY= inputY.value
	
	//axis text/label
	let textX=inputX.options[inputX.selectedIndex].innerHTML
	let textY=inputY.options[inputY.selectedIndex].innerHTML
	
	axisXText.text(textX)
	axisYText.text(textY)
	
	
	// max value from the data
	let maxValueX= d3.max(data, (d,i) =>{ return d[valueX]})
	let maxValueY= d3.max(data, (d,i) =>{ return d[valueY]})
	let maxValueR= d3.max(data, (d,i)=> { return d.population})
	
	//scales
	const scaleX = d3.scaleLinear()
		.domain([0, maxValueX])
		.range ([100, 860])
	
	const scaleY = d3.scaleLinear()
		.domain([0, maxValueY])
		.range([620, 100])
	
	const scaleR = d3.scaleSqrt()
		.domain([0, maxValueR])
		.range([0,40])
	
	
	//axis and graph
	const axisX = d3.axisBottom(scaleX)
		.tickSizeInner(-520)
		.tickSizeOuter(0)
		.tickPadding(20)
		.ticks(15, "$,f")
	
		
	const axisY = d3.axisLeft(scaleY)
		.tickSizeInner(-800)
		.tickSizeOuter(0)
		.tickPadding(20)
		.ticks(15, "$,f")
	

	axisXGroup.call(axisX)
	axisYGroup.call(axisY)
	
	
	
	//inserting data
	const cities =svg	
		.selectAll("g.city")
		.data(data, (d,i)=>{return d.city})
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
		.attr("r", (d,i) =>{return scaleR(d.population)+5})
	
	svg
		.selectAll("g.city")
		.transition()
		.duration(500)
		.attr("transform", (d, i) => {
			const x= scaleX(d[valueX])
			const y=scaleY(d[valueY])
			return `translate(${x},${y})`
		})
	
	cities
		.append("rect")
		.attr("x", -60)
		.attr("y", (d,i) =>{return -1* scaleR(d.population)-35})
		.attr("width", 120)
		.attr("height", 30)
		.attr("trasnform", (d,i) => { 
			const x= scaleX(d[valueX])
			const y=scaleY(d[valueY])
			return `translate(${x},${y})`
		})
	
	cities
		.append("text")
		.attr("x", 0)
		.attr("y", (d,i) =>{return -1* scaleR(d.population)-15})
		.text((d,i) => {return d.city})
	
	svg
		.selectAll("g.city")
		.on("mouseover", function (){
			d3.select(this).raise()
		
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

























