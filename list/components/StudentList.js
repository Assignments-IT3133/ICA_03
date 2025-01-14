import {FatList, StyleSheet,View} from 'react-native';
import {Text,} from 'react-native-paper';
import {students} from './StudentDb';


export default function StudentList(){

    return(
        <>
            <FatList 
                data={students}
                KeyExtractor={item=>item.id}
                renderItem={({item}) => <Text style={style.text}>item.name</Text>}
            />
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'black',
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});