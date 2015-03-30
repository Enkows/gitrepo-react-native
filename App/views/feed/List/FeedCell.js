var { StyleSheet, Image, Text, View, TouchableHighlight } = React;

var FeedCellView = React.createClass({
  render: function () {
    var data = this.props.data;
    return (
      <View>
        <TouchableHighlight onPress={this.props.onSelect} underlayColor={'#d2f5ff'}>
          <View style={Styles.row}>
            <Image style={styles.avatar} source={{uri: data.actor.avatar_url}} />
            {this.detectEventType()}
          </View>
        </TouchableHighlight>
      </View>
    );
  },
  detectEventType: function () {
    var data = this.props.data;
    var renderFunc = this[`render${data.type}`];
    return renderFunc ? renderFunc(data) : (<Text>{data.type}</Text>);
  },
  renderIssueCommentEvent: function (data) {
    return (
      <View style={styles.textWrapper}>
        <View style={Styles.paragraph}>
          <Text style={Styles.anchor}>{data.actor.login}</Text>
          <Text style={styles.time}>{data.created_at}</Text>
        </View>
        <Text>
          Commented on pull request&nbsp;
          <Text style={Styles.anchor}>{`#${data.payload.issue.number}`}</Text>
          &nbsp;on&nbsp;
          <Text style={Styles.anchor}>{data.repo.name}</Text>
        </Text>
      </View>
    )
  },
  renderIssuesEvent: function (data) {
    return (
      <View style={styles.textWrapper}>
        <View style={Styles.paragraph}>
          <Text style={Styles.anchor}>{data.actor.login}</Text>
          <Text style={styles.time}>{data.created_at}</Text>
        </View>
        <Text>
          Opened issue&nbsp;
          <Text style={Styles.anchor}>{`#${data.payload.issue.number}`}</Text>
        &nbsp;on&nbsp;
          <Text style={Styles.anchor}>{data.repo.name}</Text>
        </Text>
      </View>
    )
  },
  renderPullRequestEvent: function (data) {
    return (
      <View style={styles.textWrapper}>
        <View style={Styles.paragraph}>
          <Text style={Styles.anchor}>{data.actor.login}</Text>
          <Text style={styles.time}>{data.created_at}</Text>
        </View>
        <Text>
          Opened pull request&nbsp;
          <Text style={Styles.anchor}>{`#${data.payload.pull_request.number}`}</Text>
        &nbsp;on&nbsp;
          <Text style={Styles.anchor}>{data.repo.name}</Text>
        </Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    marginRight: 8,
    backgroundColor: '#CCCCCC',
    borderRadius: 5
  },
  textWrapper: {
    flex: 1
  },
  time: {
    marginLeft: 8,
    fontSize: 11,
    color: '#666666'
  }
});

module.exports = FeedCellView;
