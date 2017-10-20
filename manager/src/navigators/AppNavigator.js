import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native'; 
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';

export const AppNavigator = StackNavigator({
    LoginForm: {
        screen: LoginForm,
        navigationOptions: {
            title: 'Login',
            headerRight: <Button style={{ height: 50, width: 100 }} title={'Save'}>hello</Button>,
        }
    },
    EmployeeList: {
        screen: EmployeeList,
    
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
