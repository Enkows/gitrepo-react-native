var { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  navigator: {
    backgroundColor: '#EFEFEF'
  },
  row: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2'
  },
  paragraph: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  },
  anchor: {
    color: '#4183c4',
    fontWeight: 'bold'
  }
});

