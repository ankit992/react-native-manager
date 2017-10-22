import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE, 
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_FIRE_SUCCESS
} from './types';

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

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                    NavigationActions.navigate({ routeName: 'EmployeeList' })
                    ]
                });
                dispatch(resetAction); 
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });                                
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                    NavigationActions.navigate({ routeName: 'EmployeeList' })
                    ]
                });
                dispatch(resetAction); 
                dispatch({ type: EMPLOYEE_FIRE_SUCCESS });       
            });
    };
};
