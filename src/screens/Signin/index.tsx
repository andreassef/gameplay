import React from 'react';
import { 
    View,
    Text,
    Image
} from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { useNavigation } from '@react-navigation/native';

export function Signin() {
    const navigation = useNavigation();

    function handleSignin() {
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <Image 
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entrar com discord" 
                    activeOpacity={0.6}
                    onPress={handleSignin}
                />
            </View>
        </View>
    );
}