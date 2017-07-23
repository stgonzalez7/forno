function getYear(a){return a.split("-")[2]}function update(){var a=d3.select("#updateButton").property("value"),t=new RegExp("^.*"+a+".*","gi");d3.csv("temperaturas-prueba.csv",function(a,e){(dataFiltered=e.filter(function(a){return String(a.fecha).match(t)})).forEach(function(a){a.fecha=a.fecha,a.maxima=+a.maxima,a.minima=+a.minima,a.year=getYear(a.fecha)}),maxTemp=d3.max(dataFiltered,function(a){return a.maxima}),minTemp=d3.min(dataFiltered,function(a){return a.maxima}),xRange.domain([d3.min(dataFiltered,function(a){return a.year}),d3.max(dataFiltered,function(a){return a.year})]),yRange.domain([d3.min(dataFiltered,function(a){return a.maxima}),d3.max(dataFiltered,function(a){return a.maxima})]),d3.select(".yAxis").attr("class","maximas").transition().duration(1e3).call(yAxis),d3.select(".xAxis").attr("class","maximas").transition().duration(1e3).call(xAxis),d3.select(".legend-top").text("Temperaturas máximas registradas en Zaragoza");var i=svg.selectAll("circle").data(dataFiltered);i.transition().duration(1e3).ease("linear").style("r",function(a){return a.maxima===maxTemp?10*Math.sqrt(a.maxima/Math.PI):a.maxima===minTemp?10*Math.sqrt(a.maxima/Math.PI):4*Math.sqrt(a.maxima/Math.PI)}).attr("cx",function(a){return xRange(a.year)}).attr("cy",function(a){return yRange(a.maxima)}),i.style("fill",function(a){return a.maxima===maxTemp?"#70284a":a.maxima===minTemp?"#045275":color(a.maxima)}),i.on("mouseover",function(a){div.transition(),div.style("opacity",1).html('<p class="tooltipYear">'+a.year+'<p/><p class="tooltipTemp">'+a.maxima+"º<p/>").style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(a){div.transition().duration(200).style("opacity",0)}),i.exit().remove()})}function updateMin(){var a=d3.select("#updateButtonMin").property("value"),t=new RegExp("^.*"+a+".*","gi");d3.csv("temperaturas-prueba.csv",function(a,e){(dataFiltered=e.filter(function(a){return String(a.fecha).match(t)})).forEach(function(a){a.fecha=a.fecha,a.maxima=+a.maxima,a.minima=+a.minima,a.year=getYear(a.fecha)}),maxTemp=d3.max(dataFiltered,function(a){return a.minima}),minTemp=d3.min(dataFiltered,function(a){return a.minima}),xRange.domain([d3.min(dataFiltered,function(a){return a.year}),d3.max(dataFiltered,function(a){return a.year})]),yRange.domain([d3.min(dataFiltered,function(a){return a.minima}),d3.max(dataFiltered,function(a){return a.minima})]);var i=d3.scale.linear().domain([0,25]).range(["#fcde9c","#e34f6f","#7c1d6f"]);d3.select(".yAxis").attr("class","minimas").transition().duration(1e3).call(yAxis),d3.select(".xAxis").attr("class","minimas").transition().duration(1e3).call(xAxis),d3.select(".legend-top").text("Temperaturas mínimas registradas en Zaragoza");var n=svg.selectAll("circle").data(dataFiltered);n.transition().duration(1e3).ease("linear").style("r",function(a){return a.minima===maxTemp?10*Math.sqrt(a.minima/Math.PI):a.minima===minTemp?10*Math.sqrt(a.minima/Math.PI):a.minima>=10?12:a.minima>=5?10:a.minima>=0?8:a.minima<=0?6:void 0}).attr("cx",function(a){return xRange(a.year)}).attr("cy",function(a){return yRange(a.minima)}),n.style("fill",function(a){return a.minima===maxTemp?"#70284a":a.minima===minTemp?"#045275":i(a.minima)}),n.on("mouseover",function(a){div.transition(),div.style("opacity",1).html('<p class="tooltipYear">'+a.year+'<p/><p class="tooltipTemp">'+a.minima+"º<p/>").style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(a){div.transition().duration(200).style("opacity",0)}),n.exit().remove()})}var dataFiltered,xRange,yRange,xAxis,yAxis,margin={top:50,right:50,bottom:50,left:110},width=1300-margin.left-margin.right,height=550-margin.top-margin.bottom;widthBar=width/62;var color=d3.scale.linear().domain([20,35]).range(["#fcde9c","#e34f6f","#7c1d6f"]),div=d3.select(".grafica-temp").append("div").attr("class","tooltip").style("opacity",0),svg=d3.select(".grafica-temp").append("svg").attr("width",width+margin.left+margin.right).attr("height",height+margin.top+margin.bottom).append("g").attr("transform","translate("+margin.left+","+margin.top+")"),xRange=d3.scale.linear().range([30,width]),yRange=d3.scale.linear().range([height,0]),xAxis=d3.svg.axis().scale(xRange).orient("bottom").innerTickSize(-height).outerTickSize(0).tickPadding(15).tickFormat(d3.format("d")).ticks(20),yAxis=d3.svg.axis().scale(yRange).orient("left").innerTickSize(-width).outerTickSize(0).tickPadding(15).ticks(6);d3.csv("temperaturas-prueba.csv",function(a,t){(dataFiltered=t.filter(function(a){return String(a.fecha).match(/01-06/)})).forEach(function(a){a.fecha=a.fecha,a.maxima=+a.maxima,a.minima=+a.minima,a.year=getYear(a.fecha)}),maxTemp=d3.max(dataFiltered,function(a){return a.maxima}),minTemp=d3.min(dataFiltered,function(a){return a.maxima}),xRange.domain([d3.min(dataFiltered,function(a){return a.year}),d3.max(dataFiltered,function(a){return a.year})]),yRange.domain([d3.min(dataFiltered,function(a){return a.maxima}),d3.max(dataFiltered,function(a){return a.maxima})]);d3.svg.line().x(function(a){return xRange(a.year)}).y(function(a){return yRange(a.maxima)}).interpolate("linear");svg.append("g").attr("class","xAxis").attr("transform","translate(0,450)").transition().duration(1e3).ease("linear").call(xAxis),svg.append("g").attr("class","yAxis").attr("transform","translate(30, 0)").transition().duration(1e3).ease("linear").call(yAxis),svg.append("text").attr("class","legend-top").attr("transform","rotate(0)").attr("y",-5).attr("x",375).style("text-anchor","end").text("Temperaturas máximas registradas en Zaragoza"),svg.selectAll("dot").data(dataFiltered).enter().append("circle").attr("class","circles").on("mouseover",function(a){div.transition(),div.style("opacity",1).html('<p class="tooltipYear">'+a.year+'<p/><p class="tooltipTemp">'+a.maxima+"º<p/>").style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(a){div.transition().duration(200).style("opacity",0)}).transition().duration(1e3).ease("linear").style("r",function(a){return a.maxima===maxTemp?10*Math.sqrt(a.maxima/Math.PI):a.maxima===minTemp?10*Math.sqrt(a.maxima/Math.PI):4*Math.sqrt(a.maxima/Math.PI)}).style("fill",function(a){return a.maxima===maxTemp?"#70284a":a.maxima===minTemp?"#045275":color(a.maxima)}).attr("cx",function(a){return xRange(a.year)}).attr("cy",function(a){return yRange(a.maxima)})});