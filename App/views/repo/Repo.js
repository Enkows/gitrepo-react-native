var React = require('react-native');
var { StyleSheet, NavigatorIOS } = React;

var RepoView = React.createClass({
  getInitialState: function(){
    return {
      token: 123123123,
      selectedTab: 'feeds',
      notifCount: 0,
      presses: 0
    };
  },
  getInitialComponent: function() {
    if (!this.state.token) {
      return {
        component: require('../Login'),
        title: 'Login'
      }
    } else {
      return {
        component: require('./RepoList'),
        title: 'Repos'
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