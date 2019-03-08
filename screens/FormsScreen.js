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
  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      ifRoommateForm: false,
      ifChoreForm: false,
<<<<<<< HEAD
      ifEditForm: false
=======
      newRoommate: null
>>>>>>> 018c8f35b801dfb99094784b7ea1a16b88f42984
    }
  }

  dropRoommateForm = () => {
    this.setState({
      ifRoommateForm: !this.state.ifRoommateForm
    })
  }

  dropChoreForm = () => {
    this.setState({
      ifChoreForm: !this.state.ifChoreForm
    })
  }

<<<<<<< HEAD
  dropEditForm = () => {
    this.setState({
      ifEditForm: !this.state.ifEditForm
    })
  }

=======

  handleName = (text) => {
    console.log('text', text)
    this.setState({
      newRoommate: text
    })
  }

  onPress = (newRoommate) => {
    this.setState({
      roommates: [...this.state.roommates, this.state.newRoommate]
    })
    console.log('button')
  }
>>>>>>> 018c8f35b801dfb99094784b7ea1a16b88f42984
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          <Image
            style={[styles.image]}
            source={
              require('../assets/images/logo.png')
            } />Add More</Text>


        <TouchableOpacity style={styles.button}
          onPress={this.dropRoommateForm}>
          <Text style={styles.buttonText}>Add Roommate</Text>
          {this.state.ifRoommateForm ? <View style={styles.form}>
            <TextInput style={styles.textInput} placeholder="Roommate Name" placeholderTextColor='white' onChangeText={this.handleName}></TextInput>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this.onPress} >Submit</Text>
            </TouchableOpacity>
          </View> : null}
        </TouchableOpacity>



        <TouchableOpacity style={styles.button} onPress={this.dropChoreForm}>
          <Text style={styles.buttonText}>Add Chore</Text>
          {this.state.ifChoreForm ? <View style={styles.form}>
            <TextInput style={styles.textInput} placeholder="Chore Title" placeholderTextColor='white'></TextInput>
            <TextInput style={styles.textInput} placeholder="Chore Description" placeholderTextColor='white'></TextInput>
            <TextInput style={styles.textInput} placeholder="Star Value" placeholderTextColor='white'></TextInput>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.dropEditForm}>
        <Text style={styles.buttonText}>Edit A Chore</Text>
        {this.state.ifEditForm ? <View style={styles.form}>
        <TextInput style={styles.textInput} placeholder="Chore Title" placeholderTextColor='white'></TextInput>
        <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View> : null} 
        </TouchableOpacity>
      </View >

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
  header: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingBottom: 10,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    paddingLeft: 10
  },
  textInput: {
    paddingTop: 10,
    textAlign: 'center'
  } 
});