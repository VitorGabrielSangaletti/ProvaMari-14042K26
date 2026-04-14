import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

import {produtos} from '../Data/EstoqueData'

export default function Estoque(){
    return(
        <ScrollView><View style={styles.conteiner}>

            <Text style={styles.titulo}>Estoque</Text>

            {produtos.map (ListaProdutos( () =>

            <Card>
 
            <Card.Cover source={{uri: ListaProdutos.image}}/>
            
            <Card.Content>{ListaProdutos.name}</Card.Content>
            <Card.Content>{ListaProdutos.preco}</Card.Content>

            </Card>
        ))}
        </View></ScrollView>

    )
}

const styles = StyleSheet.create({
    conteiner:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff8800ff'
    },
    
    titulo:{
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },

})