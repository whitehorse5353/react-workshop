var Dispatch = require('flux').Dispatcher;
var extend = require('react/lib/Object.assign');
var EventEmit = require('events').EventEmitter;
var Dispatcher = new Dispatch();
var EventEmitter = new EventEmit();
var AppConstants = require('../constants/appConstants');
var AppDipatcher = require('../dispatchers/appDispatcher');

var storeList = [];

var Store = extend(EventEmitter, {
    emitChanges: function () {
        this.emit(AppConstants.CHANGE);
    },
    _addItemsToList: function(d){
        storeList.push(d.data);
    },
    getStoreList: function(){
        return storeList;
    },
    addEventListerner: function(cb){
        this.on(AppConstants.CHANGE, cb);
    }
});


AppDipatcher.register(function (pl) {

    if(pl.type === AppConstants.ADD_ITEM){
        Store._addItemsToList(pl.d);
    }

    Store.emitChanges();
    return true;
});

module.exports = Store;
