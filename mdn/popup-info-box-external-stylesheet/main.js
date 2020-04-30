class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        const img = document.createElement('img');
        img.src = "img/default.png";
        img.setAttribute('class', 'icon');
        const text = document.createElement('span');
        text.setAttribute('class', 'info');
        const dataText = this.getAttribute('data-text');
        text.textContent = dataText;
        
        const styleElem = document.createElement('link');
        styleElem.setAttribute('rel', 'stylesheet');
        styleElem.setAttribute('href', 'style.css');

        shadow.appendChild(wrapper);
        shadow.appendChild(styleElem);
        wrapper.appendChild(img)
        wrapper.appendChild(text);
    }
}

customElements.define('popup-info', PopUpInfo);
