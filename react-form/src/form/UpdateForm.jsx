import React, { Component } from "react"
export default class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.name = React.createRef();
        this.age = React.createRef();
        this.address = React.createRef();
        this.department = React.createRef();
        this.salary = React.createRef();
    }


    test = (e) => {
        e.preventDefault()
        const id = this.props.id 
        const name =this.name.current.value
        const age =this.age.current.value
        const address =this.address.current.value
        const department =this.department.current.value
        const salary =this.salary.current.value
        // console.log(name,age,address,department,salary)
        // console.log(this.props.person,this.props.id)

        this.props.edit(id,name,age,address,department,salary)
    }

    inputData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(e) {
        // const name =this.name.current.value
        // const age =this.age.current.value
        // const address =this.address.current.value
        // const department =this.department.current.value
        // const salary =this.salary.current.value

        // console.log(this.props.person)
        const heading = {
            fontSize: 40,
            fontFamily: "onanimationstart",
            fontWeight: 900,
            color: "wheat",
            textAlign: "center"
        }
        const inputBtn = {
            padding: "10px 20px",
            backgroundColor: "#086972",
            fontSize: 20,
            borderRadius: 5,
            fontWeight: "bolder",
            color: "wheat",
            margin: "5% 0 0 30%"
        }
        // console.log(this.name.current)
        return (
            <div>
                <div style={heading}>Edit Employee Data</div>
                <form onSubmit={e=>this.test(e)} >
                    <label>Name :</label>
                    <input onChange={this.inputData} type="text" name={"name"} ref={this.name} defaultValue={this.props.person[0].name} />
                    <br />
                    <label>Age :</label>
                    <input onChange={this.inputData} type="number" name={"age"} ref={this.age} defaultValue={this.props.person[0].age} />
                    <br />
                    <label>Address :</label>
                    <input onChange={this.inputData} type="text" name={"address"} ref={this.address} style={{ width: "55%" }} defaultValue={this.props.person[0].address} />
                    <br />
                    <label>Department :</label>
                    <select onChange={this.inputData} name="department" style={{ width: "50%", textAlign: "center" }} ref={this.department} defaultValue={this.props.person[0].department}>
                        <option>Select</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Devloper">Devloper</option>
                        <option value="Hr">HR</option>
                    </select>
                    <br />
                    <label>Salary :</label>
                    <input onChange={this.inputData} type="number" name={"salary"} ref={this.salary} defaultValue={this.props.person[0].salary} />
                    <br />
                    <input type="submit" value={"Submit"} style={inputBtn} />
                </form>
            </div>
        )
    }
}