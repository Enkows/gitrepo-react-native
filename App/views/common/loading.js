var { View, Text } = React;

var LoadingView = React.createClass({
  render: function() {
    return (
      <View style={Styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
});

module.exports = LoadingView;