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

export default class VerboseChore extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			chore: this.props.chore,
			roommate: this.props.roommate
		}
	}

	render() {
		return (
			<View>
				
				<Text>
					<Text style={styles.chores}>{this.state.chore.chore_name}: </Text>
					<Text style={styles.choreDescriptionText}>{this.state.chore.chore_description}</Text>
					{/* Insert all other chores here and also assign logic for CRUD functionality */}
				</Text>
				<TouchableOpacity>
					<Image
						style={styles.button}
						source={require('../../assets/images/box.png')}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	choreDescriptionText: {
		color: '#D4EFB0',
	},
	chores: {
		// textAlign: 'left',
		// margin: 10,
		flexDirection: 'row',
		color: '#D7F9F1',
		fontSize: 25,
		// lineHeight: 19,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	button: {
		height: 20,
		width: 20,
	},
});