class LessonLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", e => {
      e.preventDefault();
      Calendly.initPopupWidget({
        url: 'https://calendly.com/saxymofo/30min'
      });
    });
  }
}

export function initialize() {
  customElements.define('lesson-link', LessonLink, {
    extends: "a"
  })
}
