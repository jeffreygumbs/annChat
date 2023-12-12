import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Button, Dimensions, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { useAuth } from '../context/AuthContext';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { onLogin, onRegister} = useAuth();

    const onSignInPress = async () => {
        setLoading(true);

        try {
        const result = await onLogin!(email, password);
        
        } catch (e) {
            Alert.alert('Error', 'Could not log in');
        } finally{
            setLoading(false);
        }
    };
    const onSignUpPress = async () => {
        setLoading(true);
        try {
        const result = await onRegister!(email, password);
        
        } catch (e) {
            Alert.alert('Error', 'Could not log in');
        } finally{
            setLoading(false);
        }
    };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Spinner visible={loading}/>
      <Image style={styles.header}  source={require("../assets/images/Ann-Chat.png")}/>
      <Text style={styles.subheader}>The fastest way to meet</Text>
      <TextInput
      autoCapitalize='none'
      placeholder='john@example.com'
      value={email}
      onChangeText={setEmail}
      style={styles.inputField}
      />
      <TextInput
      placeholder='password'
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      style={styles.inputField}
      />
      <TouchableOpacity style={styles.button} onPress={onSignInPress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Button title="Don't have a account? Sign Up" onPress={onSignUpPress} color={Colors.primary} />
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        paddingHorizontal: WIDTH > HEIGHT ? '30%' : 20,
        justifyContent: 'center',
    },
    header:{
        width: 250,
        height: 250,
        marginHorizontal:50,
        marginBottom: 10,
        borderRadius: 20,
    },
    subheader:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 40,
    },
    inputField:{
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 4,
        padding: 10,
    },
    button:{
        marginVertical: 15,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 4,
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
    },
})
export default Page