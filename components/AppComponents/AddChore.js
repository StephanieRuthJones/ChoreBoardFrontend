import React from 'react';
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

export default class NewChore extends React.Component {


    render() {
        return (
            <View style={styles.form}>
            <TextInput style={styles.textInput} placeholder="Title" placeholderTextColor= 'white'></TextInput>
            <TextInput style={styles.textInput} placeholder="Description" secureTextEntry={true} placeholderTextColor= 'white'></TextInput>
            <TextInput style={styles.textInput} placeholder="Star Value" placeholderTextColor= 'white'></TextInput>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 30,
        alignSelf: 'stretch',
        backgroundColor: '#7AA095',


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
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'white',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        paddingLeft: 10
    },
   
    button: {
        alignSelf: 'stretch',
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
      height: 55,
      width: 55
    },
});