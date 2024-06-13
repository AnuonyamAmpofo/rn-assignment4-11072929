import React from 'react';
import {View, Text, Image, StyleSheet}from 'react-native';

const FeaturedJobCard = ({job})=>{
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Image source={job.companyLogo} style={styles.logo}/>
                <View style={styles.textContainer}>
                    <Text style={styles.jobTitle}>{job.title}</Text>
                    <Text style={styles.company}>{job.company}</Text>
                    
                </View>
                <View style={styles.sallocation}>
                    <Text style={styles.salary}>${job.salary}</Text>
                    <Text style={styles.location}>{job.location}</Text>

                </View>
            </View>
        </View>
        
    );
}

const styles= StyleSheet.create({
    card:{
        backgroundColor: '#34A853',

    }

});

export default FeaturedJobCard;