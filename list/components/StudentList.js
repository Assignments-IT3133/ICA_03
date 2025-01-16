import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import { Button } from 'react-native-paper';
import { students } from './StudentDb';
import { useNavigation } from '@react-navigation/native';


export default function StudentList({route}) {
    const navigation=useNavigation();
    const [studentList,setList]=useState(students);
    const [rerender,setRender]=useState(false);
    useEffect(()=>{
        if(route.params?.newStudent){
            const {newStudent}=route.params;
            setList((pre)=>[...pre,{...newStudent}]);
            setRender(!rerender)
        }
    },[route.params?.newStudent]);
    return (
        <View style={styles.container}>
            <FlatList 
                data={studentList}
                keyExtractor={item => item.id.toString()}
                extraData={rerender}
                renderItem={({ item }) => 
                <TouchableOpacity onPress={()=>navigation.navigate('Profile',{student:item})}>
                <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            }
            />
           <TouchableOpacity onPress={()=>navigation.navigate('Add')}>Add student</TouchableOpacity>
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