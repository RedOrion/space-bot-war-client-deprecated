define (['jquery', 'backbone'], function($, Backbone) {
    var self;
    Todo = Backbone.Model.extend({
        defaults : {
            title   :       '',
            completed :     false
        },
        initialize : function() {
            console.log('Got to initialize');
            self = this;
            console.log(self);
        },
        init : function() {
            //alert("got here too "+this);
            console.log(self);
        }
    });
    return new Todo({
        title : "Check attributes property of the logged models in the console.",
    });
});
