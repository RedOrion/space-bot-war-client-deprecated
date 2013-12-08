define(['jquery','backbone','template','text!templates/user.tmpl'],
function($, Backbone, Template, TmplUser) {

    var ModelUser = Backbone.Model.extend({

        defaults: {
            username:   '',
            password    '',
            session     '',
        },

        initialize: function() {
        },
        
        clear: function() {
            this.destroy();
            this.view.remove();
        }
    });
    return ModelUser;
});


