'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  View
} from 'react-native';
import Local from './src/components/Local'
import Search from './src/components/Search'

class WeatherApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'local'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'local'}
                    systemIcon="featured"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'local'
                        });
                    }}>
                    <Local/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    systemIcon="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
