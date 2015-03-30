var { StyleSheet, TabBarIOS, View } = React;
var TabBarItemIOS = TabBarIOS.Item;

var LoadingView = require('./common/loading');
var RepoView = require('./repo');
var FeedView = require('./feed');

var TabBarView = React.createClass({
  getInitialState: function(){
    return {
      selectedTab: 'feeds',
      loaded: false
    };
  },
  componentDidMount: function () {
    this.fetchData();
  },
  fetchData: function () {
    fetch(Api('user'))
      .then((response) => { return response.json() })
      .then((responseData) => {
        DataStore.user = responseData;
        this.setState({ loaded: true });
      })
      .done(() => {console.log(DataStore)});
  },
  render: function () {
    if (!this.state.loaded) {
      return (<LoadingView />);
    } else {
      return this.renderTabBarView();
    }
  },
  renderTabBarView: function() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>
        <TabBarItemIOS
          name="feeds"
          title="Feeds"
          icon={require('image!feeds')}
          selected={this.state.selectedTab === 'feeds'}
          onPress={() => {this.setState({ selectedTab: 'feeds' })}}>
          <FeedView />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="repos"
          title="Repos"
          icon={require('image!repos')}
          selected={this.state.selectedTab === 'repos'}
          onPress={() => {this.setState({ selectedTab: 'repos' })}}>
          <RepoView />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="inbox"
          title="Inbox"
          icon={require('image!notifications')}
          accessibilityLabel="Green Tab"
          selected={this.state.selectedTab === 'inbox'}
          onPress={() => {this.setState({ selectedTab: 'inbox' })}}>
          <View />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="settings"
          title="Settings"
          icon={require('image!settings')}
          accessibilityLabel="Green Tab"
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {this.setState({ selectedTab: 'settings' })}}>
          <View />
        </TabBarItemIOS>
      </TabBarIOS>
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

module.exports = TabBarView;
