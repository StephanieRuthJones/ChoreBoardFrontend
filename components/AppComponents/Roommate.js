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

export default class Roommate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            roommate: this.props.roommate
        }
    }

    render() {
        return (
            <View style={styles.getStartedContainer}>
                <Text key={this.state.roommate.id} style={styles.names}>{this.state.roommate.name}'s Chores</Text>
                {this.state.roommate.chores.map(chore => {
                    return <Text><Text style={styles.properNounText}>{chore.chore_name}: </Text> <Text style={styles.choreDescriptionText}>{chore.chore_description}</Text></Text>
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#D7F9F1',
    },

    names: {
        margin: 10,
        padding: 5,
        color: '#D7F9F1',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    properNounText: {
        margin: 10,
        padding: 5,
        color: '#D7F9F1',
        fontSize: 20,
        lineHeight: 19,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#D7F9F1',
    },
    choreDescriptionText: {
        color: '#7F7767',
    },

    title: {
        color: '#7F7767',
        fontWeight: 'bold',

    }
});