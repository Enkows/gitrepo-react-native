var { StyleSheet, Text, View, ListView } = React;

var LoadingView = require('../../common/loading');

var DetailMenu = React.createClass({
  getInitialState: function () {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return {
      dataSource: dataSource.cloneWithRows(this.props.menus)
    }
  },
  render: function () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    )
  }
});

var RepoDetailView = React.createClass({
  getInitialState: function(){
    var repo = this.props.repo;
    var menus = ['Source', 'Events'];
    if (repo.has_issues) { menus.push('Issues'); }
    if (repo.has_wiki) { menus.push('Wiki'); }
    if (repo.has_pages) { menus.push('Pages'); }

    return {
      repo: repo,
      menus: menus
    };
  },
  render: function() {
    return (
      <View style={Styles.container}>
        <DetailMenu menus={this.state.menus} />
      </View>
    );
  }
});

module.exports = RepoDetailView;