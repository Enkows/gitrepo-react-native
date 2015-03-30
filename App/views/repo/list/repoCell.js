var { StyleSheet, Text, View, TouchableHighlight } = React;

var RepoCellView = React.createClass({
  render: function () {
    data = this.props.data;
    return (
      <TouchableHighlight onPress={this.props.onSelect} underlayColor={'#d2f5ff'}>
        <View style={Style.container}>
          <View style={Style.titleWrapper}>
            <Text style={Styles.anchor}>{data.full_name}</Text>
            <Text style={Style.desc} numberOfLines={2}>{data.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

});

var Style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2'
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  titleWrapper: {
    flex: 1,
    marginBottom: 5
  },
  desc: {
    fontSize: 12,
    color: '#666666'
  }
});

module.exports = RepoCellView;
