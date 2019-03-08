import React from 'react';
import AddRoommate from "../components/AppComponents/AddRoommate.js"
import AddChore from "../components/AppComponents/AddChore.js"
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zip: ""
    }
  }
  

    render() {

        return (
            <View style={styles.container}>
              <Text style={styles.header}>
                <Image
                  style={[styles.image]}
                  source={
                    require('../assets/images/logo.png')
                  }/></Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Add Roommate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={AddChore}>
                  <Text style={styles.buttonText}>Add Chore</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignSelf: 'stretch',
        backgroundColor: '#7AA095',
    },
    button: {
      // alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#7F7767',
      marginTop: 30,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',

  },
  image: {
    alignSelf: 'center',
    paddingLeft: 20,
    height: 80,
    width: 80
  },
});