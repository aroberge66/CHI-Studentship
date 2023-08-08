// JavaScript Document
const svg= d3.select("svg")

data = data.map((d,i)=>{ 
	d.difference = d.imdb - d.metascore
	return d
})



//svg size
svg
.attr("viewBox", "0 0 960 8200")



//scale for data to be demonstrated
const scoreScale=d3.scaleLinear()
	.domain([0, 100])
	.range([420, 900])

//path for data

const area= d3.area()
	.x0((d,i)=>{return scoreScale(d.imdb)})
	.x1((d,i)=>{return scoreScale(d.metascore)})
	.y0((d,i)=>{return 40*i+20})
	.y1((d,i)=>{return 40*i+20})
	.curve(d3.curveCardinal.tension(.25))

const areaPath=svg
	.append("path")
	.datum(data)
	.attr("d", area)
	.attr("class", "area")


var imdbLine = d3.line()
  	.x((d,i)=>{return scoreScale(d.imdb)})
	.y((d,i)=>{return 40*i+20})
	.curve(d3.curveCardinal.tension(.25))

const imdbPath= svg
	.append("path")
	.datum(data)
	.attr("d", imdbLine)
	.attr("class", "imdb")

var metaLine = d3.line()
  	.x((d,i)=>{return scoreScale(d.metascore)})
	.y((d,i)=>{return 40*i+20})
	.curve(d3.curveCardinal.tension(.25))

const metaPath= svg
	.append("path")
	.datum(data)
	.attr("d", metaLine)
	.attr("class", "meta")



//datapoints
const groups= svg
	.selectAll("g.movie")
	.data(data)
	.enter()
	.append("g")
	.attr("class", "movie")
	.attr("transform", (d,i)=>{ return `translate(0,${i*40})`})


//title text
groups	
	.append("text")
	.attr("x", 90)
	.attr("y", 20)
	.attr("class", "title")
	.text((d,i) => {return d.title})

//year text
groups	
	.append("text")
	.attr("x", 24)
	.attr("y", 20)
	.attr("class", "year")
	.text((d,i) => {return d.year})

//make the hover highlight rect
groups
	.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 1200)
	.attr("height", 48)
					   
					   
					   
//actual metascore data displayed
groups	
	.append("circle")
	.attr("cx", (d,i)=>{return scoreScale(d.metascore)})
	.attr("cy", 20)
	.attr("r", 8)
	.attr("class", "meta")

groups
	.append("text")
	.attr("x", (d,i)=>{
		if (d.difference > 0) {
		return scoreScale(d.metascore)-15	
		} else {
			return scoreScale(d.metascore)+15
		}})
	.attr("y", 22)
	.attr("class", "meta")
	.text((d,i) => {return d.metascore})
	.style("text-anchor", (d,i) => {
		if(d.difference > 0) {
			return "end"
		} else {
			return "start"
		}
	})


// actual imdb data displayed
groups	
	.append("circle")
	.attr("cx", (d,i)=>{return scoreScale(d.imdb)})
	.attr("cy", 20)
	.attr("r", 8)
	.attr("class", "imdb")

groups
	.append("text")
		.attr("x", (d,i)=>{
		if (d.difference > 0) {
		return scoreScale(d.imdb)+15	
		} else {
			return scoreScale(d.imdb)-15
		}})
	.attr("y", 20)
	.attr("class", "imdb")
	.text((d,i) => {return d.imdb})
	.style("text-anchor", (d,i) => {
		if(d.difference > 0) {
			return "start"
		} else {
			return "end"
		}
	})







//code to change data display baswd on select
const selectTag=document.querySelector("select")

	selectTag.addEventListener("change", function () {
		data.sort((a,b)=>{
			if (this.value == "imdbD") {
				return d3.descending(a.imdb, b.imdb)
			} else if (this.value == "imdbA"){
				return d3. ascending(a.imdb, b.imdb)
			} else if (this.value == "yearA"){
				return d3. ascending(a.year, b.year)
			} else if (this.value == "yearD"){
				return d3. descending(a.year, b.year)
			} else if (this.value == "nameA"){
				return d3. ascending(a.title, b.title)
			} else if (this.value == "nameD"){
				return d3. descending(a.title, b.title)
			} else if (this.value == "metaA"){
				return d3. ascending(a.metascore, b.metascore)
			} else if (this.value =="difference") {
				return d3. descending(a.difference, b.difference)
			} else {
				return d3.descending(a.metascore, b.metascore)
			}
			
		})
		
	groups
		.data(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("transform", (d,i)=>{ return `translate(0,${i*40})`})
		
	imdbPath
		.datum(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("d", imdbLine)
		
	metaPath
		.datum(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("d", metaLine)
		
	areaPath
		.datum(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("d", area)
	})

	










