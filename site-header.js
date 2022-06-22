export function initialize() {
  customElements.define('site-header',
    class extends HTMLElement {
      constructor() {
        super();
        const template = document
          .getElementById('site-header')
          .content;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.cloneNode(true));
      }
    }
  );
}