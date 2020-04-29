class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        const img = document.createElement('img');
        img.src = "img/default.png";
        const text = document.createElement('span');
        text.textContent = 'Hello there!';

        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                position: relative;
            }
            img {
                width: 1.2rem;
            }
        `;

        shadow.appendChild(wrapper);
        shadow.appendChild(style);
        wrapper.appendChild(img)
        wrapper.appendChild(text);
    }
}

customElements.define('popup-info', PopUpInfo);
