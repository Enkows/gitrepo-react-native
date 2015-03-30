var { StyleSheet, TabBarIOS } = React;
var TabBarItemIOS = TabBarIOS.Item;

var RepoView = require('./repo');
var FeedView = require('./feed');

var TabBarView = React.createClass({
  getInitialState: function(){
    return {
      token: 123123123,
      selectedTab: 'repos'
    };
  },
  getInitialComponent: function() {
    if (!this.state.token) {
      return {
        component: require('./login'),
        title: 'Login'
      }
    } else {
      return {
        component: require('./repo/repoList'),
        title: 'Repos'
      }
    }
  },
  render: function() {
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
          <RepoView />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="settings"
          title="Settings"
          icon={require('image!settings')}
          accessibilityLabel="Green Tab"
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {this.setState({ selectedTab: 'settings' })}}>
          <RepoView />
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
