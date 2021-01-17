import React, { Component } from 'react';


import {View, Text, Settings } from 'react-native';


import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { fetchUser } from '../redux/actions/index';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';
import PetScreen from './main/Pets';

import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
    return null
}

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

    <Tab.Navigator initialRouteName='Humans' labeled={false} 
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#00A86B' }}
    >
            <Tab.Screen 
                name='Humans' 
                options={{ 
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="human-greeting" color={color} size={26} />
                    )
                }}
                component={FeedScreen} />
            {/* <Tab.Screen 
                name='Pets' 
                options={{ 
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="paw" color={color} size={26} />
                    )
                }}
                component={PetScreen} /> */}
            <Tab.Screen 
                name='AddContainer' 
                options={{ 
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                    )
                }}
                component={EmptyScreen} 
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Add")
                    }
                })}
                
                />
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
