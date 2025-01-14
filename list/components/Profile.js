import { View, Text, StyleSheet, Image } from "react-native-web";

export default function Profile({route}){
    const {student}=route.params;
    return(
        <>
        <View style={styles.profile}>
            <Image style={styles.profilePic} source={student.profile_pic}/>
            <View style={styles.card}>
            <Text style={styles.welcome}>Hello:{student.name}</Text>
            <Text style={styles.data}>Name:{student.name}</Text>
            <Text style={styles.data}>Age:{student.age}</Text>
            <Text style={styles.data}>Address:{student.address}</Text>
            <Text style={styles.data}>Gender:{student.gender}</Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    profilePic: {
        width: 250,
        height: 250,
        borderRadius: 50,
        marginBottom: 20,
    },
    welcome: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    data: {
        fontSize: 18,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});