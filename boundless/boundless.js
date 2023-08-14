// JavaScript Document

let monthIndex = 0

const colors=[
	"var(--chrome)",
	"var(--ie)",
	"var(--firefox)",
	"var(--safari)",
	"var(--opera)",
	"var(--android)"
	
]


//select the svg
const svg=d3.select("svg")
	.attr("viewBox", "0 0 1000 1100")

//creates the area for the pei chart to live
const pieGroup= svg
	.append("g")
	.attr("transform", "translate(500,550)")
	
const monthLabel=d3.select("div.month")




//make the pie chart function
const updateGraph= function(){
	
	//adds the date to the top right corner to be auto changing
	const month = new Date(2009, monthIndex, 1)
	const formattedMonth= d3.timeFormat("%B %Y")(month)
	monthLabel.text(formattedMonth)
	
	
	//constant to reshape the data into an arc shape
	const pieGenerator=d3.pie()
		.sort(null)
		//.startAngle(-0.5*Math.PI)
		//.endAngle(1.5*Math.PI)
		
	
	//connects the data to the arc
	const arcData=pieGenerator(data[monthIndex])
	
	//generates the pie chart based on the pie data, which has to be arced
	const arcGenerator=d3.arc()
		//creates the radius/size of the arc
		.innerRadius(375)
		.outerRadius(500)
		//.cornerRadius(20)
		
	//creates the path for the data
	const paths = pieGroup
		.selectAll("path")
		.data(arcData)
		
	//enters the data path into svg
	paths
		.enter()
		.append("path")
		.attr("d", arcGenerator)
		.style("fill", (d,i)=>{return colors[i]})
		.each(function (d,i) {
		this.savedValue=d
	})
	
	
	paths
		.transition()
		.duration(500)
		.ease(d3.easeLinear)
		.attrTween("d", function(d,i){
			const startValue= this.savedValue
			const endValue=d
			const curve=d3.interpolate(startValue, endValue)
			
			this.savedValue=d
		
			return function(t){
				return arcGenerator(curve(t))
			}
	})
}




//loops the graph to change data automatically
let loop=null
const startLoop=function(){
	monthIndex= 0
	updateGraph()
	
	clearInterval(loop)
	loop=setInterval(function(){
		monthIndex=monthIndex+1
		
		if (monthIndex >= data.length){
				clearInterval(loop)
			}
		updateGraph()
	}, 500)
}





//updates the data to show
startLoop()

//selects the text box button to click
document.querySelector("a.restart").addEventListener("click", function(){
	startLoop()
	
})
	







