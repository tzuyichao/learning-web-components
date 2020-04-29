class WordCount extends HTMLParagraphElement {
    constructor() {
        super();
        function countWords(node) {
            const text = node.innerText || node.textContent;
            return text.split(/\s+/g).length;
        }
        const wcParent = this.parentNode;
        const count = `Words: ${countWords(wcParent)}`;
        const shadow = this.attachShadow({mode: 'open'});
        const text = document.createElement('span');
        text.textContent = count;
        shadow.appendChild(text);

        setInterval(function() {
            const count = `Words: ${countWords(wcParent)}`;
            text.textContent = count;
        }, 200)
    }
}
// console.log(customElements);
customElements.define('word-count', WordCount, { extends: 'p' });