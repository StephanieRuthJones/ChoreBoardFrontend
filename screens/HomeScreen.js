import React from 'react';
import Roommate from "../components/AppComponents/Roommate.js"
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    console.log("names", this.props.screenProps.households[0].name)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
        <View>
          <Image
            style={[styles.image]}
            source={
              require('../assets/images/logo.png')
            }/>
        </View>
          <View>
            <Text style={styles.households}>{this.props.screenProps.households[0].name}</Text>
            <View style={styles.body}>{this.props.screenProps.households[0].roommates.map(roommate => {
              return <Roommate key={roommate.id} roommate={roommate}></Roommate>
            })}</View>
          </View>
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#7AA095',
  },
    image: {
      alignSelf: 'center',
      height: 55,
      width: 55
    },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  households: {
    margin: 10,
    paddingTop: 10,
    color: 'black',
    fontSize: 20,
    lineHeight: 19,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


