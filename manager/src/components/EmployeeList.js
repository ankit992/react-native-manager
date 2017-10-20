import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Employee List',
            headerRight: <Button title="Add" onPress={() => params.handleSave()} />
        };
    };

    componentDidMount() {
      this.props.navigation.setParams({ handleSave: this.addDetails });
    }

    addDetails() {
        console.log('clicked add');
    }

    render() { 
        return (
            <View>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
            </View>
        );
    }
}

export default EmployeeList;
