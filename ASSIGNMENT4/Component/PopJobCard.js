import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const PopularJobs = ({ jobs }) => {
  const renderJob = ({ item }) => (
    <View style={[styles.card]}>
      <View style={styles.cardContent}>

        <View style={styles.compInfo}>
        <View style={styles.logocont}><Image source={item.companyLogo} style={styles.logo} /></View>
        <View style={styles.textContainer}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.company}>{item.company}</Text>
          </View>

          </View>
        <View style={styles.costloc}>
          <Text style={styles.salary}>${item.salary}/y</Text>
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
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 19,
  },
  
  card: {
    // borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 24,
    height: 74,
    // paddingTop: 15,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // alignContent: 'center',
    justifyContent: 'center',
    // justifyContent: 'center'

  
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    // justifyContent: 'center'
    // alignSelf: 'center',
    // alignItems: 'center',
  },
  compInfo:{
    flexDirection: 'row',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 16,
    resizeMode: 'contain',  
  },
  logocont:{
    width: 53,
    height:55,
    justifyContent: 'center'
  },
  textContainer: {
    // flex: 1,
    textAlign: 'right',
    justifyContent: 'center'
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right'
  },
  salary: {
    fontSize: 16,
    textAlign: 'right',
    // fontWeight: 'bold',
    // color: '#111',
  },
  costloc:{
    justifyContent: 'center',
  }
});

export default PopularJobs;