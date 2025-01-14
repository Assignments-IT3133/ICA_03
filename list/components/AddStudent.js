import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { students } from './StudentDb';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react'

export default function AddStudent() {

    const [name,setName]=useState();
    const newStudent={
        name:name,
        id:'001',
        age:'22' 
    }
    return (
        <View style={styles.container}>
            <TextInput mode='outlined' label='Name' value={name} onChangeText={setName} />
            <Button onPress={()=>{
                NavigationPreloadManager.popTo('StudentList',{newStudent})
            }} >Add</Button>
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