// JavaScript Document



const svg= d3.select("svg")

svg
	.attr("width", 800)
	.attr("height", data.length * 150)

const dataPoints=svg
	.selectAll("g.data-point")
	.data(data)
	.enter()
	.append("g")
	.attr("class", "data-point")
	.attr("transform", (d, i) => {return `translate{0, $(i * 150})`})

dataPoints
	.append("text")
	.attr("x", 175)
	.attr("y", 70)
	.attr("class", "city")
	.text((d, i) => {return d.city})
	.attr("transform", (d, i) => {
	const x = (i )
	const y = Math.floor(i *2) * 120	
	return `translate(${x},${y})`
	})

dataPoints
	.append("text")
	.attr("x", 175)
	.attr("y", 100)
	.attr("class", "country")
	.text((d, i) => {return d.country})
	.attr("transform", (d, i) => {
	const x = (i )
	const y = Math.floor(i *2) * 120	
	return `translate(${x},${y})`
	})


const months= dataPoints
	.append("g")
	.attr("class", "months")
	.attr("transform", "translate(200, 0)")
	
const monthGroups= months
	.selectAll("g.month")
	.data((d,i) => {return d.months})
	.enter()
	.append("g")
	.attr("class", "month")
	.attr("transform", (d, i) => {return `translate(${i *50},0)`})

monthGroups
		.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 40)
	.attr("height", 140)
	.style("fill", "red")
	







