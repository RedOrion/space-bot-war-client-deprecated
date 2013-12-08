define(['jquery','backbone','model/user'],
function($, Backbone, ModelUser) {
    var self;
    var ViewUser = Backbone.View.extend({
        el : 'body',

        initialize : function() {
            self = this;

            this.model = new ModelUser({
                message : "You are using backbone"
            });
        },
        events : {
            'click #example" : "promptUser"
        },

        render : function() {
            self.$el.find("#example").text("This is an example");
        },

        promptUser : function() {
            prompt("Amazing?", "Yes it is!");
        }
    });
    return new ViewUser();
});
