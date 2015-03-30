/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet, NavigatorIOS, TabBarIOS } = React;
var TabBarItemIOS = TabBarIOS.Item;

var RepoView = require('./App/views/repo/Repo');
var FeedView = require('./App/views/feed/Feed');

var TabView = React.createClass({
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
        component: require('./App/views/Login'),
        title: 'Login'
      }
    } else {
      return {
        component: require('./App/views/repo/RepoList'),
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
          name="notifications"
          title="Notifications"
          icon={require('image!notifications')}
          accessibilityLabel="Green Tab"
          selected={this.state.selectedTab === 'notifications'}
          onPress={() => {this.setState({ selectedTab: 'notifications' })}}>
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

AppRegistry.registerComponent('gitrepo', () => TabView);


