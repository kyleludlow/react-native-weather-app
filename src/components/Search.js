'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import SearchWeather from './SearchWeather'


 const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Search extends Component {
  render() {
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Search by City',
          component: SearchWeather
        }}/>
    );
  }
}

export default Search
