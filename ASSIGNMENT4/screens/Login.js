import { useState } from 'react';
import * as React from 'react';
// import 
import {View, StyleSheet,} from 'react-native';



export default function Logins({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    
    const handleLogin= ()=> {
        navigation.navigate('Homepage', {name, email});
    }


}