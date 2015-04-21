/*** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');

var BaseComponent = React.createClass({
    getInitialState: function () {
        return {list: AppStore.getStoreList()};
    },
    updateLocalState: function () {
        this.setState({list: AppStore.getStoreList()});
    },
    componentDidMount: function () {
        AppStore.addEventListerner(this.updateLocalState);
    },
    addItem: function () {
        AppActions.addItem(this.refs.item.getDOMNode().value);
        this.refs.item.getDOMNode().value = '';
    },
    render: function () {
        var item = this.state.list.map(function (item) {
            return <li> {item} </li>;
        });
        return ( < form action='javascript:void(0)' onSubmit={this.addItem} >
            <input type='text' ref='item' />
            <ul>{item}</ul>
        </form >
        )
    }
});

module.exports = BaseComponent;