import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/Login";
import Estoque from "../Screens/Estoque";

const stack = createStackNavigator;

export default function Stack(){
    return(
       
       <NavigationContainer>
            <stack.Navigation>
                
                <stack.Screen
                name='Login'
                component={Login}/>

                <stack.Screen
                name='Estoque'
                component={Estoque}/>

            </stack.Navigation>
        </NavigationContainer>
    )
}
