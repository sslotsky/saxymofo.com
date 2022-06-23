import {LitElement, css, html} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

class SignUp extends LitElement {
  static properties = {
    submitted: { state: true },
    submitting: { state: true },
  };

  static styles = css`
    form {
      display: grid;
      grid-gap: 0.75rem 0.25rem;
      font-family: 'Hind Siliguri', sans-serif;
      grid-template-areas:
        "title title"
        "fname lname"
        "email email"
        "submit submit"
    }

    form p.description {
      margin: 0;  
    }

    form input {
      padding: 0.25rem;
      border-radius: 5px; 
    }

    form .title {
      grid-area: title;
    }

    form h2 {
      margin-bottom: 0; 
    }

    form input[name="FNAME"] {
      grid-area: fname;
    }

    form input[name="LNAME"] {
      grid-area: lname;
    }

    form input[name="EMAIL"] {
      grid-area: email;
    }

    input:invalid {
      background: linear-gradient(to right, pink, lightgreen);
      background-size: 400% 400%;
      animation: gradient 5s ease infinite;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    input[type="submit"] {
      grid-area: submit;
    }
  `;

  constructor() {
    super();
    this.submitted = false;
    this.submitting = false;
  }

  submit(e) {
    e.preventDefault();
    this.submitting = true;
    const form = e.target;
    const data = new FormData(form);
    fetch(
      "https://gmail.us11.list-manage.com/subscribe/post-json?u=8e14ef99f88d9b5af62b51a92&amp;id=e6dafc7af4&c=?",
      { body: data, method: "POST", mode: 'no-cors' }
    ).then(() => {
      this.submitted = true;
      this.submitting = false;
    })
  }

  render() {
    const title = this.submitted ? "Thank you!" : "Get on the list";
    const message = this.submitted ? "Expect an update from us soon!" : "Sign up to get updates about upcoming shows";

    return html`
      <div id="mc_embed_signup">
        <form @submit="${this.submit}">
          <div class="title">
            <h2>${title}</h2>
            <p class="description">${message}</p>
          </div>
          <input ?readonly=${this.submitted} type="text" placeholder="First Name" name="FNAME" class="" id="mce-FNAME">
          <input ?readonly=${this.submitted} type="text" placeholder="Last Name" name="LNAME" class="" id="mce-LNAME">
          <input ?readonly=${this.submitted} type="email" placeholder="Email Address" name="EMAIL" required id="mce-EMAIL">
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8e14ef99f88d9b5af62b51a92_e6dafc7af4" tabindex="-1" value=""></div>
          <input ?disabled=${this.submitted || this.submitting} type="submit" value="Subscribe">
        </form>
      </div>
    `
  }
}

export const initialize = () => customElements.define('sign-up', SignUp);
