import { useState } from 'react';
import * as React from 'react';
import { View, StyleSheet, flex, Image, TextInput, TouchableOpacity, paddingHorizontal,paddingVertical,Button, Text } from 'react-native';

export default function Logins({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Homepage', { name, email });
  };

  return (
    <View style={styles.container}>
        <View style={styles.titless}>
        <Text style={styles.title}>Jobizz</Text>
        <View style={styles.heads}><Text style={styles.headline1}>Welcome Back 👋</Text>
        <Text style={styles.headline2}>Let's log in. Apply to jobs! </Text>
        </View>
        </View>
        <View style={styles.credentials}>
        <TextInput
            style={styles.input}
            placeholder='Name'
            value={name}
            onChangeText={setName}

        />
        <TextInput
            style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            
        
        />
        {/* <Button title='Login' onPress={handleLogin}/> */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttontext}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
            <View style={styles.line}/>
            <Text style={styles.orText}>Or continue with</Text>
            <View style={styles.line}/>
        </View>

        <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/cib_apple.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/flat-color-icons_google.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/facebook.png')}/>
            </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
            <Text>
                Have an account?   
            </Text>
            <TouchableOpacity >
                <Text style={styles.register}>  Register</Text>
            </TouchableOpacity>
        </View>
        
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center',
    padding: 24,
    // paddingTop: 50,
    backgroundColor: '#fafafd',
  },
  title:{
    color: '#356899',
    fontWeight: '600',
    fontSize: 22,
  },
  titless:{
    width: 327,
    // 
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    
  },
  heads:{
    marginVertical: 30,
    marginTop: 10,
  },
  headline1:{
    fontWeight: '600',
    fontSize: 24,
  },
  headline2:{
    marginVertical: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#a1b0b1',

  },
  credentials:{
    width: 327,
    // 
    alignSelf: 'center',
    display: flex,
    flexDirection: 'column',
    justifyContent: "center",
    marginTop: 20

    

  },
  input:{
    borderColor:'#afb0b6',
    borderWidth: 1,
    marginVertical: 10,
    height: 52,
    borderRadius: 10,
    paddingLeft: 20,


  },
  orContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 70,

    // height: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#AFB0B6',
  },
  orText:{
    marginHorizontal: 8,
    fontSize: 14,
    textAlign: 'center',
    color: '#AFB0B6'
  },

  button:{
    backgroundColor:'#356899',
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 40,
    // width: 327,
    
    


  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    // width: 327,
  },
  socialContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginVertical: 16,
  },

  socialButton:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    backgroundColor: '#fff'
    
  },
  registerContainer:{
    flexDirection: 'row',
    alignSelf: 'center',
    verticalAlign: 'bottom',
    marginTop: 50,
    // marginTop
  },
  register:{
    color: '#356899',
    fontWeight: 'bold',
  }
  
});