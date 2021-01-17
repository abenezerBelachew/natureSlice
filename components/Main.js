import React, { Component } from 'react';


import {View, Text, Settings } from 'react-native';


import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { createBottomTabNavigator, CreateBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { fetchUser } from '../redux/actions/index';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';
import PetScreen from './main/Pets';
import AddScreen from './main/Add';

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
                name='Humans' 
                options={{ 
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="human-greeting" color={color} size={26} />
                    )
                }}
                component={FeedScreen} />
            <Tab.Screen 
                name='Pets' 
                options={{ 
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="paw" color={color} size={26} />
                    )
                }}
                component={PetScreen} />
            <Tab.Screen 
                name='Add' 
                options={{ 
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                    )
                }}
                component={AddScreen} />
            <Tab.Screen 
                name='Profile' 
                options={{ 
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    )
                }}
                component={ProfileScreen} />
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
