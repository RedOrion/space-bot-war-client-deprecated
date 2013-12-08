var Todo = Backbone.Model.extend({
    defaults : {
        title :         '',
        completed :     false
    }
});

var myTodo = new Todo({
    title : "Check attributes property of the logged models in the console."
});

