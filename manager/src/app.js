import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDFYmRf5-NKDxnR5aSqUFjJrwXuJThBa9s',
            authDomain: 'manager-84b75.firebaseapp.com',
            databaseURL: 'https://manager-84b75.firebaseio.com',
            projectId: 'manager-84b75',
            storageBucket: '',
            messagingSenderId: '305560767249'
          };
          firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
