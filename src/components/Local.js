'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Local extends Component {
  render() {
    return(
      <View>
        <Text>Local View</Text>
      </View>
    );
  }
}

export default Local
