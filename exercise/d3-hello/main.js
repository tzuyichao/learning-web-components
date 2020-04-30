customElements.define('d3-hello', 
    class extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({mode: 'open'});
            const container = document.createElement('div');
            const hello = d3.select(container)
                            .append('span')
                            .style("color", "white")
                            .style("background-color", "black")
                            .html("Hello, world!")
                            .node();
            console.log(hello);
            console.log(container);
            shadow.appendChild(container);
        }
    }
);