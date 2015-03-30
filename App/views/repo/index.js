var { StyleSheet, NavigatorIOS } = React;

var RepoView = React.createClass({
  getInitialState: function(){
    return {
      selectedTab: 'feeds'
    };
  },
  getInitialComponent: function() {
    return {
      component: require('./list/repoList'),
      title: 'Repositories'
    }
  },
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={this.getInitialComponent()}
        style={Style.container}
        itemWrapperStyle={Style.navigator}
      />
    );
  }
});

var Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  navigator: {
    backgroundColor: '#EFEFEF'
  }
});

module.exports = RepoView;