import React, {useState} from "react";
import { View, TextInput, Image, StyleSheet, Text } from "react-native";

const SearchInput= ()=>{
    const [inputValue, setInputValue]= useState('');



    return(
        <View style={styles.container}>
            <View style={styles.box}>
                {inputValue ===''&& (
                    <View style={styles.placecontainer}>
                        <Image source={require('../assets/search.1 1.png')} style={styles.searchicon}/>
                        <Text style={styles.placetext}>  Search a job or position</Text>
                    </View>
                )}
                <TextInput
                    style={[styles.textInput, inputValue ==="" && styles.textInputCondition]}
                    value={inputValue}
                    onChange={setInputValue}
                />
                
            </View>
            <View style={styles.filter}>
                <Image source={require('../assets/filter.5.png')} style={styles.filtericon}/>
            </View>
        </View>

    );
};


const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        height: 48,
    },
    box:{
        backgroundColor: '#f2f2f3',
        borderRadius: 12,
        // flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
        // padding: 15,
        
    },
    placecontainer:{
        // alignSelf: 'center',
        flexDirection: 'row',
        width: 263,
        // flex: 1,
        paddingTop:     13,
        // alignItems: 'center',
    },
    searchicon:{
        // justifyContent: 'center',
        // position: 'relative',
        
    },
    placetext:{
        color: '#95969D',
        // justifyContent: 'center',
        // textAlignVertical: 'center'

    },
    filter: {
        backgroundColor: '#f2f2f3',
        width: 48,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,


    },
    filtericon:{
        alignContent: 'center',
        alignSelf: 'center'
    }



});

export default SearchInput;
