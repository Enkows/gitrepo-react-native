var { StyleSheet } = React;

var CellView = require('./feedCell');
var ListViewFactory = require('../../common/listView');

var ListViewObject = ListViewFactory(CellView, 'users/Enkows/received_events');

var FeedListView = React.createClass(Object.assign(ListViewObject, {}));

var Style = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333'
  }
});

module.exports = FeedListView;
