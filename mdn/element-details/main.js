customElements.define('element-details',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('element-details-template');
      const templateContent = template.content;
      const shadow = this.attachShadow({mode: "open"});
      shadow.appendChild(templateContent.cloneNode(true));
    }
  }
);