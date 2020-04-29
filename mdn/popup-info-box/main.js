class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const img = document.createElement('img');
        img.src = "img/default.png";
        const text = document.createElement('span');
        text.textContent = 'Hello there!';
        shadow.appendChild(img);
        shadow.appendChild(text);
    }
}

customElements.define('popup-info', PopUpInfo);
