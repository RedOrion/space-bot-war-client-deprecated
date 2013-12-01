require.config({
    paths: {
        jquery          : 'js/jquery-2.0.3',
        jqueryUI        : 'js/jquery-ui-1.10.3.custom',
        underscore      : 'js/underscore',
        templates       : '../templates',
    },
    shim: {
        jqueryUI        : ['jquery'],
        underscore      : {
            exports     : '_',
        },
    }
});

requirejs(['jquery', 'game'], function($, Game) {

    if (typeof(window.serverUrl) == 'undefined') {
        window.url = window.location.protocol + '//' + window.server + '.spacebotwar.com';
    }
    else {
        window.url = window.serverUrl;
    }

    Game.init();
});

