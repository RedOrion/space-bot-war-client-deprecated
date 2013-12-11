
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


requirejs(['jquery', 'todo', 'humane', 'jquery.json', 'jquery.bootstrap'], function($, Todo, Humane, Json) {

    window.url = window.serverUrl;
    Todo.init();
});

