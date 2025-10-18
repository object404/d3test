let body = d3.select('body');
let svgWidth = 600;
let svgHeight = 600;
let svg = body.append('svg').attr('width', svgWidth).attr('height', svgHeight)
    .attr('id', 'svgMain');

let data = d3.json('data.json').then(function (data) {
    svg.selectAll('circle').data(data).enter().append('circle')
        /*
        .attr('cx', function (d, i) => i * 50 + 20})
        */
        .attr('cx', d => d.x * 5)
        .attr('cy', d => d.y * 5)
        .attr('fill', d => d.color)
        .attr('r', d => d.value);

        svg.selectAll('text').data(data).enter().append('text')
        .attr('x', d => d.x * 5)
        .attr('y', d => d.y * 5)
        .text(d => d.color)
        .attr('font-face', 'Arial, Helvetica, sans-serif')
})

console.log(svg);