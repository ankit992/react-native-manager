import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';
import { NavigationActions } from 'react-navigation';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                NavigationActions.navigate({ routeName: 'EmployeeList' })
                ]
            });
            dispatch(resetAction); 
            dispatch({ type: EMPLOYEE_CREATE });
        });
    };
};
