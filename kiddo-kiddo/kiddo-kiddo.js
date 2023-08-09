// JavaScript Document

//connecting the form to d3/javascript
const formTag=document.querySelector("form")
const inputTag=formTag.querySelector("input")
const nameTag= d3.select("span.name")

//connecting js to the svg
const svg=d3.select("svg")

svg
	.attr("viewBox", "0 0 960 720")

//setting up the path
const pathsGroup = svg
	.append("g")
	.attr("class", "paths")



//y value/ number of people scale
const rankScale = d3.scaleLinear()
	.domain([1000, 1])
	.range([20, 500])

//year scale
const dateScale = d3.scaleLinear()
	.domain([1880, 2010])
	.range([80, 915])

//entering the axis
const rankAxis = d3.axisLeft(rankScale)
	.tickValues([1,5, 10, 25, 50, 75, 100, 250, 500, 750, 1000])

const dateAxis=d3.axisBottom(dateScale)
	.tickFormat((d,i)=>{return d+"'s'"})
	.tickPadding(5)





//setting up the axis values
const line=d3.line()
	.x((d,i) =>{return dateScale(1880 + 10 *i)})
	.y((d,i) =>{return rankScale(d)})
	.defined((d,i)=>{return d !=0})
	.curve(d3.curveCardinal.tension(0.1))


//actually inserting the axis
svg
	.append("g")
	.attr("class", "leftA")
	.attr("transform", "translate(60,0)")
	.call(rankAxis)
svg
	.append("g")
	.attr("class", "bottomA")
	.attr("transform", "translate(0,520)")
	.call(dateAxis)



//connecting the seachbox to each name
const search = function (name){
	let results = data.filter((d,i)=>{
		return d.name.toLowerCase() == name.toLowerCase()
	})
	
	if (results.length > 0) {
		nameTag.text(name)
	
	//connecting the path values to the svg
	const lines = pathsGroup
		.selectAll("path")
		.data(results, (d,i) =>{return d.name})
			
	lines
		.enter()
		.append("path")
		.attr("class", (d,i)=>{return d.sex})
		.attr("d", (d,i)=>{return line(d.rank)})
		
	lines
		.exit()
		.remove()
	
	
	
//summons alert for wrong name
	} else {
		alert(`No Reults for ${name}!`)
	}
		
	nameTag.text(name)
}

//runs
search("Kendall")


formTag.addEventListener("submit", function (event){
	event.preventDefault()
	
	search(inputTag.value)
	
	inputTag.value=""
})

















