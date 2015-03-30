var { StyleSheet, NavigatorIOS } = React;

var FeedView = React.createClass({
  getInitialState: function(){
    return {
      token: 123123123
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
        component: require('./list/feedList'),
        title: 'Feeds'
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

module.exports = FeedView;