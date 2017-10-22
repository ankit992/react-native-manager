import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Employee List',
            headerRight: <Button title="Add" onPress={() => params.handleSave()} />
        };
    };

    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentDidMount() {
      this.props.navigation.setParams({ handleSave: () => this.addDetails(this) });
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component will be rendered with
        // this.props is still the old set of props 
        this.createDataSource(nextProps);        
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    addDetails = (propHolder) => {
        console.log(propHolder.props);
        const { navigate } = this.props.navigation;
        navigate('EmployeeCreate');        
    }

    renderRow(employee) {
        return <ListItem employee={employee} navigationProp={this.props.navigation} />;
    }

    render() { 
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const mapStatesToProps = (state) => {
    // const { nav, employees } = state;
    // console.log(nav);
    // return { nav, employees };
    console.log('----------');
    console.log(state);
    console.log('----------');
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    console.log(employees);
    console.log('==========');
    return { employees };
};

export default connect(mapStatesToProps, { employeesFetch })(EmployeeList);
