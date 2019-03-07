import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class Form extends React.Component {


    render() {

        return (
            <View style={styles.form}>
                <Text style={styles.header}>Registration</Text>

                <TextInput style={styles.textInput} placeholder="Your Name" placeholderTextColor= 'white'></TextInput>
                <TextInput style={styles.textInput} placeholder="Your Email" placeholderTextColor= 'white'></TextInput>
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} placeholderTextColor= 'white'></TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#7AA095'

    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        marginBottom: 40,
        paddingBottom: 10,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'white',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
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
    }
});