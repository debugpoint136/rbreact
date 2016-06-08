export default class SomeCustomChart {
    constructor(el, props) {
        this.el = el;
        this.props = props;
    }

    getColor() {
        return d3.scale.category20c();
    }

    create(data) {
        const width = 400;
        const height = 400;

        const color = this.getColor();

        const radius = Math.min(width, height) / 2;
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        const arc = d3.svg.arc()
            .outerRadius(radius - 10);

        const pie = d3.layout.pie()
            .sort(null)
            .value(d => { return d.value; });

        const svg = d3.select(this.el).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
                .attr("transform", `translate(${halfWidth}, ${halfHeight})`);

        const path = svg.selectAll("path")
            .data(pie(d3.entries(data)))
            .enter().append("path");

        path
            .attr("fill", (_d, i) => { return color(i); })
            .attr("d", arc);
    }

    update() {
        // We don't want to do anything with
        // updates in this instance.
    }
    unmount() {
        this.el.remove();
    }
}
