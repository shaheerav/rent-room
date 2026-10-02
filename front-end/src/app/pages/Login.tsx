import React, {useState} from 'react';

import { Image, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import {loginStyles} from '../../../styles/loginStyle'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const LOGIN_API_URL = 'http://192.168.31.21:5000/api/auth/login';

export default function Login() {
  const router = useRouter();

  const [ownerName,setOwnerName] = useState('');
  const [code,setCode] = useState('');
  const [loading,setLoading] = useState(false);

  const handleLogin =async()=>{
    
    if(!ownerName || !code){
      Alert.alert('Error','Please fill in all fields');
      return;
    }
    try{
      setLoading(true);
      const response = await fetch(LOGIN_API_URL,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          ownerName,
          code
        })
      })
      const data = await response.json();
      if(response.ok){
        Alert.alert("Welcome Back!", `Logged in as ${data.owner.name}`,[
          {
            text:'OK',
            onPress:()=>
              router.replace({
                pathname:'/pages/DashBoard',
                params:{name:data.owner.name, ownerId:data.owner.id},
          })}
        ])
      }else {
        Alert.alert('Login Failed', data.error || 'Invalid credentials');
      }
      }catch (error) {
      Alert.alert('Network Error', 'Could not connect to backend server');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
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
          

          <ThemedText style={loginStyles.subtitle}>
            Enter your credentials to manage your property
          </ThemedText>
        </ThemedView>
        <ThemedView type="backgroundElement" style={loginStyles.formContainer}>
          <TextInput
            style={loginStyles.inputBox}
            placeholder='Owner name'
            placeholderTextColor="#8888"
            value={ownerName}
            onChangeText={setOwnerName}
            autoCapitalize='words'
          />
          <TextInput
            style={loginStyles.inputBox}
            placeholder='Access Code'
            placeholderTextColor="#888"
            value={code}
            onChangeText={setCode}
            secureTextEntry ={true}
            keyboardType='default'
          />

          <Pressable 
            onPress={handleLogin}
            disabled={loading}
            style={({pressed})=>[
              loginStyles.loginButton,
              pressed && loginStyles.buttonPressed
            ]}
          >
           {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <ThemedText style={loginStyles.loginButtonText}>Log In</ThemedText>
            )}
          </Pressable>
          <Pressable 
            onPress={()=>router.push('pages/SignUp')}
            style={{marginTop:15,alignItems:'center'}}
          >
            <ThemedText style={{color:'#888', fontSize:14}}>
              Don't have an account? <ThemedText style={{fontWeight:'bold'}}>Sign Up</ThemedText>
            </ThemedText>
          </Pressable>
        </ThemedView>

      </SafeAreaView>
    </ThemedView>
  );
}