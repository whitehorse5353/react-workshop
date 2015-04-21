var Dispatch = require('flux').Dispatcher;
var extend = require('react/lib/Object.assign');
var Dispatcher = new Dispatch();

var AppDispatcher = extend(Dispatcher, {
    addItem: function(pl){
        this.dispatch({
            type: pl.type,
            d: pl
        })
    }
});

module.exports = AppDispatcher;