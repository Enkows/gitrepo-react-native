var { StyleSheet, NavigatorIOS } = React;

var FeedView = React.createClass({
  getInitialComponent: function() {
    return {
      component: require('./list/feedList'),
      title: 'Feeds'
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