import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { students } from './StudentDb';
import {useNavigation} from '@react-navigation/native'

export default function StudentList() {
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <FlatList 
                data={students}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => 
                <TouchableOpacity onPress={()=>navigation.navigate('Profile',{student:item})}>
                <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            }
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