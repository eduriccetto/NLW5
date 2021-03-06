import React from   'react';
import { 
    SafeAreaView, 
    Text, 
    Image, 
    TouchableOpacity 
} from 'react-native';
import style from './Welcome/style';
import wateringImg from '../pages/IMG/watering.png';


export function Welcome(){
    return (
        <SafeAreaView style={style.conatiner}>
            <Text style={style.title}>
                Gerencie{'\n'} suas plantas{'\n'} de forma fácil
            </Text>

            <Image 
                source={wateringImg} 
                style={style.image} 
                resizeMode="contain"
            />

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar. 
            </Text>

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>
                    V
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

