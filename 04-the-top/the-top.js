// JavaScript Document
const svg= d3.select("svg")

//svg size
svg
.attr("viewBox", "0 0 960 8200")



//scale for data to be demonstrated
const scoreScale=d3.scaleLinear()
	.domain([0, 100])
	.range([420, 900])

const lineGeneratorM=d3.line()
	.x((d,i) => {return scoreScale(d)})
	.y((d,i) => {1000})



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
	.attr("x", (d,i)=>{return scoreScale(d.metascore)+5})
	.attr("y", 20)
	.attr("class", "metaT")
	.text((d,i) => {return d.metascore})

groups
	.append("path")
	.datum((d,i) =>{ return d.metascore})
	.attr("d", (d,i) =>{return lineGeneratorM(d)})



// actual imdb data displayed
groups	
	.append("circle")
	.attr("cx", (d,i)=>{return scoreScale(d.imdb)})
	.attr("cy", 20)
	.attr("r", 8)
	.attr("class", "imdb")

groups
	.append("text")
	.attr("x", (d,i)=>{return scoreScale(d.imdb)+5})
	.attr("y", 20)
	.attr("class", "imdbT")
	.text((d,i) => {return d.imdb})





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
			} else {
				return d3.descending(a.metascore, b.metascore)
			}
			
		})
		
	groups
		.data(data, (d,i)=>{return d.title})
		.transition()
		.duration(1000)
		.attr("transform", (d,i)=>{ return `translate(0,${i*40})`})
	})












