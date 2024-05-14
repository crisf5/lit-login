import { LitElement, html, css } from "lit";

export class LoginComponent extends LitElement {
  constructor() {
    super();
    this.initProperties();
  }

  static get properties() {
    return {
      username: { type: String },
      password: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        border: 1px black solid;
        border-radius: 16px;
        padding: 18px;
      }

      button {
        margin: 5px 20px;
        padding: 8px;
        background-color: #ebe5ff;
        border: none;
        border-radius: 10px;
      }

      button:hover {
        background-color: #bea6ff;
      }
    `,
  ];

  initProperties() {
    this.username = "";
    this.password = "";
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.username == "cristian" && this.password == "lit") {
      this.dispatchCustomEvent("login-success", {
        username: this.username,
        password: this.password,
      });
      localStorage.setItem("authToken", this.tokenGenerator());
    } else {
      this.dispatchCustomEvent("login-error", {
        username: this.username,
        password: this.password,
      });
    }

    this.initProperties();
  }

  dispatchCustomEvent(eventName, detail) {
    const loginEvent = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(loginEvent);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  tokenGenerator(){
    return "ABC" + parseInt(Math.random() * 9999999);
  }

  render() {
    return html`
      <h1>Login</h1>
      <form @submit=${this.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          .value="${this.username}"
          @input=${this.handleInputChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          .value="${this.password}"
          @input=${this.handleInputChange}
          required
        />
        <button type="submit">Iniciar</button>
      </form>
    `;
  }
}
customElements.define("login-component", LoginComponent);
