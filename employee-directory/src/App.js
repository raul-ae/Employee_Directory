import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Sort from "./components/Sort";
import Filter from "./components/Filter"
import employees from "./employees.json";


class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  sortEmployee = () => {
    console.log("sorting descendent")
    employees.sort(compareValues('id', 'desc'));
    function compareValues(key, order = 'asc') {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }
    
        const varA = (typeof a[key] === 'string')
          ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
          ? b[key].toUpperCase() : b[key];
    
        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    }
    
    this.setState({ employees });
  };

  filterEmployee = department => {

    this.setState({ employees });
  };

  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
        <Sort
         sortEmployee={this.sortEmployee}
         />
        <Filter/>
        {this.state.employees.map(employee => (
          <EmployeeCard
           
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            department={employee.department}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
