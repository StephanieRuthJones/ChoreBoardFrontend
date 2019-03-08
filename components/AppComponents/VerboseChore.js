import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
		Text,
		TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class VerboseChore extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			chore: this.props.chore,
			roommate: this.props.roommate,
			editBOOL: false,
			editTitle: "",
			editDesc: "",
			editStars: 0,
			editInterval: ""
		}
	}

	toggleEdit = () => {
		this.setState({
			editBOOL: !this.state.editBOOL
		})
	}

	updateChore = () => {
		let newObject = {
			chore_name: this.state.editTitle,
			chore_description: this.state.editDesc,
			star_value: this.state.editStars,
			timeInterval: this.state.editInterval,
			household_id: 0,
			roommate_id: 0
		}
		this.props.addNewChore(newObject)
	}

	render() {
		return (
			<View style={styles.editForm}>
				{this.state.editBOOL ?
					<View>
						<Text>Title: </Text><TextInput onChangeText={(value) => this.setState({editTitle: value})} defaultValue={this.state.chore.chore_name}></TextInput>
						<Text>Description: </Text><TextInput onChangeText={(value) => this.setState({editDesc: value})} defaultValue={this.state.chore.chore_description}>{this.state.chore.chore_description}</TextInput>
						<Text>Stars: </Text><TextInput onChangeText={(value) => this.setState({editStars: Number(value)})} defaultValue={(this.state.chore.star_value).toString()}></TextInput>
						<Text>Time Interval:</Text><TextInput onChangeText={(value) => this.setState({editInterval: value})} defaultValue={this.state.chore.timeInterval}></TextInput>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText} onPress={this.updateChore}>Submit</Text>
						</TouchableOpacity>
					</View>
					:
					<View>
						<Text>
							<Text style={styles.chores}>Title: {this.state.chore.chore_name}: </Text>
							<Text style={styles.choreDescriptionText}>Description: {this.state.chore.chore_description}</Text>
							<Text style={styles.choreStarValue}>Stars: {this.state.chore.star_value}</Text>
							<Text style={styles.choreTime}>Time Interval: {this.state.chore.timeInterval}</Text>
						</Text>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText} onPress={this.toggleEdit}>Edit</Text>
						</TouchableOpacity>
					</View>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	editForm: {
		marginLeft: 50,
		alignContent: 'center',
		flexDirection: 'row',
		color: "white",
		width: 200
	},

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
		color: "white",
		height: 50,
		width: 50,
	},
});