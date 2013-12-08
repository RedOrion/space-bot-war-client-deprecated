
require.config({
    paths: {
        jquery              : 'js/jquery-2.0.3.min',
        'jquery.bootstrap'  : 'js/bootstrap',
        'jquery.json'       : 'js/jquery.json.min',
        jqueryUI            : 'js/jquery-ui-1.10.3.custom',
        underscore          : 'js/underscore',
        backbone            : 'js/backbone-min',
        templates           : '../templates',
        humane              : 'js/humane.min'
    },
    shim: {
        jqueryUI            : ['jquery'],
        "jquery.bootstrap"  : {
            deps            : ["jquery"]
        },
        "jquery.json"       : {
            deps            : ["jquery"]
        },
        underscore      : {
            exports     : '_'
        },
        backbone        : {
            deps            : ['underscore', 'jquery'],
            exports         : 'Backbone'
        }
    }
});


requirejs(['jquery', 'game', 'humane', 'jquery.json', 'jquery.bootstrap'], function($, Game, Humane, Json) {

    if (typeof(window.serverUrl) == 'undefined') {
        window.url = window.location.protocol + '//' + window.server + '.spacebotwar.com';
    }
    else {
        window.url = window.serverUrl;
    }
    Game.init();
});

