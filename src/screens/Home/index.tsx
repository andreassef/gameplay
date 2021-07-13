import React, { useState, useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { CategorySelectList } from '../../components/CategorySelectList';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentsProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { Load } from '../../components/Load';

import { useNavigation, useFocusEffect } from '@react-navigation/native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';

export function Home() {
    const [category, setCategory ] = useState('');
    const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    function handleAppointmentDetails(guildSelected: AppointmentsProps) {
        navigation.navigate('AppointmentDetails', {
            guildSelected
        });
    }

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentsCreate() {
        navigation.navigate('AppointmentsCreate')
    }

    async function loadAppointments(){
        const responseStorage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointmentsData: AppointmentsProps[] = responseStorage ? JSON.parse(responseStorage) : [];

        if(category){
            setAppointments(appointmentsData.filter(item => item.category === category));
        }else {
            setAppointments(appointmentsData);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]))

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

            {
                loading ?
                    <Load />
                :
                <>
                    <ListHeader 
                        title="Partidas agendadas"
                        subtitle={`Total ${appointments.length}`}
                    />

                    <FlatList 
                        data={appointments}
                        keyExtractor={ item => item.id }
                        renderItem={({ item }) => (
                            <Appointment
                                data={item}
                                onPress={() => handleAppointmentDetails(item)}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        contentContainerStyle={{paddingBottom: 69}}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            }
        </Background>
    );
}