define(['jquery', 'template', 'text!templates/game.tmpl'],
function($, Template, TmplGame) {
    function Game() {

        Template.loadStrings(TmplGame);

        this.init = function() {
        };
    }
    
    return new Game();
});

