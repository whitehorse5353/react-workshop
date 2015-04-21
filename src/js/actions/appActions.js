var React = require('react');
var AppConstants = require('../constants/appConstants');
var AppDispatcher = require('../dispatchers/appDispatcher');

var AppActions = {
    addItem: function (e) {
        AppDispatcher.addItem({
            type: AppConstants.ADD_ITEM,
            data: e
        });
    }
};

module.exports = AppActions;