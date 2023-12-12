import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useAuth } from '../../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
    const {onLogout} = useAuth();
  return (
    <Stack
    screenOptions={{
        headerStyle: {
            backgroundColor: '#2596be',
        },
        headerTintColor: '#fff',
    }}
    >
        <Stack.Screen name='index' options={{title: 'Meeting Room',
        headerRight: () => (
            <TouchableOpacity onPress={onLogout}>
                <Ionicons name='log-out-outline' size={24} color={'#fff'}/>
            </TouchableOpacity>
        ),
    }} />
    <Stack.Screen name='(room)/[id]' options={{title: 'Room'}} />
    </Stack>
  )
}

export default Layout