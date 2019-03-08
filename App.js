import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import Regform from './components/Regform'

const url = 'https://choreboardserver.herokuapp.com'

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        "id": 0,
        "name": "",
        "roommates": [{
          "id": 0,
          "name": "",
          "household_id": 0,
          "total_stars": 0,
          "chores": [{
            "id": 0,
            "chore_name": "",
            "chore_description": "",
            "star_value": 0,
            "household_id": 0,
            "roommate_id": 0,
            "timeInterval": ""
          }]
        }]
      }]
    }
  }

  fetchData = () => {
    return fetch(`${url}/households/fullHouse/all`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data })
        return data
      })
  }

  componentDidMount() {
    this.fetchData()
      .catch(err => console.error(err))
  }

  passChore = (paramRoommate_id, chores_id) => {
    let roommate_id = paramRoommate_id
    if (roommate_id === -1) {
      roommate_id = this.state.data[0].roommates.length - 1
    }
    let targetRoommate = roommate_id + 1
    if(targetRoommate === this.state.data[0].roommates.length){
      targetRoommate = 0
    }
    let tempStateObject = this.state.data[0].roommates[roommate_id].chores[chores_id]
    let newData = [...this.state.data]
    tempStateObject.roommate_id = newData[0].roommates[targetRoommate].id
    newData[0].roommates[roommate_id].chores = newData[0].roommates[roommate_id].chores.filter(element => element.id !== tempStateObject.id)
    newData[0].roommates[targetRoommate].chores = [...newData[0].roommates[targetRoommate].chores, tempStateObject]
    this.setState({
      data: newData
    })
    fetch(`${url}/chores/${tempStateObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempStateObject)
    })
  }

  addNewChore = (choreObject) => {
    //insert index finding logic here later
    let newData = [...this.state.data]
    newData[0].roommates[0].chores = [...newData[0].roommates[0].chores, choreObject]
    this.setState({data: newData})
    fetch(`${url}/chores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(choreObject)
    })
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Regform />
          <AppNavigator
            screenProps={{
              households: this.state.data,
              passChore: this.passChore,
              addNewChore: this.addNewChore
            }} />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#7F7767',
  },
});
