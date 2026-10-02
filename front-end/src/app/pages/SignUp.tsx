import React, {useState} from 'react';
import { Image, TextInput, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import {loginStyles} from '../../../styles/loginStyle'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const API_URL = "http://192.168.31.21:5000/api/auth/signup"
export default function SignUp() {
  const router = useRouter();
  const [ownerName,setOwnerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code,setCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [loading, setLoading] = useState(false);



  const handleSignup =async()=>{
    if(!ownerName || !code || !phoneNumber || !confirmCode){
      Alert.alert('Error','Please fill in all fields');
      return;
    }
    if(code !== confirmCode){
      Alert.alert('Error','Access codes do not match');
      return;
    }
    try{
      setLoading (true);
      const response = await fetch(API_URL,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          ownerName,
          phoneNumber,
          code,
        })
      })
      const data = await response.json();

      if(response.ok){
        Alert.alert('Success', 'Account created successfully!',[
          {text:'OK', onPress:()=>router.replace('/')}
        ])
      }else{
        Alert.alert('Error', data.error || 'Failed to register account');
      }
    }catch (error) {
      Alert.alert('Network Error', 'Could not connect to backend server');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ThemedView style={loginStyles.container}>
      <SafeAreaView style={loginStyles.safeArea}>
        <ThemedView style={loginStyles.heroSection}>
          <ThemedView style={loginStyles.imageContainer}>
            <Image 
              source={require('../../../assets/images/home.png')}
              style={loginStyles.image}
            />
          </ThemedView>
        
          <ThemedText type="title" style={loginStyles.title}>
              Rent-a-room
          </ThemedText>

          <ThemedText type="title" style={loginStyles.title}>
              Create Account
          </ThemedText>
          

          <ThemedText style={loginStyles.subtitle}>
            Register your property to get started
          </ThemedText>
        </ThemedView>
        <ThemedView type="backgroundElement" style={loginStyles.formContainer}>
          <TextInput
            style={loginStyles.inputBox}
            placeholder='Owner name'
            placeholderTextColor="#888"
            value={ownerName}
            onChangeText={setOwnerName}
            autoCapitalize='words'
          />
          <TextInput
            style={loginStyles.inputBox}
            placeholder='Phone Number'
            placeholderTextColor="#888"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
          />
          <TextInput
            style={loginStyles.inputBox}
            placeholder='Create Access Code'
            placeholderTextColor="#888"
            value={code}
            onChangeText={setCode}
            secureTextEntry ={true}
          />
          <TextInput
            style={loginStyles.inputBox}
            placeholder='Confirm Access Code'
            placeholderTextColor="#888"
            value={confirmCode}
            onChangeText={setConfirmCode}
            secureTextEntry ={true}
          />

          <Pressable 
            onPress={handleSignup}
            style={({pressed})=>[
              loginStyles.loginButton,
              pressed && loginStyles.buttonPressed
            ]}
          >
            <ThemedText style={loginStyles.loginButtonText}>Sign Up</ThemedText>
          </Pressable>
          <Pressable 
            onPress={()=>router.push('/')}
            style={{marginTop:15,alignItems:'center'}}
          >
            <ThemedText style={{color:'#888',fontSize:14}}>
              Already have an account? <ThemedText style={{fontWeight:'bold'}}>Log In</ThemedText>
            </ThemedText>

          </Pressable>
        </ThemedView>

      </SafeAreaView>
    </ThemedView>
  );
}