define(['jquery', 'template', 'text!templates/game.tmpl'],
function($, Template, TmplGame) {
    function Game() {

        Template.loadStrings(TmplGame);

        this.init = function() {

            $('#sbw').html(Template.read.game_main_screen({
                foo     : 'bar'
            }));
        };
    }
    
    return new Game();
});

