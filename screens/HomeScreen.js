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

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    console.log("names", this.props.screenProps.households[0].name)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}
        backgroundColor= "#7AA095" contentContainerStyle={styles.contentContainer}>
        <View>
          <Image
            style={[styles.image]}
            source={
              require('../assets/images/logo.png')
            }/>
        </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.properNounText}>{this.props.screenProps.households[0].name}</Text>
            <View>{this.props.screenProps.households[0].roommates.map(roommate => {
              return <Roommate key={roommate.id} roommate={roommate}></Roommate>
            })}</View>


          </View>


        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View >
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7AA095',
  },
    image: {
      alignSelf: 'center',
      height: 55,
      width: 55
    },
  developmentModeText: {
    margin: 10,
    padding: 5,
    color: 'black',
    fontSize: 20,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },


  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  tabBarInfoContainer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // ...Platform.select({
    // ios: {
    //   shadowColor: 'black',
    //   shadowOffset: { height: -3 },
    //   shadowOpacity: 0.1,
    //   shadowRadius: 3,
    // },
    // }),
    alignItems: 'stretch',

    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },


  properNounText: {
    margin: 10,
    padding: 5,
    color: 'black',
    fontSize: 20,
    lineHeight: 19,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  title: {


    fontWeight: 'bold',
    color: '#7F7767',

  },
});


