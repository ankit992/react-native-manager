import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Employee List',
            headerRight: <Button title="Add" onPress={() => params.handleSave()} />
        };
    };

    componentDidMount() {
      this.props.navigation.setParams({ handleSave: () => this.addDetails(this) });
    }

    addDetails = (propHolder) => {
        console.log(propHolder.props);
        const { navigate } = this.props.navigation;
        navigate('EmployeeCreate');        
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

const mapStatesToProps = (state) => {
    const { nav } = state;
    console.log(nav);
    return { nav };
};

export default connect(mapStatesToProps)(EmployeeList);
