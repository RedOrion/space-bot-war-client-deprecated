define (['jquery', 'backbone'], function($, Backbone) {

    var Todo = Backbone.Model.extend({
        defaults : {
            title   :       '',
            completed :     false
        },
        init : function() {
            //alert("got here too "+this);
            console.log(this);
        }
    });
    var myTodo = new Todo({
        title : "Check attributes property of the logged models in the console.",
    });
    return myTodo;
});
        
//var Todo = Backbone.Model.extend({
//    defaults : {
//        title :         '',
//        completed :     false
//    }
//});
//
//var myTodo = new Todo({
//    title : "Check attributes property of the logged models in the console."
//});

