import { Text, TextInput, Button, Image, View, StyleSheet } from "react-native";
import Estoque from "./Estoque";

import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();

export default function Login({navigation}){
    return(
        <View style={styles.container}>

        <Image style={styles.image}
        source={require('../Imagens/LoginIcon.png')}/>

        <Text style={styles.titulo}>Logar</Text>

        <TextInput 
        style={styles.text}
        placeholder="Usuario"/>

        <TextInput 
        style={styles.text}
        placeholder="Senha"
        secureTextEntry/>

        <Button title="Logar"
        color={'#0066ffff'}
        onPress={() => navigation.navigate(Estoque)}/>




        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff8800ff'
    },
    image:{
        borderRadius: 100,
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 2,
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },
    text:{
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 5,
        

    }
})