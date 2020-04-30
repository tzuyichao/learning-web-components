customElements.define('simple-custom', 
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({mode: 'open'});
      const divElem = document.createElement('div');
      const text = this.getAttribute('text');
      console.log(text);
      console.log(text === '');
      if(null === text) {
        divElem.textContent = 'DEFAULT';
      } else {
        divElem.textContent = text;
      }

      shadow.appendChild(divElem);
    }
  }
);