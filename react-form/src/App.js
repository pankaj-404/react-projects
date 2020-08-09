import React from 'react';
import styles from './App.module.css';
import Form from './form/Form';
import Table from './form/Table';
import UpdateForm from './form/UpdateForm';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      person: [{
        name: null,
        age: null,
        department: null,
        address: null,
        salary: null
      }],
      departmentFilter: null,
      salaryFilter: null,
      formEdit: false,
      id:""
    }
    this.input = React.createRef();
    this.input = React.createRef();
    this.input = React.createRef();
    this.input = React.createRef();
    this.input = React.createRef();
  }


  handleFormData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handelOrder = (e) => {
    this.setState({
      salaryFilter: e.target.name,
    })
  }

  handelDepartment = (e) => {
    this.setState({
      departmentFilter: e.target.name
    })
  }

  submitForm = (e) => {
    const date = new Date()
    e.preventDefault()
    const obj = {
      name: this.state.name,
      age: this.state.age,
      department: this.state.department,
      address: this.state.address,
      salary: this.state.salary,
      id: date
    }
    this.setState({
      persons: [...this.state.persons, obj]
    })
  }

  reset = () => {
    this.setState({
      departmentFilter: null,
      salaryFilter: "asc"
    })
  }

  delete = (e) => {
    const id = e.target.name
    this.setState({
      persons: this.state.persons.filter(ele => ele.id != id)
    })
  }

  edit = (id,name,age,address,department,salary) => {
    const data = this.state.person
    const index = this.state.id
    const person = data.filter(ele=>ele.id==id)
    // console.log(id,name,age,address,department,salary)
    person[0]["name"] = name
    person[0]["age"] = age
    person[0]["address"] = address
    person[0]["department"] = department
    person[0]["salary"] = salary

    this.setState({
      data,
      formEdit:!this.state.formEdit
    })

  }

  toggleState = (e) => {
    const id = e.target.name
    const { formEdit } = this.state
    this.setState({
      person: this.state.persons.filter(ele => ele.id == id),
      formEdit: !formEdit,
      id:id
    })
  }

  render() {
    const { formEdit } = this.state
    const { departmentFilter, salaryFilter } = this.state
    return (
      <div className={styles.App} >

        <div className={styles.flex}>
          {
            formEdit ? <UpdateForm edit={this.edit} person={this.state.person} id={this.state.id}/> :
              <Form submitForm={this.submitForm} handleFormData={this.handleFormData} person={this.state.person} />
          }

        </div>
        <div className={styles.rightDiv}>
          <span style={{ fontSize: 30 }}> Sort by : </span>
          {["asc", "desc"].map(ele => <button name={ele} key={ele} onClick={this.handelOrder}>{ele}</button>)}
          {["Sales", "Marketing", "Devloper", "Hr"].map(ele => <button name={ele} key={ele} onClick={this.handelDepartment}>{ele}</button>)}
          <button onClick={this.reset} className={styles.reset}>Reset</button>
          <hr />
          <table >
            <thead className={styles.thead}>
              <td style={{width:150}}> Name </td>
              <td style={{width:70}}>Department</td>
              <td style={{width:50}}>Age</td>
              <td style={{width:80}}>Salary</td>
              <td style={{width:200}}>Address</td>
              <td >Actions</td>
            </thead>
            <tbody>
              {
                this.state.persons
                  .filter((ele) => {
                    if (departmentFilter !== null) return ele.department === departmentFilter
                    else return true
                  })
                  .sort((a, b) => {
                    if (salaryFilter === "asc") {
                      return Number(a.salary) - Number(b.salary)
                    }
                    else if ((salaryFilter === "desc")) {
                      return Number(b.salary) - Number(a.salary)
                    } else return true
                  })
                  .map(ele => <Table key={ele.name} data={ele} delete={this.delete} edit={this.edit} toggleState={this.toggleState} />)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

