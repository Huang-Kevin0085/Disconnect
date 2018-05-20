import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class LeaderBoard extends React.Component {
    render() {
        return (
        	<View >
	            <Text style={styles.textStyle}>LEADERBOARD</Text>
	            <Text style={styles.textStyle}>YOU: 133/255</Text>
	            <FlatList style={styles.textStyle}
		          data={[
		            {rank: 1, key: 'Devin'},
		            {rank: 2, key: 'Jackson'},
		            {rank: 3, key: 'James'},
		            {rank: 4, key: 'Joel'},
		            {rank: 5, key: 'John'},
		          ]}
		          renderItem={({item}) => <Text style={styles.textStyle} >{item.rank}  {item.key}</Text>}
	        	/>
        	</View>
        )
    }
}

const styles = StyleSheet.create({
	textStyle: {
		color: '#cff88f',
		fontWeight: 'bold',
		fontSize: 30,
	}
})