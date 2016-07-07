'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// let WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=e9d20812185bcb41aa65bb443b85ad5f'

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  text: {
    fontSize: 30
  }
});

class LocalWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      initialposition: 'unknown',
      lastPosition: 'unknown'
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


  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Local View</Text>
        <Text style={styles.text}>Local View</Text>
        <Text style={styles.text}>Local View</Text>
      </View>
    );
  }
}

export default LocalWeather
