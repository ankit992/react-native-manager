import { TabNavigator } from 'react-navigation';
import React from 'react';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

export const Tabs = TabNavigator({
    LoginForm: {
        screen: LoginForm,
    },
    EmployeeList: {
        screen: EmployeeList,
    }
});
