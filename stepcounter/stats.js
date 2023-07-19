// JavaScript Document
const statsFormat =d3.format(",.0f")




d3.select("p.worst-day").text(statsFormat(d3.min(monthData)) + " Steps")
d3.select("p.average-day").text(statsFormat(d3.mean(monthData))+ " Steps")
d3.select("p.best-day").text(statsFormat(d3.max(monthData))+ " Steps")
d3.select("p.total-month").text(statsFormat(d3.sum(monthData)) + " Steps")
d3.select("p.total-today").text(statsFormat(d3.sum(todayData))+ " Steps")
d3.select("p.difference").text(statsFormat(d3.max(monthData)-d3.min(monthData))+" Steps")

