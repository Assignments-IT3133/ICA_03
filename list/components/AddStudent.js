import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AddStudent() {
    const [name, setName] = useState('');
    const navigation = useNavigation();

    const newStudent = {
        name: name,
        id: '001',
        age: '22'
    };

    return (
        <View style={styles.container}>
            <TextInput
                mode='outlined'
                label='Name'
                value={name}
                onChangeText={setName}
            />
            <Button
                mode="contained"
                onPress={() => {
                    navigation.navigate('StudentList', { newStudent });
                }}
            >
                Add Student
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});