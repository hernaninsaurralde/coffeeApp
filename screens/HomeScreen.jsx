import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import List from '../components/List'


const HomeScreen = () => {

  const [coffeeOption, setCoffeeOption] = useState('https://api.sampleapis.com/coffee/hot');



  return (
    <View style={styles.container}>
      
      <View style={styles.options}>
        <TouchableOpacity 
          onPress={() => setCoffeeOption('https://api.sampleapis.com/coffee/hot')} 
          style={styles.touchOption}
        >
          <Text style={styles.textOption}>Hot</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setCoffeeOption('https://api.sampleapis.com/coffee/iced')} 
          style={styles.touchOption}
        >
          <Text style={styles.textOption}>Iced</Text>
        </TouchableOpacity>
      </View>
  
      <List coffeeOption={coffeeOption} />
      <StatusBar style="auto" />
    </View>
  )
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c241f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  options: {
    marginTop: 60,
    flexDirection: 'row',
  },
  touchOption:{
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom: 5,
    backgroundColor: '#E8D4AD',
    width: '45%'
  },

  textOption:{
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
    
  }

});


export default HomeScreen