'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import LocalWeather from './LocalWeather'


 const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Local extends Component {
  render() {
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Local Weather',
          component: LocalWeather
        }}/>
    );
  }
}

export default Local
