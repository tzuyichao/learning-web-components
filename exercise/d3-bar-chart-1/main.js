customElements.define("d3-bar-chart", 
    class extends HTMLElement {
        constructor() {
            super();
            const data=[
                {x:1, w:Math.floor(Math.random()*200)},
                {x:2, w:Math.floor(Math.random()*200)},
                {x:3, w:Math.floor(Math.random()*200)},
                {x:4, w:Math.floor(Math.random()*200)},
                {x:5, w:Math.floor(Math.random()*200)},
              ];
            const shadow = this.attachShadow({mode: "open"});
            const container = document.createElement("div");
            const svg = d3.select(container)
                          .append("svg")
                          .attr({
                              "width": 300,
                              "height": 300
                          });
            svg.selectAll('rect')
               .data(data)
               .enter()
               .append("rect")
               .attr({
                'fill':'#09c',
                'width':function(d){
                  return d.w;
                },
                'height':30,
                'x':0,
                'y':function(d){
                  return (d.x-1) * 35;
                }
               });
            svg.selectAll('text')
               .data(data)
               .enter()
               .append('text')
               .text(function(d) {
                   return d.w;
               })
               .attr({
                   'fill': '#000',
                   'x': function(d) {
                       return d.w+3;
                   },
                   'y': function(d) {
                       return d.x * 35 - 12;
                   }
               });
            shadow.appendChild(container);
        }
    }
);
// reference: https://www.oxxostudio.tw/articles/201509/svg-d3-19-bar-chart.html