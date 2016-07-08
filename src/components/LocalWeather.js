'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// let WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=e9d20812185bcb41aa65bb443b85ad5f'


const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  city: {
    marginTop: 70,
    fontSize: 40,
    alignSelf: 'center'
  },
  weatherIcon: {
    marginTop: 30,
    alignSelf: 'center'
  },
  temp: {
    marginTop: 30,
    fontSize: 35,
    alignSelf: 'center'
  },
  details: {
    marginTop: 30,
    fontSize: 18,
    alignSelf: 'center'
  }
});

class LocalWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      currentLocation: 'unknown',
      lastLocation: 'unknown'
    };
  }

  // fetchData(){
  //   fetch(WEATHER_API_URL)
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     this.setState({
  //       isLoading: false,
  //       weatherData: responseData
  //     });
  //   })
  // }

// let watchID = (null ?number);

componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let currentLocation = JSON.stringify(position);
      console.log(currentLocation);
      this.setState({currentLocation});
    },
    (error) => alert(error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
}



  render() {

    console.log(this.state);
    return(
      <View style={styles.container}>
        <Text style={styles.city}>San Francisco</Text>
        <Icon style={styles.weatherIcon} name="ios-rainy-outline" size={60} color="#000" />
        <Text style={styles.temp}>70&deg;</Text>
        <Text style={styles.details}>Wind Speed: 2.5 mp/h</Text>
        <Text style={styles.details}>Humidity: 30%</Text>
      </View>
    );
  }
}

export default LocalWeather
