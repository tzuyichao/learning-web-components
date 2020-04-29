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

        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                position: relative;
            }
            .info {
                font-size: 0.8rem;
                width: 200px;
                display: inline-block;
                border: 1px solid black;
                padding: 10px;
                background: white;
                border-radius: 10px;
                opacity: 0;
                transition: 0.6s all;
                position: absolute;
                bottom: 20px;
                left: 10px;
                z-index: 3;
            }
            img {
                width: 1.2rem;
            }
            .icon:hover + .info, .icon:focus + .info {
                opacity: 1;
            }
        `;

        shadow.appendChild(wrapper);
        shadow.appendChild(style);
        wrapper.appendChild(img)
        wrapper.appendChild(text);
    }
}

customElements.define('popup-info', PopUpInfo);
