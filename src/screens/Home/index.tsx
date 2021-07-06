import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { CategorySelectList } from '../../components/CategorySelectList';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [category, setCategory ] = useState('');
    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger'
        }
    ]

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentsCreate() {
        navigation.navigate('AppointmentsCreate')
    }
    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentsCreate} />
            </View>
            <CategorySelectList
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <ListHeader 
                title="Partidas agendadas"
                subtitle="Total 6"
            />

            <FlatList 
                data={appointments}
                keyExtractor={ item => item.id }
                renderItem={({ item }) => (
                    <Appointment
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{paddingBottom: 69}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />
        </Background>
    );
}