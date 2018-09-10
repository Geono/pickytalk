import React from 'react';
import {View, Text} from 'react-native';

import readUsers from './firebase/firebase';

class Home extends React.Component {

	render() {
		readUsers();
		return (
			<View>
				<Text>Hello world!</Text>
				<Text>Hello world!sdfsdfsesfssfesdfasdf</Text>
			</View>
		);
	}
}


export default Home;
