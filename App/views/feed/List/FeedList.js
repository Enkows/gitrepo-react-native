var React = require('react-native');
var { StyleSheet, Text, View, ListView } = React;

var CellView = require('./FeedCell');

var FeedListView = React.createClass({
  getInitialState: function(){
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loaded: false
    };
  },
  componentDidMount: function(){
    this.fetchData();
  },
  fetchData: function(){
    fetch('https://api.github.com/users/Enkows/received_events')
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true
        });
      })
      .done();
  },
  render: function() {
    if (!this.state.loaded) {
      return this.renderLoading();
    } else {
      return this.renderList();
    }
  },
  renderLoading: function () {
    return (
      <View style={Style.container}>
        <Text style={Style.loadingText}>
          Loading...
        </Text>
      </View>
    );
  },
  renderList: function () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCell}
        style={Style.listView}
      />
    );
  },
  renderCell: function (data) {
    return (
      <CellView data={data} />
    );
  }
});

var Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333'
  }
});

module.exports = FeedListView;
