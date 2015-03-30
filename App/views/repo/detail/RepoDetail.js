var React = require('react-native');
var { StyleSheet, Text, View, ListView } = React;

var RepoDetailView = React.createClass({
  getInitialState: function(){
    return {
      repo: {},
      loaded: false
    };
  },
  componentDidMount: function(){
    this.fetchData();
  },
  fetchData: function(){
    data = this.props.data;
    fetch(`https://api.github.com/repos/${data.full_name}/events`)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((responseData) => {
        this.setState({
          repo: responseData,
          loaded: true
        });
      })
      .done();
  },
  render: function() {
    if (!this.state.loaded) {
      return this.renderLoading();
    } else {
      return this.renderDetail();
    }
  },
  renderLoading: function () {
    return (
      <View style={Style.container}>
        <Text>Loading...</Text>
      </View>
    );
  },
  renderDetail: function () {
    return (
      <View style={Style.container}>
      </View>
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

});

module.exports = RepoDetailView;