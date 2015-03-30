var { StyleSheet, Text, View, ListView } = React;

var CellView = require('./repoCell');
var DetailView = require('./../detail/repoDetail');

var ListViewFactory = require('../../common/listView');

var ListViewObject = ListViewFactory(CellView, 'users/Enkows/repos');

var RepoListView = React.createClass(Object.assign(ListViewObject, {
  selectCell: function(data){
    this.props.navigator.push({
      title: data.name,
      component: DetailView,
      passProps: {
        repo: data
      }
    });
  }
}));

module.exports = RepoListView;
