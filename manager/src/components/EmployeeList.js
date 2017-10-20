import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class EmployeeList extends Component {
    static navigationOptions = {
        // header: {
        //     // right: <Button title={'Save'} />
        // }
    };

    // componentDidMount() {
    //   this.props.navigation.setParams({ handleSave: this.saveDetails });
    // }

    // saveDetails() {
    //     console.log('Save Details');
    // }

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
