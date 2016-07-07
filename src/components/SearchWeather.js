'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
  container: {
        marginTop: 65,
        padding: 10
    },
    searchInput: {
        height: 36,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        borderWidth: 1,
        flex: 1,
        borderRadius: 4,
        padding: 5
    },
    button: {
        height: 36,
        backgroundColor: '#62bcfa',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    instructions: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 15
    },
    fieldLabel: {
        fontSize: 15,
        marginTop: 15
    },
    errorMessage: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        color: 'red'
    }
});


class SearchWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: '',
            isLoading: false,
            errorMessage: ''
        };
    }

    render() {
      let spinner = this.state.isLoading ?
            ( <ActivityIndicator
                hidden='true'
                size='large'/> ) :
            ( <View/>);
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Search by city.</Text>
                <View>
                    <Text style={styles.fieldLabel}>City:</Text>
                    <TextInput style={styles.searchInput} onChange={this.cityInput.bind(this)}/>
                </View>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#bbc4ef'
                                    onPress={this.searchForWeather}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableHighlight>
                {spinner}
                <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
            </View>
        );
    }

    cityInput(event) {
        this.setState({ bookTitle: event.nativeEvent.text });
    }

    searchForWeather(){
      console.log('button pressed');
    }
}

export default SearchWeather
