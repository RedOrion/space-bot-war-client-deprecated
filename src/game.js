define(['jquery', 'template', 'text!templates/game.tmpl'],
function($, Template, TmplGame) {
    function Game() {

        Template.loadStrings(TmplGame);

        this.init = function() {

            $('#sbw').html(Template.read.game_main_screen({
                foo     : 'bar'
            }));

            // Make a connection to the lobby

            var ws = new WebSocket("ws://localhost:5000/ws/game/lobby");

            ws.onerror = function(e) {
                alert('cannot connect '+e);
            };

            ws.onopen = function() {
                alert('connected');
            };

            ws.onmessage = function(e) {
                var data = $.evalJSON(e.data);
                var type = data.type;
                var content = data.content;

                alert(e.data);
            };
        };
    }
    
    return new Game();
});

