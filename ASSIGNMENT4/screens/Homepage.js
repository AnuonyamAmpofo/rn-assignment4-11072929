import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, StatusBar} from 'react-native';
import FeatJobs from '../Component/FeatJobCard';
import PopularJobs from '../Component/PopJobCard';
import SearchInput from '../Component/Search';

const featJobCard = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Facebook',
    companyLogo: require('../assets/facebook.png'),
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
    id: '1',
    title: 'Jr Executive',
    company: 'Burger King',
    companyLogo: require('../assets/Group.png'),
    location: 'Los Angeles, US',
    salary: '98,000',
    
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Beats',
    companyLogo: require('../assets/Beats.png'),
    location: 'Florida, US',
    salary: '84,000',
    
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'Facebook',
    companyLogo: require('../assets/facebook.png'),
    location: 'Florida, US',
    salary: '86,000',
  },
  {
    id: '4',
    title: 'Mechanical Engineer',
    company: 'Toyota',
    companyLogo: require('../assets/Toyota.png'),
    location: 'Florida, US',
    salary: '74,000',
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'Microsoft',
    companyLogo: require('../assets/Microsoft.png'),
    location: 'Moscow, Russia',
    salary: '80,000',
  },
  {
    id: '6',
    title:'Legal Advisor',
    company: 'Snapchat',
    companyLogo: require('../assets/Snap.png'),
    location: 'Berlin, Germany',
    salary: '160,000',
  },
  {
    id: '7',
    title: 'Manager',
    company: 'KFC',
    companyLogo: require('../assets/KFC.png'),
    location: 'Rome, Italy',
    salary: '100,000',
  },
  {
    id: '8',
    title: 'Product Manager',
    company: 'Huawei Technologies',
    companyLogo: require('../assets/Huawei.png'),
    location: 'Toronto, Canada',
    salary: '150,000',
  },
];

const Homepage = ({ route }) => {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* <StatusBar barStyle={'default'}> */}
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
        {/* </StatusBar> */}
        <StatusBar style="auto"/>
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
