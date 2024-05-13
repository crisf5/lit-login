import { Router } from "@vaadin/router";

export const AuthMixin = (SuperClass) =>
  class extends SuperClass {
    verificateUserLogin() {
      let token = localStorage.getItem("authToken");
      if (token == null || token == "") {
        Router.go("/login");
      }
    }
  };
