import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView, }from 'react-native';
import Mask from'../assets/Mask.png';
const FeatJobs = ({jobs})=>{
    const renderJob = ({ item }) => (
        <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
          <Image source={Mask} style={[styles.backgroundImage, { backgroundColor: item.backgroundColor }]} />
          <View style={styles.cardContent}>

            <View style={styles.compinfo}>
            <View style={styles.logocont}><Image source={item.companyLogo} style={styles.logo} /></View>
            <View style={styles.textContainer}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.company}>{item.company}</Text>
              </View>
            </View>
            <View style= {styles.costloc}>
                <Text style={styles.salary}>${item.salary}</Text>
                <Text style={styles.location}>{item.location}</Text>
            </View>
            
          </View>
        </View>
      );
    return (
        
        <View style={styles.container}>
       
      <FlatList
        data={jobs}
        renderItem={renderJob}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
      
    //   marginTop: 
    },
    
    horizontalList: {
      marginBottom: 16,
      marginHorizontal: 16,
    },
    card: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 24,
      marginVertical: 8,
      padding: 20,
      marginRight: 16,
      width: 280,
      height: 186,
      
    },
    backgroundImage: {
      position: 'absolute',
      // marginLeft: 20,
      top: 0,

      // left: 20,
      width: 280,
      height: 186,
      resizeMode: 'cover',
      borderRadius: 24,
      opacity: 0.1,
    },

    cardContent: {
      flexDirection: 'column',
    //   alignItems: 'center',
      flex: 1,
      justifyContent: 'space-between',
      zindex: 1,
    },
    logo: {
      width: 40,
      height: 40,
      
    //   marginRight: 16,
    },
    logocont:{
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        

    },
    costloc:{
        flexDirection: 'row',
        // alignSelf:'baseline',
        justifyContent: 'space-between',
    },
    textContainer: {
    //   flex: 1,
    paddingLeft: 14,
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    company: {
      fontSize: 14,
      fontWeight: '400',
      color: '#fff',
      opacity: 0.75,
    },
    compinfo:{
       flexDirection: 'row',
      // justifyContent: 'space-between',
       alignItems: 'stretch'
    },
    location: {
      fontSize: 15,
      color: '#fff',
      fontWeight: '500',
    },
    salary: {
      fontSize: 16,
      fontWeight: '500',
      color: '#fff',
    },
  });
  
  export default FeatJobs;