class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('span');
        const img = document.createElement('img');
        img.src = "img/default.png";
        const text = document.createElement('span');
        text.textContent = 'Hello there!';
        shadow.appendChild(wrapper);
        wrapper.appendChild(img)
        wrapper.appendChild(text);
    }
}

customElements.define('popup-info', PopUpInfo);
