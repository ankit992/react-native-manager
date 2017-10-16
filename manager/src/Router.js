import { TabNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

export const FeedStack = StackNavigator({
    LoginForm: {
        screen: LoginForm,
        navigationOptions: {
            title: 'Login'
        }
    },
    EmployeeList: {
        screen: EmployeeList,
        navigationOptions: {
            title: 'Employee List'
        }
    }
});

export const Tabs = TabNavigator({
    LoginForm: {
        screen: LoginForm, 
    },
    EmployeeList: {
        screen: EmployeeList,
    }
});
