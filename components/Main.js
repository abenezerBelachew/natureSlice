import React, { Component } from 'react';


import {View, Text, Settings } from 'react-native';


import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { createBottomTabNavigator, CreateBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { fetchUser } from '../redux/actions/index';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedScreen from './main/Feed'
import { NavigationContainer } from '@react-navigation/native';

const Tab  = createBottomTabNavigator();

class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
  render() {
    //   const { currentUser } = this.props;

    //   // If listed user is not defined | if sth is wrong with firebase
    // // if (currentUser == undefined) {
    // //     return(
    // //         <View></View>
    // //     )
    // // }

    // console.log(currentUser);
    return (
    //   <View style={{ flex: 1, justifyContent: 'center' }}>
    //   <Text>
    //     { currentUser.name} is logged in.
    //   </Text>
    // </View>

    <Tab.Navigator>
            <Tab.Screen 
                name='Feed' 
                options={{ 
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
                component={FeedScreen} />
            {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
    </Tab.Navigator>
    );
  }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({
    fetchUser
    }, dispatch
);

export default connect(mapStateToProps, mapDispatchProps)(Main);
