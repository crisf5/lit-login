import { LitElement, html, css, nothing } from "lit";

import { Router } from "@vaadin/router";

import "../components/alert-component.js";
import "../components/login-component.js";
import "../layouts/public-layout.js";

export class LoginPage extends LitElement {
  constructor() {
    super();
    this.alertType = "";
    this.alertMessage = "";
  }

  static get properties() {
    return {
      alertType: { type: String },
      alertMessage: { type: String },
    };
  }

  handleLoginSuccess(event) {
    this.alertType = "success";
    this.alertMessage = "Login correcto!";
    this.loginCorrect();
  }

  handleLoginError(event) {
    this.alertType = "error";
    this.alertMessage = "Username o password incorrecto, intente nuevamente.";
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("login-success", this.handleLoginSuccess.bind(this));
    this.addEventListener("login-error", this.handleLoginError.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener(
      "login-success",
      this.handleLoginSuccess.bind(this)
    );
    this.removeEventListener("login-error", this.handleLoginError.bind(this));
    super.disconnectedCallback();
  }

  loginCorrect() {
    setTimeout(() => {
      Router.go("/home");
    }, 1000);
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: auto;
      }

      alert-component {
        margin-top: 30px;
      }
    `,
  ];

  get _alerTemplate() {
    return html`
      ${this.alertType
        ? html`<alert-component
            .type=${this.alertType}
            .message=${this.alertMessage}
          ></alert-component>`
        : nothing}
    `;
  }

  render() {
    return html` <public-layout>
      <login-component></login-component>
      ${this._alerTemplate}
    </public-layout>`;
  }
}

customElements.define("login-page", LoginPage);
