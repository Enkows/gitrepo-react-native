var { StyleSheet } = React;

var CellView = require('./feedCell');
var ListViewFactory = require('../../common/listView');

var ListViewObject = ListViewFactory(CellView, `users/${DataStore.user.login}/received_events`);

var FeedListView = React.createClass(Object.assign(ListViewObject, {}));

module.exports = FeedListView;
