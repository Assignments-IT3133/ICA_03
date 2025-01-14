import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { students } from './StudentDb';

export default function StudentList() {
    return (
        <View style={styles.container}>
            <FlatList 
                data={students}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'white',
        backgroundColor:'purple',
        padding: 5,
        margin:3,
        width:'100%'
    },
    container: {
        width:'100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});