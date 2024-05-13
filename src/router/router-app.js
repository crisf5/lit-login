import { Router } from "@vaadin/router";
import { LitElement, html, css } from "lit";

import {AuthMixin} from "../mixins/auth-mixin.js"
import "../pages/home-page.js";
import "../pages/login-page.js";

export class RouterApp extends AuthMixin(LitElement) {
  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector("#outlet"));
    router.setRoutes([
      { path: "/", component: "login-page" },
      { path: "/login", component: "login-page" },
      { path: "/home", component: "home-page", action: this.verificateUserLogin },
    ]);
  }

  static styles = css`
    :host {
      width: 100%;
    }
  `;

  render() {
    return html` <div id="outlet"></div> `;
  }
}
customElements.define("router-app", RouterApp);
