var dataArray =[5,11,18];
var dataDays = ['Mon','Wed','Fri'];

//var x = d3.scaleOrdinal()
//        .domain(dataDays)
//        .range([25, 85, 145]);

var x = d3.scaleBand()
        .domain(dataDays)
        .range([0, 170])
        .paddingInner(0.1176);


var xAxis = d3.axisBottom(x);

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");
svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
                .attr("height",function(d,i){return d*15;})
                .attr("width","50")
                .attr("fill","pink")
                .attr("x",function(d,i){return 60*i;})
                .attr("y",function(d,i){return 300-(d*15);});

svg.append("g")
        .attr("class","x axis hidden")
        .attr("transform","translate(0,300)")
        .call(xAxis);  

var newCenter = 300;
var lastRadio = 0;

svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
            .attr("class","first")
            .attr("cx",function(d,i){newCenter = newCenter + lastRadio + 20 + d*3;console.log(newCenter); lastRadio = d*3; return newCenter;}) 
            .attr("cy","100")
            .attr("r",function(d,i){return d*3;});

var newCenter = 300;
var lastRadio = 0;


svg.selectAll("ellipse.second")
    .data(dataArray)
    .enter().append("ellipse")
            .attr("class","second")
            .attr("cx",function(d,i){newCenter = newCenter + lastRadio + 20 + d*3;console.log(newCenter); lastRadio = d*3; return newCenter;}) 
            .attr("cy","250")
            .attr("rx",function(d,i){return d*3;})             
            .attr("ry",function(d,i){return d*3.8;});

svg.selectAll("line.third")
    .data(dataArray)
    .enter().append("line")
            .attr("class","third")
            .attr("x1","0") 
            .attr("y1",function(d,i){return 350 + i*20;})
            .attr("x2",function(d){return d*15;})             
            .attr("y2",function(d,i){return 350 + i*20;});


var textArray = ['start','middle','end'];

svg.append("text").selectAll("tspan")
        .data(textArray)
        .enter().append("tspan")
                .attr("x","100")
                .attr("y",function(d,i){return 450+i*40;})
                .attr("fill","none")
                .attr("stroke","blue")
                .attr("stroke-width","2")
                .attr("text-anchor","start")
                .attr("dominant-baseline","middle")
                .attr("font-size","30")
                .text(function(d){return d;});

svg.append("line")
        .attr("stroke","red")
        .attr("stroke","2px")
        .attr("x1","100")
        .attr("y1","450")
        .attr("x2","100")
        .attr("y2","530");
