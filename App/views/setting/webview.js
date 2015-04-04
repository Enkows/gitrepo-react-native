var { StyleSheet, WebView } = React;

var web = React.createClass({
  getInitialState: function() {
    return {
      url: 'https://www.baidu.com'
    };
  },
  onNavigationStateChange: function() {
  },
  render: function() {
    return (
      <WebView
        ref={'webview_ref'}
        automaticallyAdjustContentInset={false}
        onNavigationStateChange={this.onNavigationStateChange}
        url={this.state.url}
        startInLoadingState={true}
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

module.exports = web;
