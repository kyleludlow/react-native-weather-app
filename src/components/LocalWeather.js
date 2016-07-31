'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: '#62bcfa'
  },
  city: {
    marginTop: 70,
    fontSize: 40,
    alignSelf: 'center'
  },
  weatherIcon: {
    marginTop: 30,
    alignSelf: 'center',
    height: 100,
    width: 100
  },
  description: {
    marginTop: 30,
    fontSize: 35,
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
      city: '',
      icon: '',
      description: '',
      temp: '',
      wind: '',
      humidity: '',
      url: ''
    };
  }

getWeather(){
  this.fetchData();
}
fetchData(){
    fetch(this.state.url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      let temp = (responseData.main.temp * (9/5) - 459.67).toFixed(0);
      let wind = (responseData.wind.speed / 0.447).toFixed(2);
      let icon = 'http://openweathermap.org/img/w/' + responseData.weather[0].icon + '.png';
      this.setState({
        weatherData: responseData,
        city: responseData.name,
        icon: icon,
        description: responseData.weather[0].description,
        temp: temp,
        wind: wind,
        humidity: responseData.main.humidity

      });
    })
    .done();
  }

componentWillMount() {
  let url;
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=e9d20812185bcb41aa65bb443b85ad5f';
      this.setState({
        url: url
      });
    },(error) => alert(error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
}

shouldComponentUpdate(nextProps, nextState) {
return nextState.url !== this.state.url || this.state.weatherData === null;
}

componentDidUpdate() {
  this.getWeather();
}
  render() {
    console.log(this.state.icon);
    return(
      <View style={styles.container}>
        <Text style={styles.city}>{this.state.city}</Text>
        <Image style={styles.weatherIcon} source={{uri: this.state.icon}} />
        <Text style={styles.description}>{this.state.description}</Text>
        <Text style={styles.temp}>{this.state.temp}&deg;F</Text>
        <Text style={styles.details}>Wind Speed: {this.state.wind} mp/h</Text>
        <Text style={styles.details}>Humidity: {this.state.humidity}%</Text>
      </View>
    );
  }
}

export default LocalWeather
