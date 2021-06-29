import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';


export function GuildIcon() {
    const uri = 'https://banner2.cleanpng.com/20180509/yzq/kisspng-discord-computer-icons-social-media-gamer-5af3aca88f95f4.2910093515259188885881.jpg';

    return(
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
};