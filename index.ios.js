/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

global.React = require('react-native');
global.Styles = require('./app/views/common/styles');
global.Api = require('./app/utils/api');

var TabBarView = require('./app/views/tabBar.js');

React.AppRegistry.registerComponent('gitrepo', () => TabBarView);