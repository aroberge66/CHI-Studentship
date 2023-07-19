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

const todayGroups = todaySvg
	.selectAll("g")
	.data(todayData)
	.enter()
	.append("g")
	.attr("transform", (d, i) => {return "translate("+(i*36)+",0)"})
	
todayGroups
	.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 24)
	.attr("height", 140)
	.attr("class", "transparent")

todayGroups
	.append("rect")
	.attr("x", 0)
	.attr("y", (d, i) => { return 120 })
	.attr("width", 24)
	.attr("height", 0)
	.transition()
	.duration(1500)
	.delay((d, i) => {return i * 40})
	.ease(d3.easeCubicOut)
	.attr("y", (d, i) => { return 120 - barScale(d)})
	.attr("height", (d, i) => {return barScale(d)} )

todayGroups
	.append("text")
	.attr("x", 12)
	.attr("y", 140)
	.attr("class", "hours")
	.text((d, i) => {return i })

todayGroups
	.append("text")
	.attr("x", 12)
	.attr("y", (d,i)=> {return 110-barScale(d)})
	.attr("class", "steps")
	.text((d,i) => {return d})


























