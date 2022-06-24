import {LitElement, css, html} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

class SiteHeader extends LitElement {
  static styles = css`
    header {
      text-align: center;
      width: 100%;
      display: grid;
      grid-template-columns: 25% 1fr 1fr;
      background-color: #fff;
      font-family: 'Hind Siliguri', sans-serif;
    }

    a {
      text-decoration: none;
    }

    h1 {
      font-size: 1.5rem;
    }

    nav {
      text-align: left;
      align-self: center;
    }

    nav a {
      margin-right: 1rem;
    }

    .logo {
      text-align: right;
    }
  `;

  render() {
    return html`
      <header>
        <div class="logo">
          <h1><a href="/">SaxyMofo</a></h1>
        </div>
        <div></div>
        <nav>
          <a href="/">Home</a>
          <a href="/">Shows</a>
          <a href="/">Videos</a>
          <a href="/">Lessons</a>
        </nav>
      </header>
    `
  }
}

export function initialize() {
  customElements.define('site-header', SiteHeader);
}