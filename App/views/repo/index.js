var { StyleSheet, NavigatorIOS } = React;

var RepoView = React.createClass({
  getInitialState: function(){
    return {
      token: 123123123,
      selectedTab: 'feeds'
    };
  },
  getInitialComponent: function() {
    if (!this.state.token) {
      return {
        component: require('../login'),
        title: 'Login'
      }
    } else {
      return {
        component: require('./list/repoList'),
        title: 'Repositories'
      }
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