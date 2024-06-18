// // import * as React from 'react';
// import FeaturedJobCard from '../Component/FeatJobCard';
// import PopJobCard from '../Component/PopJobCard';
// import { ScrollView, View, Image, StyleSheet} from 'react-native';
// import Logins from './Login';
// import React from 'react';




// const Homepage = ({route})=>{
//     const {name, email}= route.params;

//     return(
//         <ScrollView style ={styles.container}>
//             <View style= {styles.credentials}>
//                 <View style= {styles.info}>
//                 <Text style= {styles.name}>{name}</Text>
//                 <Text style= {styles.email}>{email}</Text>
//                 <Image source= {require('../assets/Ellipse.png')}/>
//                 </View>
//             </View>

//         </ScrollView>
//     );
// }


// const styles= StyleSheet.create({
//     container:{
//         flex: 1,
//         // width: 


//     },
//     credentials:{

//     }



// });

// export default Homepage;

import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import FeatJobs from '../Component/FeatJobCard';
import PopularJobs from '../Component/PopJobCard';
import SearchInput from '../Component/Search';

const featJobCard = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Facebook',
    companyLogo: require('../assets/ion_logo-facebook.png'),
    location: 'Accra, Ghana',
    salary: '180,000',
    backgroundColor: '#5386e4',
  },
  {
    id: '2',
    title: 'Data Scientist',
    company: 'Google',
    companyLogo: require('../assets/flat-color-icons_google.png'),
    location: 'Mountain View, CA',
    salary: '160,000',
    backgroundColor: '#04284a',
  },
  {
    id: '3',
    title: 'UI/UX Developer',
    company: 'WhatsApp',
    companyLogo: require('../assets/Whatsapp.png'),
    location: 'New York, USA',
    salary: '190,000',
    backgroundColor: '#145f52'

  },
  {
    id: '4',
    title: 'Audio Specialist',
    company: 'Beats',
    companyLogo: require('../assets/Beats.png'),
    location: 'Tokyo, Japan',
    salary: '170,000',
    backgroundColor: '#640a0a'

  },
  {
    id: '5',
    title: 'Customer Service',
    company: 'Instagram',
    companyLogo: require('../assets/Instagram.png'),
    location: 'London, UK',
    salary: '200,000',
    backgroundColor: '#570a64'

  },
  {
    id: '6',
    title: 'Product Manager',
    company: 'Microsoft',
    companyLogo: require('../assets/Windows.png'),
    location: 'Paris, France',
    salary: '300,000',
    backgroundColor: '#0a1e64'

  },
  {
    id: '7',
    title: 'Test Driver',
    company: 'Nissan',
    companyLogo: require('../assets/Nissan.png'),
    location: 'Sydney, Australia',
    salary: '240,000',
    backgroundColor: '#0a3e64'

  },
  {
    id: '8',
    title: 'Mechanical Engineer',
    company: 'Honda',
    companyLogo: require('../assets/Honda.png'),
    location: 'Roi de Janeiro, Brazil',
    salary: '350,000',
    backgroundColor: '#0a2e44'

  },

];

const popularJobs = [
  {
    id: '3',
    title: 'Jr Executive',
    company: 'Burger King',
    companyLogo: require('../assets/Group.png'),
    location: 'Los Angeles, US',
    salary: '98,000',
    backgroundColor: '#386e4',
  },
  {
    id: '4',
    title: 'Product Manager',
    company: 'Beats',
    companyLogo: require('../assets/image 8.png'),
    location: 'Florida, US',
    salary: '84,000',
    backgroundColor: '#e6e6fa',
  },
  // Add more popular job objects here...
];

const Homepage = ({ route }) => {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
        <View style= {styles.content}>
        <View style= {styles.infocontain}>
        <View style= {styles.info}>
        <Text style={styles.welcome}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('../assets/Ellipse.png')}/>
        </View>
        </View>
        <View style={styles.search}><SearchInput /></View>
        {/* <View style={styles.content}> */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.see}>See all</Text>
      </View>
      {/* </View> */}
        <View style={styles.feat}>
      <FeatJobs jobs={featJobCard} />
      </View>

      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <Text style={styles.see}>See all</Text>
      </View>

        <View style={styles.pop}>
          <PopularJobs jobs={popularJobs} />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop:60,
    alignSelf: 'center',
    flex: 1,
    
    // justifyContent:"flex-start",

    backgroundColor: '#fafafd',
    // justifyContent: 'center',
  },
  search:{
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
  },
  content:{
    marginVertical: 60,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  infocontain:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
welcome: {
    fontSize: 24,
    fontWeight: '700',
  },
  email: {
    fontSize: 20,
    color: '#666',
    marginBottom: 16,
  },
  section:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // marginTop: 40,
},
see:{
    color: '#95969D',
    fontSize: 14,
    fontWeight: '400',

},
sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginVertical: 16,
},

});

export default Homepage;
