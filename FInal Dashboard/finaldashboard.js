// JavaScript Document
const svg= d3.select("svg")

data = data.map((d,i)=>{ 
	d.difference = d.publications - d.citations
	return d
})



//svg size
svg
.attr("viewBox", "0 0 960 800")



//scale for data to be demonstrated
const pubScale=d3.scaleLinear()
	.domain([0, 220])
	.range([500, 980])

const citeScale=d3.scaleLinear()
	.domain([0, 5000], [5000, 24500])
	.range([520, 900], [900, 980])

const hScale=d3.scaleLinear()
	.domain([0, 60])
	.range([540, 950])

citeScale.clamp(true);

pubScale.clamp(true);

hScale.clamp(true);

//path for data

const area= d3.area()
	.x0((d,i)=>{return pubScale(d.publications)})
	.x1((d,i)=>{return citeScale(d.citations)})
	.y0((d,i)=>{return 40*i+30})
	.y1((d,i)=>{return 40*i+30})
	.curve(d3.curveCardinal.tension(.25))

const areaPath=svg
	.append("path")
	.datum(data)
	.attr("d", area)
	.attr("class", "area")


const area1= d3.area()
	.x0((d,i)=>{return hScale(d.hIndex)})
	.x1((d,i)=>{return citeScale(d.citations)})
	.y0((d,i)=>{return 40*i+30})
	.y1((d,i)=>{return 40*i+30})
	.curve(d3.curveCardinal.tension(.25))

const AreaPath1=svg
	.append("path")
	.datum(data)
	.attr("d", area1)
	.attr("class", "area")


//the actual paths
var publicationsLine = d3.line()
  	.x((d,i)=>{return pubScale(d.publications)})
	.y((d,i)=>{return 40*i+30})
	.curve(d3.curveCardinal.tension(.25))

const publicationsPath= svg
	.append("path")
	.datum(data)
	.attr("d", publicationsLine)
	.attr("class", "publications")

var citationsLine = d3.line()
  	.x((d,i)=>{return citeScale(d.citations)})
	.y((d,i)=>{return 40*i+30})
	.curve(d3.curveCardinal.tension(.25))

const citationsPath= svg
	.append("path")
	.datum(data)
	.attr("d", citationsLine)
	.attr("class", "citations")

var hLine = d3.line()
  	.x((d,i)=>{return hScale(d.hIndex)})
	.y((d,i)=>{return 40*i+30})
	.curve(d3.curveCardinal.tension(.25))

const hPath= svg
	.append("path")
	.datum(data)
	.attr("d", hLine)
	.attr("class", "hIndex")


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
	.attr("x", 180)
	.attr("y", 30)
	.attr("class", "title")
	.text((d,i) => {return d.title})


// AppendLinkHere.appendChild(a)
// a.title = 'Well well ... 
// a.setAttribute('title', 'Well well that\'s a link');

//hIndex text
groups	
	.append("text")
	.attr("x", 12)
	.attr("y", 30)
	.attr("class", "hIndex")
	.text((d,i) => {return d.hIndex})

groups	
	.append("text")
	.attr("x", 64)
	.attr("y", 30)
	.attr("class", "publications")
	.text((d,i) => {return d.publications})

groups	
	.append("text")
	.attr("x", 120)
	.attr("y", 30)
	.attr("class", "citations")
	.text((d,i) => {return d.citations})

//make the hover highlight rect
groups
	.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 1200)
	.attr("height", 48)
					   
					   
					   
//actual citations data displayed
groups	
	.append("circle")
	.attr("cx", (d,i)=>{return citeScale(d.citations)})
	.attr("cy", 30)
	.attr("r", 8)
	.attr("class", "citations")

groups
	.append("text")
	.attr("x", (d,i)=>{
		if (d.difference > 0) {
		return citeScale(d.citations)	
		} else {
			return citeScale(d.citations)
		}})
	.attr("y", 47)
	.attr("class", "citations")
  	.attr("text-anchor", "middle")
  	.attr("dominant-baseline", "central")
	.style("font-size", "15px")
	.style("font-weight", "1200")
	.text((d,i) => {return d.citations})
	.style("text-anchor", (d,i) => {
		if(d.difference > 0) {
			return "end"
		} else {
			return "start"
		}
	})


// actual publications data displayed
groups	
	.append("circle")
	.attr("cx", (d,i)=>{return pubScale(d.publications)})
	.attr("cy", 30)
	.attr("r", 8)
	.attr("class", "publications")

groups
	.append("text")
		.attr("x", (d,i)=>{
		if (d.pubScale > d.citeScale) {
		return pubScale(d.publications)+10
		} else {
			return pubScale(d.publications)+10
		}})
	.attr("y", 18)
	.attr("class", "publications")
  	.attr("text-anchor", "middle")
  	.attr("dominant-baseline", "central")
	.style("font-size", "15px")
	.style("font-weight", "1200")
	.text((d,i) => {return d.publications})
	.style("text-anchor", (d,i) => {
		if(d.difference > 0) {
			return "start"
		} else {
			return "end"
		}
	})


groups	
	.append("circle")
	.attr("cx", (d,i)=>{return hScale(d.hIndex)})
	.attr("cy", 30)
	.attr("r", 8)
	.attr("class", "hIndex")

groups
	.append("text")
		.attr("x", (d,i)=>{
		if (d.hScale > d.citeScale) {
		return hScale(d.hIndex)+15	
		} else {
			return hScale(d.hIndex)-15
		}})
	.attr("y", 32)
	.attr("class", "hIndex")
  	.attr("text-anchor", "middle")
	.attr("dominant-baseline", "central")
	.style("font-size", "15px")
	.text((d,i) => {return d.hIndex})
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
			if (this.value == "publicationsD") {
				return d3.descending(a.publications, b.publications)
			} else if (this.value == "publicationsA"){
				return d3. ascending(a.publications, b.publications)
			} else if (this.value == "hIndexA"){
				return d3. ascending(a.hIndex, b.hIndex)
			} else if (this.value == "hIndexD"){
				return d3. descending(a.hIndex, b.hIndex)
			} else if (this.value == "nameA"){
				return d3. ascending(a.title, b.title)
			} else if (this.value == "nameD"){
				return d3. descending(a.title, b.title)
			} else if (this.value == "citationsA"){
				return d3. ascending(a.citations, b.citations)
			} else if (this.value =="difference") {
				return d3. descending(a.difference, b.difference)
			} else {
				return d3.descending(a.citations, b.citations)
			}
			
		})
		
	groups
		.data(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("transform", (d,i)=>{ return `translate(0,${i*40})`})
		
	publicationsPath
		.datum(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("d", publicationsLine)
		
	citationsPath
		.datum(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("d", citationsLine)
		
	hPath
		.datum(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("d", hLine)
		
	areaPath
		.datum(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("d", area)
		
	AreaPath1
		.datum(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("d", area1)
	})










