require.config({
    paths: {
        jquery          : 'js/jquery-2.0.3',
        'jquery.bootstrap'       : 'js/bootstrap',
        jqueryUI        : 'js/jquery-ui-1.10.3.custom',
        underscore      : 'js/underscore',
        templates       : '../templates',
    },
    shim: {
        jqueryUI        : ['jquery'],
        "jquery.bootstrap" : {
            deps: ["jquery"]
        },
        underscore      : {
            exports     : '_',
        },
    }
});

requirejs(['jquery', 'game', 'jquery.bootstrap', 'game'], function($, Game) {

    if (typeof(window.serverUrl) == 'undefined') {
        window.url = window.location.protocol + '//' + window.server + '.spacebotwar.com';
    }
    else {
        window.url = window.serverUrl;
    }

    Game.init();
});

