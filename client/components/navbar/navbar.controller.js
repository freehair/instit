'use strict';

class NavbarController {
    //end-non-standard
    menu = [{
        'title': 'Home',
        'state': 'main'
    },{
        'title': 'Instit',
        'state': 'instit'
    },{
        'title': 'Ecole',
        'state': 'ecole'
    } ];

    isCollapsed = true;

    status = {
        "isopen":false
    };


    //start-non-standard
    constructor(Auth) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
    }

}

angular.module('institApp')
.controller('NavbarController', NavbarController);
