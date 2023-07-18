// JavaScript Document
let monthData = [
  8429, 10345, 13505, 10222, 11102, 5721, 8091,
  18081, 9123, 3724, 11401, 12230, 8534, 16034,
  8429, 10345, 13505, 10222, 11102, 6721, 8091,
  18081, 9123, 9724, 27401, 12230, 6534, 16034,
]

let todayData = [
  51, 0, 0, 0, 0, 0, 0, 0,
  293, 352, 1782, 644, 328, 828, 905,
  371, 373, 440, 471, 1321, 769, 1660,
  663, 1329
]

const todaySvg = d3.select("svg.today")

const barScale = d3.scaleLinear()
	.domain([0, 2000])
	.range([1, 112])

todaySvg
	.selectAll("rect")
	.data(todayData)
	.enter()
	.append("rect")
	.attr("width", 24)
	.attr("y", (d, i) => { return 112 - barScale(d)})
	.attr("x", (d, i) => { return i * 36 })
	.attr("height", (d, i) => {return barScale(d)} )

todaySvg
	.selectAll("text")
	.data(todayData)
	.enter()
	.append("text")
	.attr("x", (d, i) => {return i * 36 + 12})
	.attr("y", 130)
	.text((d, i) => {return i })


const monthSvg = d3.select("svg.month")


todaySvg
	.selectAll("circle")
	.data(monthData)
	.enter()
	.append("circle")
	.attr("width", 24)
	.attr("y", (d, i) => { return 112 - barScale(d)})
	.attr("x", (d, i) => { return i * 36 })
	.attr("height", (d, i) => {return barScale(d)} )

todaySvg
	.selectAll("text")
	.data(todayData)
	.enter()
	.append("text")
	.attr("x", (d, i) => {return i * 36 + 12})
	.attr("y", 130)
	.text((d, i) => {return i })
























