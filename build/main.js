let body = d3.select('body');
let svgWidth = 600;
let svgHeight = 600;
let svg = body.append('svg').attr('width', svgWidth).attr('height', svgHeight)
    .attr('id', 'svgMain');

let data = d3.json('data.json').then(function (data) {
    svg.selectAll('circle').data(data).enter()
        .append('circle')
        /*
        .attr('cx', function (d, i) {
            return i * 50 + 20;
        })
        */
        .attr('cx', d => d.x * 5)
        .attr('cy', d => d.y * 5)
        .attr('fill', d => d.color)
        .attr('r', d => d.value);
})

console.log(circles);