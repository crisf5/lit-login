import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";

import "@dile/dile-nav/dile-nav.js";
import "../layouts/auth-layout.js";

export class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        height: 100vh;
        width: 100%;
      }

      dile-nav {
        background-color: #1b358d;
      }

      dile-nav span {
        margin-right: 30px;
      }

      .logout {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: white;
        cursor: pointer;
      }

      .main {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 50px;
      }

      .footer {
        text-align: center;
        background-color: #e4e8e9;
        margin: 0;
        padding: 7px;
      }
    `,
  ];

  logout() {
    localStorage.removeItem("authToken");
    Router.go("/login");
  }

  get _headerTemplate() {
    return html`
      <dile-nav slot="header">
        <h2 slot="title">Aplicacion LIT</h2>
        <span slot="actions">
          <button class="logout" @click=${this.logout}>Logout</button>
        </span>
      </dile-nav>
    `;
  }

  get _mainTemplate() {
    return html`
      <div class="main" slot="main">
        <h1>✈ ☁ ☀</h1>
      </div>
    `;
  }

  get _footerTemplate() {
    return html`
      <p class="footer" slot="footer">
        Todos los derechos reservados &copy; 2024 <br />
        Cristian F.
      </p>
      ;
    `;
  }

  render() {
    return html`
      <auth-layout>
        ${this._headerTemplate} ${this._mainTemplate} ${this._footerTemplate}
      </auth-layout>
    `;
  }
}
customElements.define("home-page", HomePage);
