import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class FormsScreen extends React.Component {
  static navigationOptions = {
    title: 'Forms',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#7AA095',
  },
});
