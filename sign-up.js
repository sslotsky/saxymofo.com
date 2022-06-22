export function initialize() {
  customElements.define('sign-up',
    class extends HTMLElement {
      constructor() {
        super();
        const template = document
          .getElementById('sign-up')
          .content;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.cloneNode(true));
      }
    }
  );
}
