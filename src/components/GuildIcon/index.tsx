import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import { CDN_IMAGE } from '../../configs';
import DiscordSVG from '../../assets/discord.svg';

type Props = {
    guildId: string;
    iconId:  string | null;
}

export function GuildIcon({guildId, iconId}: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return(
       <View style={styles.container}>
           {
               iconId ?
               <Image
                    source={{ uri }}
                    style={styles.image}
                    resizeMode="cover"
                />
                :
                <DiscordSVG width={40} height={40}/>
           }
       </View>
    );
};