var { Text, View, ListView } = React;
var LoadingView = require('./loading');

var ListViewFactory = function (CellView, url) {
  return {
    getInitialState: function () {
      return {
        dataSource: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        }),
        loaded: false
      };
    },
    componentDidMount: function () {
      this.fetchData();
    },
    fetchData: function () {
      fetch(Api(url))
        .then((response) => { return response.json() })
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData),
            loaded: true
          });
        })
        .done();
    },
    render: function () {
      if (!this.state.loaded) {
        return (<LoadingView />);
      } else {
        return this.renderList();
      }
    },
    renderList: function () {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderCell}
        />
      );
    },
    renderCell: function (data) {
      return (
        <CellView
          onSelect={() => this.selectCell(data)}
          data={data} />
      );
    },
    selectCell: function (data) {

    }
  };
};

module.exports = ListViewFactory;