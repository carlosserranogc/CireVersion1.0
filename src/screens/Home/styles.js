import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    image: {
        marginTop: 0,
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
       
    },
    title: {
        fontSize: 70,
        fontWeight: 'bold',
        color: 'white',
        width: '120%',
        marginLeft: 25,

    },
    button: {
        color: 'black',
        backgroundColor: "#fff",
        width: 200,
        height: 40,
        marginLeft: 25,
        borderRadius: 40,  
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        marginLeft: 10,
        borderRadius: 40,  
        marginTop: 45,
        height: 60,
        width: Dimensions.get('screen').width - 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffF', 
        flexDirection: 'row',
        marginRight: 10,
        position: 'absolute',
        top: 10,
        zIndex: 100
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
    

});


export default styles 

