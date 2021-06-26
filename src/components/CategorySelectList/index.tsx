import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    View, ScrollView
} from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelectList( { categorySelected, setCategory }: Props ) {
    return(
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
            style={styles.container}
        >
            { categories.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={ () => setCategory(category.id)}
                />
            ))}
        </ScrollView>
    );
}