import {Router} from '@vaadin/router';

export const AuthMixin = (SuperClass) => class extends SuperClass{

    verificateUserLogin(username, password){
        if(localStorage.getItem(username) != password){
            Router.go('/login')
        }
    }
    
};