// JavaScript Document

const monthSvg = d3.select("svg.month")

const circleScale = d3.scaleSqrt()
	.domain([0, 30000])
	.range([1, 50])

const colorScale = d3.scaleSqrt()
	.domain([100,30000])
	.range(["red", "blue"])

const monthGroups = monthSvg
	.selectAll("g")
	.data(monthData)
	.enter()
	.append("g")
	.attr("transform", (d, i) => {
	const x = (i % 7) * 125 + 60
	const y = Math.floor(i / 7) * 150 + 60	
	return `translate(${x},${y})`
	})

monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("r", circleScale(10000))
	.attr("class", "ring")

monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("r", circleScale(20000))
	.attr("class", "ring")


monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("r", 0)
	.attr("class", "actual")
	.transition()
	.duration(1500)
	.delay((d, i) => {return i * 40})
	.ease(d3.easeCubicOut)
	.attr("r", (d, i) => {return circleScale(d)} )

	//.attr("r", (d, i) => {return circleScale(d)} )
	//.attr("fill", (d, i) => { return colorScale(d) })


monthGroups
	.append("text")
	.attr("class", "day")
	.attr("x", 0)
	.attr("y", 70)
	.text((d, i) => {return i+1 })

monthGroups
	.append("text")
	.attr("class", "steps")
	.attr("x", 0)
	.attr("y", 70)
	.text((d, i) => {return d })




















